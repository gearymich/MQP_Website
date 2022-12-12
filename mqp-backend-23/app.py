from fastapi import FastAPI, Request
from starlette.middleware.cors import CORSMiddleware
from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
import uvicorn

import spacy
from spacy import displacy

from db_schema import Base, User

# # create a SQLite database, create the tables
engine = create_engine("sqlite:///database.db")
Base.metadata.create_all(engine)

# # create a new session, database and tables
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

class TextAnalyzer:
    def __init__(self):
        self.nlp = spacy.load("en_core_web_sm")

    async def analyze_text(self, request: Request):
        # get the text from the request
        data = await request.json()
        text = data['text']
        # print("Text:", text)
        doc = self.nlp(text)
        html = displacy.render(doc, style="ent")
        return {
            "entities": [{"text": ent.text, "label": ent.label_} for ent in doc.ents],
            "html": html,
        }

class UserManager:
    def __init__(self):
        self.session = Session()
    
    def get_users(self):
        try:
            # retrieve all users from the database, return as a JSON response
            users = self.session.query(User).all()
            return users
        finally:
            # close the session
            self.session.close()

class FastAPIServer:
    def __init__(self, app):
        self.app = app
    
        self.user_manager = UserManager()
        self.text_analyzer = TextAnalyzer()

        self.app.get("/users")(self.user_manager.get_users)
        self.app.post("/analyze")(self.text_analyzer.analyze_text)

    def run(self):
        uvicorn.run(self.app, host="0.0.0.0", port=8000)

if __name__ == "__main__":
    server = FastAPIServer(app)
    server.run()