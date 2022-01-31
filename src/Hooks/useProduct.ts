import { useState, useEffect } from "react";
import { Product } from "Types";
import { getAPI } from "API";

export default function useProduct() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [product, setProduct] = useState<Product>({
    id: 0,
    imageUrl: "",
    productList: [],
  });

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getAPI();
        setProduct(data);
      } catch (event) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return {
    product,
    loading,
    error,
  };
}
