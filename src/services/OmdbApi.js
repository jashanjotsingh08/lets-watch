import axios from "axios";

const baseDomain = process.env.VUE_APP_OMDB_API_BASE_DOMAIN;
const baseUrl = `${baseDomain}?apiKey=${process.env.VUE_APP_API_TOKEN}&`;

// const apiResource = axios.create({ baseURL: baseUrl });

const getSearchResult = async (params) => {
  return await axios.get(baseUrl, { params });
};

const getMovie = async (params) => {
  return await axios.get(baseUrl, { ...params });
};

export { getSearchResult, getMovie };
