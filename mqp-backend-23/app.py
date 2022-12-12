from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
import uvicorn

# create the SQLAlchemy base class
Base = declarative_base()

# define the User model
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String)

# create a SQLite database, create the tables
engine = create_engine("sqlite:///database.db")
Base.metadata.create_all(engine)

# create a new session, database and tables
Session = sessionmaker(bind=engine)
app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# create a new user
@app.get("/users")
def get_users():
    # create a new session
    session = Session()
    try:
        # retrieve all users from the database, return as a JSON response
        users = session.query(User).all()
        return users
    finally:
        # close the session
        session.close()

if __name__ == "__main__":
    # open endpoint onto the relevant url using uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)