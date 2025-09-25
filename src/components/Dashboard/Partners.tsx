import React from "react";

interface Partner {
  $id: string;
  name: string;
  businessName?: string;
  phone?: string;
  email?: string;
  isOnline?: boolean;
  isVerified?: boolean;
  $createdAt: string;
}

interface PartnersProps {
  partners: Partner[];
}

export default function Partners({ partners }: PartnersProps) {
  const getStatusColor = (isOnline?: boolean) => {
    return isOnline
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";
  };

  const getVerifiedColor = (isVerified?: boolean) => {
    return isVerified
      ? "bg-blue-100 text-blue-800"
      : "bg-gray-100 text-gray-800";
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Partners
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {partners.map((partner) => (
            <li key={partner.$id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-indigo-600 truncate">
                  {partner.businessName || "Unnamed Business"}
                </p>
                <div className="ml-2 flex-shrink-0 flex gap-2">
                  <p
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                      partner.isOnline
                    )}`}
                  >
                    {partner.isOnline ? "Online" : "Offline"}
                  </p>
                  <p
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getVerifiedColor(
                      partner.isVerified
                    )}`}
                  >
                    {partner.isVerified ? "Verified" : "Unverified"}
                  </p>
                </div>
              </div>

              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  {partner.name} • {partner.phone || "No phone"}
                </p>
                <p className="text-sm text-gray-400">
                  {partner.email || "No email"}
                </p>
              </div>

              <div className="mt-2 flex justify-between">
                <p className="text-xs text-gray-500">
                  Partner ID: {partner.$id}
                </p>
                <p className="text-xs text-gray-400">
                  {new Date(partner.$createdAt).toLocaleDateString()}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
