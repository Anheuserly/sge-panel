// src/components/Dashboard/TrainingSessions.jsx
"use client";

import { useState, useEffect } from "react";
import { databases, Query } from "../../lib/appwrite";
import CollectionMonitor from "./CollectionMonitor";

const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_TRAINING_COLLECTION_ID;
const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;

export default function TrainingSessions() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
        Query.orderAsc("date")
      ]);
      setSessions(res.documents);
    } catch (err) {
      console.error("Error fetching training sessions:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading training sessions...</p>;

  return (
    <CollectionMonitor
      collectionName="Training Sessions"
      collectionId={COLLECTION_ID}
      attributes={["title", "trainer", "date", "duration", "participants", "status"]}
    />
  );
}
