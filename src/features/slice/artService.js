import axios from "axios";

const API_URL = "/art/";

// Create new Art
const createArt = async (artData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, artData, config);

  return response.data;
};

// Get user Arts
// const getArt = async (token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.get(API_URL, config);

//   return response.data;
// };
// Get all Art
const getArts = async () => {

  const response = await axios.get(API_URL +'all');

  return response.data;
};

// update user Art
const updateArt = async (id, artData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + id , artData, config);

  return response.data;
};

//delete art work
const deleteArt = async (artId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + artId, config);

  return response.data;
};


//single art work
const getSingleArt = async (id) => {

  const response = await axios.get(API_URL +id);

  return response.data;
};

const artService = {
  createArt,
  getArts,
  deleteArt,
  updateArt,
  getSingleArt,
};

export default artService;
