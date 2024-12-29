import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

function Home() {
  const [products, setcategory] = useState([]);
  const [loading, setloading] = useState(true)
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setcategory(json));
  });

  return (
    <>
      {" "}
      <Helmet>
        <title>Hello</title>
      </Helmet>
      <h1>Home</h1>
      <input
        placeholder="search"
        type="text"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <button>Search</button>
      {loading ? (
        <div
          className="spinner-grow"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <table className="table table-success table-table-striped">
          <thead>
            <tr>
              <th>photo</th>
              <th>title</th>
              <th>description</th>
              <th>category</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {products
              .filter(
                (x) =>
                  x.title
                    .toLowerCase()
                    .includes(searchItem.toLocaleLowerCase()) ||
                  x.description
                    .toLowerCase()
                    .includes(searchItem.toLocaleLowerCase()) ||
                  x.category
                    .toLowerCase()
                    .includes(searchItem.toLocaleLowerCase())
              )
              .map((product) => (
                <tr key={product.id}>
                  <td>
                    <img src={product.image} height={20} width={20} alt="" />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}


      ;
    </>
  );
}

export default Home;
