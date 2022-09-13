import axios from "axios";

const baseDomain = process.env.VUE_APP_OMDB_API_BASE_DOMAIN;
const baseUrl = `${baseDomain}?apiKey=${process.env.VUE_APP_API_TOKEN}&`;

// const apiResource = axios.create({ baseURL: baseUrl });

const getSearchResult = async ({ searchKey, page, type, year }) => {
  if (searchKey) {
    let params = {
      s: searchKey,
      type: type,
      y: year,
      page: page,
    };
    return await axios.get(baseUrl, { params });
  }
};

const getItem = async ({ id, title, plot }) => {
  if (id || title) {
    console.log(id);
    let params = { i: id, t: title, plot: plot };
    return await axios.get(baseUrl, { params });
  }
};

export { getSearchResult, getItem };
