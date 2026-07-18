import API from "./api";

export const registerForEvent = (eventId, walletAddress) => {
  return API.post("/register", { eventId, walletAddress });
};