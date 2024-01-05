import { Fragment, useState } from "react";
import Products from "./Products";
import { getProducts } from "./GetProducts";
import Search from "./Search";


const ListProducts = () => {
  const [searchProduct, setSearchProduct] = useState('')
  const [filteredResult, setFilteredResult] = useState([])

  const filterResults = (searchTerm) => { 
    const filteredResult = getProducts.filter((ean) =>
      ean.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResult(filteredResult);
  }


  return (
      <Fragment>
        <h1 className="text-center">Products Catalog</h1>
        <Search onChangeCallback={filterResults}/>
        <Products products={getProducts}/>
      </Fragment>
  );
}

export default ListProducts;