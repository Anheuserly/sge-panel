// lib/appwrite.js
import { Client, Account, Databases, Storage, Query } from "appwrite";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "https://fra.cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "");

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

// Export collection IDs for easy access
export const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "";

export const COLLECTIONS = {
  PARTNERS: process.env.NEXT_PUBLIC_APPWRITE_PARTNERS_COLLECTION_ID || "",
  CLIENTS: process.env.NEXT_PUBLIC_APPWRITE_CLIENTS_COLLECTION_ID || "",
  SERVICE_REQUESTS: process.env.NEXT_PUBLIC_APPWRITE_SERVICE_REQUESTS_COLLECTION_ID || "",
  VENDORSHOWCASE: process.env.NEXT_PUBLIC_APPWRITE_VENDORSHOWCASE_COLLECTION_ID || "",
  FEED: process.env.NEXT_PUBLIC_APPWRITE_FEED_COLLECTION_ID || "",
  ADMIN: process.env.NEXT_PUBLIC_APPWRITE_ADMIN_COLLECTION_ID || "",
  ANALYSTS: process.env.NEXT_PUBLIC_APPWRITE_ANALYSTS_COLLECTION_ID || "",
  CONTACTS: process.env.NEXT_PUBLIC_APPWRITE_CONTACTS_COLLECTION_ID || "",
  SESSIONS: process.env.NEXT_PUBLIC_APPWRITE_SESSIONS_COLLECTION_ID || "",
  AUDIT_LOGS: process.env.NEXT_PUBLIC_APPWRITE_AUDIT_LOGS_COLLECTION_ID || "",
  // Additional collections
  FIRE_INCIDENTS: process.env.NEXT_PUBLIC_APPWRITE_FIRE_INCIDENTS_COLLECTION_ID || "",
  EQUIPMENT_INVENTORY: process.env.NEXT_PUBLIC_APPWRITE_EQUIPMENT_COLLECTION_ID || "",
  MAINTENANCE_LOGS: process.env.NEXT_PUBLIC_APPWRITE_MAINTENANCE_COLLECTION_ID || "",
  TRAINING_SESSIONS: process.env.NEXT_PUBLIC_APPWRITE_TRAINING_COLLECTION_ID || "",
  BILLING_RECORDS: process.env.NEXT_PUBLIC_APPWRITE_BILLING_COLLECTION_ID || "",
  FEEDBACK: process.env.NEXT_PUBLIC_APPWRITE_FEEDBACK_COLLECTION_ID || ""
};

// Export bucket IDs
export const BUCKETS = {
  PAYMENT: process.env.NEXT_PUBLIC_APPWRITE_PAYMENT_BUCKET_ID || "",
  SHOWCASE: process.env.NEXT_PUBLIC_APPWRITE_SHOWCASE_BUCKET_ID || "",
  FEED: process.env.NEXT_PUBLIC_APPWRITE_FEED_BUCKET_ID || "",
  PARTNERS_DOCS: process.env.NEXT_PUBLIC_APPWRITE_PARTNERS_DOCS_BUCKET_ID || "",
};

// Authentication utilities
export const authService = {
  // Login with phone number (custom implementation)
  async loginWithPhone(phoneNumber, password) {
    try {
      const response = await databases.listDocuments(DATABASE_ID, COLLECTIONS.ANALYSTS, [
        Query.equal("phone_number", phoneNumber),
      ]);

      if (response.documents.length === 0) {
        throw new Error("No analyst found with this phone number");
      }

      const analyst = response.documents[0];

      // Use document ID as login identifier
      const session = await account.createSession(analyst.$id, password);

      // Update last login
      await databases.updateDocument(DATABASE_ID, COLLECTIONS.ANALYSTS, analyst.$id, {
        last_login: new Date().toISOString(),
        is_logged_in: true,
      });

      return { session, analyst };
    } catch (error) {
      throw new Error(`Login failed: ${error.message}`);
    }
  },

  // Get current user
  async getCurrentUser() {
    try {
      const user = await account.get();
      const analyst = await databases.getDocument(DATABASE_ID, COLLECTIONS.ANALYSTS, user.$id);
      return analyst;
    } catch (error) {
      return null;
    }
  },

  // Logout
  async logout() {
    try {
      await account.deleteSession("current");
    } catch (error) {
      console.error("Logout error:", error);
    }
  },

  // Check if user is authenticated
  async isAuthenticated() {
    try {
      await account.get();
      return true;
    } catch (error) {
      return false;
    }
  },
};

export { client, account, databases, storage, Query };
