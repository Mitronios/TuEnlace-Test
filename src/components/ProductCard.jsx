import { useEffect, useState } from "react";
import MoreProducts from "./MoreProducts";

const FAKE_STORE_URL = "https://fakestoreapi.com/products";

const ProductCard = () => {
  // States
  const [products, setProducts] = useState([]); //For fetching
  const [searchByTitle, setSearchByTitle] = useState(""); //For Searching
  const [displayProducts, setDisplayProducts] = useState([]); // To limit products displayed
  const [page, setPage] = useState(1); // to manage the page

  //Fetching products
  useEffect(() => {
    fetch(FAKE_STORE_URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data); // Store all products
        setDisplayProducts(data.slice(0, 8)); // Display the first 8 products
      });
  }, []);

  useEffect(() => {
    // Update the displayed products when the page changes
    const startIndex = (page - 1) * 8;
    const newProducts = products.slice(0, startIndex + 8);
    setDisplayProducts(newProducts);
  }, [page, products]);

  // Filtering products
  const filteredByName = searchByTitle
    ? displayProducts.filter((product) =>
        product.title.toLowerCase().includes(searchByTitle.toLowerCase())
      )
    : displayProducts;

  // Handling events
  const handleSubmit = (e) => e.preventDefault();

  const handleOnChange = (e) => {
    setSearchByTitle(e.target.value);
  };

  const handleMoreProducts = () => {
    setPage(page + 1);
  };

  return (
    <>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search by Name"
          value={searchByTitle}
          onSubmit={handleSubmit}
          onChange={handleOnChange}
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>
      <section className="d-flex flex-wrap justify-content-center">
        {filteredByName.map((product) => (
          <div
            key={product.id}
            className="card my-3 mx-2 py-5 px-3 bg-light"
            style={{ width: "21rem" }}
          >
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
              style={{ height: "18rem", objectFit: "fill" }}
            />
            <div className="card-body text-start">
              <p className="card-text ">{product.id}</p>
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.price}</p>
              <p className="card-text">{product.description}</p>
            </div>
          </div>
        ))}
      </section>
      <MoreProducts onClick={handleMoreProducts} />
    </>
  );
};

export default ProductCard;
