import sql from "@/app/api/utils/sql";

// GET specific collection by slug with its letters
export async function GET(request, { params }) {
  try {
    const { slug } = params;

    // Get collection details
    const collections = await sql`
      SELECT * FROM collections WHERE slug = ${slug}
    `;

    if (collections.length === 0) {
      return Response.json(
        { error: 'Collection not found' },
        { status: 404 }
      );
    }

    const collection = collections[0];

    // Get associated letters
    const letters = await sql`
      SELECT * FROM letters 
      WHERE collection_id = ${collection.id}
      ORDER BY sort_order ASC, created_at ASC
    `;

    return Response.json({
      ...collection,
      letters
    });
  } catch (error) {
    console.error('Error fetching collection:', error);
    return Response.json(
      { error: 'Failed to fetch collection' },
      { status: 500 }
    );
  }
}

// PUT update collection
export async function PUT(request, { params }) {
  try {
    const { slug } = params;
    const body = await request.json();
    
    // Build dynamic update query
    const updateFields = [];
    const values = [];
    let paramCount = 0;

    const allowedFields = [
      'name', 'slug', 'description', 'image_url', 
      'letter_count', 'price', 'is_featured', 'sort_order'
    ];

    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        paramCount++;
        updateFields.push(`${field} = $${paramCount}`);
        values.push(body[field]);
      }
    }

    if (updateFields.length === 0) {
      return Response.json(
        { error: 'No valid fields to update' },
        { status: 400 }
      );
    }

    // Add updated_at
    paramCount++;
    updateFields.push(`updated_at = $${paramCount}`);
    values.push(new Date().toISOString());

    // Add slug for WHERE clause
    paramCount++;
    values.push(slug);

    const query = `
      UPDATE collections 
      SET ${updateFields.join(', ')}
      WHERE slug = $${paramCount}
      RETURNING *
    `;

    const updatedCollection = await sql(query, values);

    if (updatedCollection.length === 0) {
      return Response.json(
        { error: 'Collection not found' },
        { status: 404 }
      );
    }

    return Response.json(updatedCollection[0]);
  } catch (error) {
    console.error('Error updating collection:', error);
    if (error.code === '23505') { // Unique violation
      return Response.json(
        { error: 'Collection with this slug already exists' },
        { status: 409 }
      );
    }
    return Response.json(
      { error: 'Failed to update collection' },
      { status: 500 }
    );
  }
}

// DELETE collection
export async function DELETE(request, { params }) {
  try {
    const { slug } = params;

    const deletedCollection = await sql`
      DELETE FROM collections WHERE slug = ${slug}
      RETURNING *
    `;

    if (deletedCollection.length === 0) {
      return Response.json(
        { error: 'Collection not found' },
        { status: 404 }
      );
    }

    return Response.json({ 
      message: 'Collection deleted successfully',
      collection: deletedCollection[0]
    });
  } catch (error) {
    console.error('Error deleting collection:', error);
    return Response.json(
      { error: 'Failed to delete collection' },
      { status: 500 }
    );
  }
}