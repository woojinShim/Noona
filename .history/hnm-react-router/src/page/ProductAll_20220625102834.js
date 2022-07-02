import React from "react";

export const ProductAll = () => {

  const getProducts = () => {
    let url = `http://localhost:5000/products`;
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
  }
  useEffect(() => {
    getProducts()
  }, [])

  return <div>ProductAll</div>;
};
