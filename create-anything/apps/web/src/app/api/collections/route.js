import sql from "@/app/api/utils/sql";

// GET all collections with optional filtering
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');
    
    let query = 'SELECT * FROM collections';
    const params = [];
    
    if (featured === 'true') {
      query += ' WHERE is_featured = $1';
      params.push(true);
    }
    
    query += ' ORDER BY sort_order ASC, created_at DESC';
    
    const collections = await sql(query, params);
    
    return Response.json(collections);
  } catch (error) {
    console.error('Error fetching collections:', error);
    return Response.json(
      { error: 'Failed to fetch collections' },
      { status: 500 }
    );
  }
}

// POST create new collection
export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      name, 
      slug, 
      description, 
      image_url, 
      letter_count = 0, 
      price, 
      is_featured = false, 
      sort_order = 0 
    } = body;

    if (!name || !slug || !price) {
      return Response.json(
        { error: 'Name, slug, and price are required' },
        { status: 400 }
      );
    }

    const newCollection = await sql`
      INSERT INTO collections (name, slug, description, image_url, letter_count, price, is_featured, sort_order)
      VALUES (${name}, ${slug}, ${description}, ${image_url}, ${letter_count}, ${price}, ${is_featured}, ${sort_order})
      RETURNING *
    `;

    return Response.json(newCollection[0], { status: 201 });
  } catch (error) {
    console.error('Error creating collection:', error);
    if (error.code === '23505') { // Unique violation
      return Response.json(
        { error: 'Collection with this slug already exists' },
        { status: 409 }
      );
    }
    return Response.json(
      { error: 'Failed to create collection' },
      { status: 500 }
    );
  }
}