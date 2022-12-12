import sqlite3

query="INSERT INTO users (name, email) VALUES ('Person X', 'personxxx@gmail.com')"

def add_db(query):
    with sqlite3.connect('database.db') as conn:
        c = conn.cursor()
        c.execute(query)

def read_db():
    with sqlite3.connect('database.db') as conn:
        c = conn.cursor()
        c.execute("SELECT * FROM users")
        print(c.fetchall())

# remove nth element from database
def remove_nth(n):
    with sqlite3.connect('database.db') as conn:
        c = conn.cursor()
        c.execute("DELETE FROM users WHERE id=?", (n,))

if __name__ == '__main__':
    add_db(query)
    read_db()