// src/components/Dashboard/EquipmentInventory.jsx
"use client";

import { useState, useEffect } from "react";
import { databases, COLLECTIONS, DATABASE_ID, Query } from "../../lib/appwrite";

export default function EquipmentInventory() {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEquipment();
  }, []);

  const fetchEquipment = async () => {
    setLoading(true);
    try {
      const res = await databases.listDocuments(DATABASE_ID, COLLECTIONS.EQUIPMENT_INVENTORY, [
        Query.orderDesc("$createdAt")
      ]);
      setEquipment(res.documents);
    } catch (error) {
      console.error("Error fetching equipment:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Equipment Inventory</h2>
      {equipment.length === 0 ? (
        <p className="text-gray-500">No equipment found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2 border-b">Equipment Name</th>
                <th className="px-4 py-2 border-b">Category</th>
                <th className="px-4 py-2 border-b">Quantity</th>
                <th className="px-4 py-2 border-b">Status</th>
                <th className="px-4 py-2 border-b">Added On</th>
              </tr>
            </thead>
            <tbody>
              {equipment.map((item) => (
                <tr key={item.$id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{item.name}</td>
                  <td className="px-4 py-2 border-b">{item.category}</td>
                  <td className="px-4 py-2 border-b">{item.quantity}</td>
                  <td className="px-4 py-2 border-b">{item.status}</td>
                  <td className="px-4 py-2 border-b">
                    {new Date(item.$createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
