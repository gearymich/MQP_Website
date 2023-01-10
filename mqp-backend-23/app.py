'''
Main API file for the backend. This file sets up FastAPI, Spacy models
created throughout this MQP, and access to the database.

Will be iterated on heavily this term.
'''

from fastapi import FastAPI, Request
from starlette.middleware.cors import CORSMiddleware
import uvicorn

import spacy
from spacy import displacy

from model import Session, User

#############################
# SpaCy Model
#############################
'''
TODO: Allow multiple types of models to be loaded, switched out on the fly
'''
nlp = spacy.load("en_core_web_sm")


#############################
# FastAPI Setup & Endpoints
#############################
app = FastAPI()
origins = ["http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

'''
under the Spacy tab on the frontend, this endpoint is called once text
is populated in the text box. It returns the entities found in the text
using the nlp model loaded
'''
@app.post("/analyze")
async def analyze_text(request: Request):
    # get the text from the request
    data = await request.json()
    text = data['text']
    doc = nlp(text)
    html = displacy.render(doc, style="ent")
    return {
        "entities": [{"text": ent.text, "label": ent.label_} for ent in doc.ents],
        "html": html,
    }

'''
Prototype Tab 'users' calls this endpoint to populate the
data seen on the webpage.
'''
@app.get("/users")
def get_users():
    session = Session()
    users = session.query(User).all()
    return users

'''
TODO: wrap all functions with CLI tool for ease of use 
'''
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)