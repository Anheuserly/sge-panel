// src/components/Dashboard/JobApplications.jsx
"use client";

import { useState, useEffect } from "react";
import { databases, Query } from "../../lib/appwrite";
import CollectionMonitor from "./CollectionMonitor";

const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_JOB_APPLICATIONS_COLLECTION_ID;
const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;

export default function JobApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
        Query.orderDesc("$createdAt")
      ]);
      setApplications(res.documents);
    } catch (err) {
      console.error("Error fetching job applications:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading job applications...</p>;

  return (
    <CollectionMonitor
      collectionName="Job Applications"
      collectionId={COLLECTION_ID}
      attributes={[
        "candidateName",
        "email",
        "phone",
        "position",
        "experience",
        "location",
        "resumeFile",
        "status",
        "appliedAt"
      ]}
    />
  );
}
