import { useState, useEffect } from "react";

function useProductFetcher(filterButton) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await fetch(
          "https://grupparbete.onrender.com/category/all"
        );
        if (!categoriesResponse.ok) {
          throw new Error("Failed to fetch categories");
        }
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);

        let productsUrl = "https://grupparbete.onrender.com/product/all";
        if (filterButton !== "Alla") {
          productsUrl = `https://grupparbete.onrender.com/product/category/${filterButton}`;
        }
        const productsResponse = await fetch(productsUrl);
        if (!productsResponse.ok) {
          console.error("Failed to fetch products");
          setProducts([]);
          return;
        }
        const productsData = await productsResponse.json();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [filterButton]);

  const productsWithCategoryNames = products.map((product) => {
    const category = categories.find(
      (category) => category._id === product.category
    );
    return { ...product, category: category ? category.name : "Unknown" };
  });

  return { products: productsWithCategoryNames, categories };
}

export default useProductFetcher;
