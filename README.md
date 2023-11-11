# Basic React Flask Docker Compose App
1. `cd frontend`
2. move the Dockerfile.frontend and .dockerignore out of folder
3. `npx create-react-app .` 
   
   As of right now, the docker compose script looks for the react app in the frontend  directory. You should create this with the lastest react version
4. move the Dockerfile.frontend and .dockerignore back into frontend folder
5. `docker-compose up`

This project is still a work in progress, but the goal is to keep it a lightweight, and readable as possible for people to reference.

Extra Features
---
- If you want to make a new react component quickly and consistently, you can use the architecure_generator.py script to generate a new component with a basic structure.
- Hot Reloading Included (Reload time is decently quick for docker nodejs)

References 
--- 
OpenAI. (2023). ChatGPT [Large language model]. https://chat.openai.com

CoPilot. (2023). GitHub Copilot [AI pair programmer]. https://copilot.github.com

React. (2023). React [JavaScript library]. https://reactjs.org