import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";
const apiKey = import.meta.env.VITE_APP_API_KEY;
const basURL = import.meta.env.VITE_APP_BASE_URL;

export const newsData = atomFamily({
  key: "newsData",
  default: [],
});

export const newsFetch = selectorFamily({
  key: "fetchData",
  get:
    (type) =>
    async ({ get }) => {
      const response = await axios.get(`${basURL}${type}&apiKey=${apiKey}`);
      return response.data;
    },
});
