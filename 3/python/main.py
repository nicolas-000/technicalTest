from DAO.Products import getLowestActivePriceProducts, getMarketCount, getMaxPrice, getMinPrice

data = getLowestActivePriceProducts()

products = {}

for product in data:
    if product[1] in products:
        products[product[1]]["data"].append({"lowest_active_price": product[0], "SKU": product[2], "market": product[3]})
    else:
        products[product[1]] = {"name": product[4], "data": [{"lowest_active_price": product[0], "SKU": product[2], "market": product[3]}], "markets": getMarketCount(product[1])[0], "price_range": "({} - {})".format(getMaxPrice(product[1])[0],getMinPrice(product[1])[0])}

print(products)
