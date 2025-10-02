"use client";

import { useState, useEffect } from "react";

export function useCollection(slug) {
  const [collection, setCollection] = useState(null);
  const [letters, setLetters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (slug) {
      fetchCollection();
    }
  }, [slug]);

  const fetchCollection = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log('Fetching collection from hardcoded data for slug:', slug);
      
      // Hardcoded collection data since Create.xyz has issues with static JSON files
      const collectionsData = {
        "love-letters": {
          "id": "1",
          "name": "Love Letters",
          "slug": "love-letters",
          "description": "Heartfelt letters expressing love and affection. Perfect for anniversaries, romantic gestures, or simply expressing your deepest feelings.",
          "image_url": "/images/love-collection.jpg",
          "price": "25.00",
          "price_range": "$20 - $35",
          "letter_count": 5,
          "letters": [
            {
              "id": "love-1",
              "title": "Classic Love Letter",
              "description": "A timeless expression of love",
              "image_url": "/images/love-letter-1.jpg", 
              "price": "25.00",
              "sample_text": "My dearest love...",
              "available": true
            }
          ],
          "shopify_product_id": "gid://shopify/Product/123456789"
        },
        "gratitude": {
          "id": "2",
          "name": "Gratitude Collection",
          "slug": "gratitude",
          "description": "Letters expressing heartfelt appreciation and thankfulness. Perfect for showing someone how much they mean to you.",
          "image_url": "/images/gratitude-collection.jpg",
          "price": "22.00",
          "price_range": "$15 - $30",
          "letter_count": 4,
          "letters": [
            {
              "id": "gratitude-1",
              "title": "Thank You Letter",
              "description": "Express your heartfelt gratitude",
              "image_url": "/images/thank-you-letter.jpg", 
              "price": "20.00",
              "sample_text": "I wanted to take a moment...",
              "available": true
            }
          ],
          "shopify_product_id": "gid://shopify/Product/123456790"
        },
        "encouragement": {
          "id": "3",
          "name": "Encouragement Letters",
          "slug": "encouragement",
          "description": "Uplifting letters for difficult times. These letters provide comfort, hope, and strength when you need it most.",
          "image_url": "/images/encouragement-collection.jpg",
          "price": "23.00",
          "price_range": "$18 - $28",
          "letter_count": 6,
          "letters": [
            {
              "id": "encouragement-1",
              "title": "Strength & Hope Letter",
              "description": "A letter to remind you of your inner strength",
              "image_url": "/images/encouragement-letter-1.jpg", 
              "price": "22.00",
              "sample_text": "In times of uncertainty...",
              "available": true
            }
          ],
          "shopify_product_id": "gid://shopify/Product/123456791"
        }
      };

      const data = collectionsData[slug];
      if (!data) {
        throw new Error(`Collection "${slug}" not found`);
      }

      // Extract letters and create collection object without letters
      const { letters, ...collectionData } = data;
      setCollection(collectionData);
      setLetters(letters || []);
    } catch (error) {
      console.error("Error fetching collection:", error);
      setError("Could not load collection");
    } finally {
      setLoading(false);
    }
  };

  return { collection, letters, loading, error };
}
