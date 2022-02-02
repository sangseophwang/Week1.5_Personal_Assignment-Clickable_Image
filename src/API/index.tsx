import axios from "axios";
import { ProductInterface } from "Types";

const BASE_URL = "https://cdn.ggumim.co.kr/test/image_product_link.json";

export const getAPI = async () => {
  const response = await axios.get<ProductInterface>(BASE_URL);
  console.log(
    "%c집꾸미기 프로젝트 by 황상섭",
    "text-shadow: 2px 2px 1px rgba(255,121,11,0.5), -2px -2px 1px rgba(125,66,234,0.5);color: rgba(0,0,0,0.6); font-size: 40px; font-weight: bold"
  );
  console.log(
    "%c저에 대해 궁금하시다면 링크를 눌러주세요 🚀",
    "font-size: 15px; font-weight: normal"
  );
  console.log(
    "%c💌 https://onyx-limburger-373.notion.site/SEOP_Dev-Portfolio-25d18676f50d44e29f3daa3d00ddc79c 💌",
    "font-size: 15px; font-weight: normal"
  );
  return response.data;
};
