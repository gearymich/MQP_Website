from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

# create the SQLAlchemy base class
Base = declarative_base()

# define the User model
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String)