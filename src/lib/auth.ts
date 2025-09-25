import { account } from "./appwrite";

/**
 * Handles user login with email and password using Appwrite.
 * @param {string} email The user's email address.
 * @param {string} password The user's password.
 * @returns {Promise<any>} A promise that resolves with the session data on success.
 */
export async function loginWithEmailAndPassword(email, password) {
  try {
    const session = await account.createSession(email, password);
    return session;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}

/**
 * Logs out the current user session.
 */
export async function logout() {
  try {
    await account.deleteSession('current');
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
}