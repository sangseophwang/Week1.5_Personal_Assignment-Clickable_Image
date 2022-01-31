import axios from "axios";
import { ProductInterface } from "Types";

const BASE_URL = "https://cdn.ggumim.co.kr/test/image_product_link.json";

export const getAPI = async () => {
  const response = await axios.get<ProductInterface>(BASE_URL);
  console.log(
    "%c집꾸미기 프로젝트 by 황상섭",
    "text-shadow: 2px 2px 1px rgba(255,121,11,0.5), -2px -2px 1px rgba(125,66,234,0.5);color: rgba(0,0,0,0.6); font-size: 40px; font-weight: bold"
  );
  return response.data;
};
