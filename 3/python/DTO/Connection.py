import sqlite3

class Connection:
    def __init__(self):
        self.db = sqlite3.connect("python/test.db")
        self.cursor = self.db.cursor()

    def query(self, sql):
        self.cursor.execute(sql)
        return self.cursor

    def commit(self):
        self.db.commit()

    def rollback(self):
        self.db.rollback()

    def close_connection(self):
        self.db.close()
