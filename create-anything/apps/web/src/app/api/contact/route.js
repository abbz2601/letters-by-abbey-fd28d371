import sql from "@/app/api/utils/sql";

// POST submit contact form
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create new contact message
    const newMessage = await sql`
      INSERT INTO contact_messages (name, email, subject, message)
      VALUES (${name}, ${email}, ${subject}, ${message})
      RETURNING *
    `;

    return Response.json({
      message: 'Contact message sent successfully',
      contact: newMessage[0]
    }, { status: 201 });

  } catch (error) {
    console.error('Error submitting contact form:', error);
    return Response.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}

// GET all contact messages (for admin use)
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    
    let query = 'SELECT * FROM contact_messages';
    const params = [];
    
    if (status) {
      query += ' WHERE status = $1';
      params.push(status);
    }
    
    query += ' ORDER BY created_at DESC';
    
    const messages = await sql(query, params);
    
    return Response.json(messages);
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    return Response.json(
      { error: 'Failed to fetch contact messages' },
      { status: 500 }
    );
  }
}