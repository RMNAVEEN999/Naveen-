const express = require("express");
const app = express();

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");
const dpPath = path.join(__dirname, goodreads.db);
let dp = null;

const inistalizeDDAndServer = async () => {
  try {
    dp = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
        console.log("Server is running at http://localhost:3000");
    });
}catch (e) {
    console.log(`DB Error:${e.message}`);
    process.exit(1);
  
};
inistalizeDDAndServer();

app.get("/books/",async(request,response) =>{
    const getBooksQuries =`
    SELECT
    *
    FROM 
    book
    ORDER  BY
    book_id;`;
const bookArray = await db.all(getBooksQuries);
response.send(bookArray);


})