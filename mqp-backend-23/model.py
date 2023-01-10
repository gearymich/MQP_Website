'''
This file is used to initialize the database, and to define the classes
used with it.
'''

from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# create the SQLAlchemy base class
Base = declarative_base()
engine = create_engine("sqlite:///database.db") # uses relative path
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)

# define the User model
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String)