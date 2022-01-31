import axios from "axios";
import { Product } from "Types";

const BASE_URL = "https://cdn.ggumim.co.kr/test/image_product_link.json";

export const getAPI = async () => {
  const response = await axios.get<Product>(BASE_URL);
  return response.data;
};
