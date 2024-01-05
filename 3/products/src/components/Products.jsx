import { ProductsMarketData } from "./ProductsMarketData";

const Products = ({ products }) => {
    return (
        <div className="row">
            {Object.entries(products).map(([ean, value]) => {
                return (
                    <div className="col">
                        <div className="card shadow-sm p-3 mb-5 bg-body-tertiary rounded mx-auto" style={{width: "22rem", height: "20rem"}}>
                            <div className="card-body overflow-auto">
                                <h5 className="card-title text-capitalize">{value.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{ean}</h6>
                                <p className="card-text">Price Range: {value.price_range}</p>
                                <p className="card-text">Available in {value.markets} markets</p>
                                <ul className="list-group list-group-flush">
                                    <ProductsMarketData data={value.data}/>
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Products;