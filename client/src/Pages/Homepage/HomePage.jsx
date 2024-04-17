import React, { useEffect, useState } from "react";
import { Button, Stack, Container, Row, Col } from "react-bootstrap";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import useProductFetcher from "../../Components/ProductFilter";
import { useNavigate, useParams } from "react-router-dom";
import PaginationFunction from "../../Components/Pagination.jsx";

const HomePage = ({ categories }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { category } = params;
  const [filterButton, setFilterButton] = useState("Alla");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(30);
  const [buying, setBuying] = useState([]);
  const [warning, setWarning] = useState(false);

  const { products: filteredProducts } = useProductFetcher(
    filterButton,
    categories
  );

  useEffect(() => {
    setFilterButton(category || "Alla");
  }, [category]);

  useEffect(() => {
    fetchData();
  }, [filterButton]);

  async function fetchData() {
    try {
      const url = category
        ? `https://grupparbete.onrender.com/product/category/${category}`
        : "https://grupparbete.onrender.com/category/all";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products: ", error);
      setProducts([]);
    }
  }

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredProducts.slice(firstPostIndex, lastPostIndex);

  function filterHandler(string) {
    setFilterButton(string);
    if (string === "Alla") {
      navigate("/produkter/alla");
    } else {
      navigate(`/kategori/${string.toLowerCase()}`);
    }
  }

  return (
    <>
      <Header/>
      <Container>
        <Row>
          <Col className="col-3 w-25" style={{ minWidth: "25vh" }}>
            <Stack className="category-buttons">
              <Button
                variant="danger"
                size="lg"
                className="m-1"
                onClick={() => filterHandler("Alla")}
              >
                Alla Produkter
              </Button>
              {categories.map((category, index) => (
                <Button
                  variant="danger"
                  size="lg"
                  className="m-1"
                  key={index}
                  onClick={() => filterHandler(category.name)}
                >
                  {category.name.charAt(0).toUpperCase() +
                    category.name.slice(1)}
                </Button>
              ))}
            </Stack>
          </Col>
          <Col style={{ minHeight: "100vh" }}>
            <Main products={currentPosts} setBuying={setBuying} buying={buying} warning ={warning} setWarning ={setWarning}/>
            <PaginationFunction
              totalposts={filteredProducts.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
            />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default HomePage;
