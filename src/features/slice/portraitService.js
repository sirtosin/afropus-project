import axios from "axios";

const API_URL = "/portrait/";

// Create new Portrait
const createPortrait = async (portraitData) => {
  const response = await axios.post(API_URL, portraitData);

  return response.data;
};

// Get all Portrait
const getPortraits = async () => {
  const response = await axios.get(API_URL + "all");

  return response.data;
};

const portriatService = {
  createPortrait,
  getPortraits,
};

export default portriatService;
