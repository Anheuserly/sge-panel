// src/components/Dashboard/Feedback.jsx
"use client";

import { useState, useEffect } from "react";
import { databases, Query } from "../../lib/appwrite";
import CollectionMonitor from "./CollectionMonitor";

const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_FEEDBACK_COLLECTION_ID;
const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;

export default function Feedback() {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
        Query.orderDesc("date")
      ]);
      setFeedback(res.documents);
    } catch (err) {
      console.error("Error fetching feedback:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading feedback...</p>;

  return (
    <CollectionMonitor
      collectionName="Feedback"
      collectionId={COLLECTION_ID}
      attributes={["clientName", "service", "rating", "comments", "date"]}
    />
  );
}
