import { useEffect, useState } from "react";

const FAKE_STORE_URL = "https://fakestoreapi.com/products?limit=10";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [searchByTitle, setSearchByTitle] = useState("");

  useEffect(() => {
    fetch(FAKE_STORE_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredByName = searchByTitle
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchByTitle.toLowerCase())
      )
    : products;

  const handleSubmit = (e) => e.preventDefault();
  const handleOnChange = (e) => {
    setSearchByTitle(e.target.value);
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
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <section className="d-flex flex-wrap justify-content-center">
        {filteredByName.map((product) => (
          <div
            key={product.id}
            className="card my-3 mx-2 py-5 px-3"
            style={{ width: "18rem" }}
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
    </>
  );
};

export default ProductCard;
