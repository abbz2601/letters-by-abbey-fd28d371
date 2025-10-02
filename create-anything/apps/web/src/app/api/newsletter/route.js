import sql from "@/app/api/utils/sql";

// POST subscribe to newsletter
export async function POST(request) {
  try {
    const body = await request.json();
    const { email, name } = body;

    if (!email) {
      return Response.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if already subscribed
    const existing = await sql`
      SELECT * FROM newsletter_subscribers WHERE email = ${email}
    `;

    if (existing.length > 0) {
      // Reactivate if previously unsubscribed
      const updated = await sql`
        UPDATE newsletter_subscribers 
        SET is_active = true, name = ${name || existing[0].name}
        WHERE email = ${email}
        RETURNING *
      `;
      
      return Response.json({
        message: 'Successfully subscribed to newsletter',
        subscriber: updated[0]
      });
    }

    // Create new subscription
    const newSubscriber = await sql`
      INSERT INTO newsletter_subscribers (email, name)
      VALUES (${email}, ${name})
      RETURNING *
    `;

    return Response.json({
      message: 'Successfully subscribed to newsletter',
      subscriber: newSubscriber[0]
    }, { status: 201 });

  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return Response.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}

// GET all newsletter subscribers (for admin use)
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const active = searchParams.get('active');
    
    let query = 'SELECT * FROM newsletter_subscribers';
    const params = [];
    
    if (active === 'true') {
      query += ' WHERE is_active = $1';
      params.push(true);
    }
    
    query += ' ORDER BY subscribed_at DESC';
    
    const subscribers = await sql(query, params);
    
    return Response.json(subscribers);
  } catch (error) {
    console.error('Error fetching newsletter subscribers:', error);
    return Response.json(
      { error: 'Failed to fetch subscribers' },
      { status: 500 }
    );
  }
}