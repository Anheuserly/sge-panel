// src/components/Dashboard/BillingRecords.jsx
"use client";

import { useState, useEffect } from "react";
import { databases, Query } from "../../lib/appwrite";
import CollectionMonitor from "./CollectionMonitor";

const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_BILLING_COLLECTION_ID;
const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;

export default function BillingRecords() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
        Query.orderDesc("date")
      ]);
      setRecords(res.documents);
    } catch (err) {
      console.error("Error fetching billing records:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading billing records...</p>;

  return (
    <CollectionMonitor
      collectionName="Billing Records"
      collectionId={COLLECTION_ID}
      attributes={["invoiceNumber", "clientName", "amount", "status", "date", "paymentMethod"]}
    />
  );
}
