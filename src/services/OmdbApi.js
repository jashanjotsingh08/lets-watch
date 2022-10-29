import axios from "axios";

const baseDomain = process.env.VUE_APP_OMDB_API_BASE_DOMAIN;
const baseUrl = `${baseDomain}?apiKey=${process.env.VUE_APP_API_TOKEN}&`;

const getSearchResult = async ({ searchKey, page, type, year }) => {
  let params = {
    s: searchKey,
    type: type,
    y: year,
    page: page,
  };

  if (searchKey) {
    return await axios.get(baseUrl, { params });
  }
};

const getItem = async ({ id, title, plot }) => {
  let params = { i: id, t: title, plot: plot };

  if (id || title) {
    return await axios.get(baseUrl, { params });
  }
};

export { getSearchResult, getItem };
