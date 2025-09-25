// src/components/Dashboard/MaintenanceLogs.jsx
"use client";

import { useState, useEffect } from "react";
import { databases, Query } from "../../lib/appwrite";
import CollectionMonitor from "./CollectionMonitor";

const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_MAINTENANCE_COLLECTION_ID;
const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;

export default function MaintenanceLogs() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
        Query.orderDesc("date")
      ]);
      setLogs(res.documents);
    } catch (err) {
      console.error("Error fetching maintenance logs:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading maintenance logs...</p>;

  return (
    <CollectionMonitor
      collectionName="Maintenance Logs"
      collectionId={COLLECTION_ID}
      attributes={["equipmentName", "performedBy", "date", "status", "notes"]}
    />
  );
}
