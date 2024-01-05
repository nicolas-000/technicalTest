from DTO.Connection import Connection

def getLowestActivePriceProducts():
    try:
        con = Connection()
        sql = "SELECT MIN(COALESCE(price.discount_price, price.normal_price)) AS lowest_price, product.ean, product.sku, market.name, product.name FROM product LEFT JOIN price ON price.product_id = product.ID LEFT JOIN market ON market.ID = product.market_id WHERE price.active = TRUE GROUP BY product.ean, product.sku, market.name;"
        cursor = con.query(sql)
        data = cursor.fetchall()
        con.close_connection()

        return data
    except Exception as e:
        print(e)

def getMarketCount(ean):
    try:
        con = Connection()
        sql = "SELECT COUNT(market_id) FROM product WHERE Ean = '{}';".format(ean)
        cursor = con.query(sql)
        data = cursor.fetchone()
        con.close_connection()
        
        return data
    except Exception as e:
        print(e)

def getMaxPrice(ean):
    try:
        con = Connection()
        sql = "SELECT MAX(COALESCE(MAX(price.discount_price), 0), COALESCE(MAX(price.normal_price), 0)) AS max_price FROM product LEFT JOIN price ON price.product_id = product.ID WHERE Ean = '{}';".format(ean)
        cursor = con.query(sql)
        data = cursor.fetchone()
        con.close_connection()
        
        return data
    except Exception as e:
        print(e)

def getMinPrice(ean):
    try:
        con = Connection()
        sql = "SELECT MIN(COALESCE(MIN(price.discount_price), 0), COALESCE(MIN(price.normal_price), 0)) AS max_price FROM product LEFT JOIN price ON price.product_id = product.ID WHERE Ean = '{}';".format(ean)
        cursor = con.query(sql)
        data = cursor.fetchone()
        con.close_connection()
        
        return data
    except Exception as e:
        print(e)
