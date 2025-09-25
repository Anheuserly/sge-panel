// src/components/Dashboard/FireIncidents.jsx
"use client";

import { useState, useEffect } from "react";
import { databases, Query } from "../../lib/appwrite";
import CollectionMonitor from "./CollectionMonitor";

const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_FIRE_INCIDENTS_COLLECTION_ID;
const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;

export default function FireIncidents() {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIncidents();
  }, []);

  const fetchIncidents = async () => {
    try {
      const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
        Query.orderDesc("$createdAt"),
      ]);
      setIncidents(res.documents);
    } catch (err) {
      console.error("Error fetching fire incidents:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading fire incidents...</p>;

  return (
    <CollectionMonitor
      collectionName="Fire Incidents"
      collectionId={COLLECTION_ID}
      attributes={["incidentName", "location", "severity", "status", "reportedBy", "createdAt"]}
    />
  );
}
