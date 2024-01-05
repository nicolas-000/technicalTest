export const ProductsMarketData = ({ data }) => (
    <ul class="list-group list-group-flush">
        {data.map((product) => {
            const {lowest_active_price, SKU, market } = product;
            return (
                <li className="list-group-item list-group-item-action">Lowest Active Price: {lowest_active_price} <br/> SKU: {SKU} <br/> Market: {market}</li>
            )
        })}
    </ul>
);