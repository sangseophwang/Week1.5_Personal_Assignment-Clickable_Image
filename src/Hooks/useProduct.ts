import { useState, useEffect } from "react";
import { ProductInterface } from "Types";
import { getAPI } from "API";

export default function useProduct() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<ProductInterface>({
    id: 0,
    imageUrl: "",
    productList: [],
  });

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getAPI();
        setData(data);
      } catch (event) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return {
    data,
    loading,
    error,
  };
}
