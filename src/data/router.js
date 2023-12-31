import express from "express";
import * as apiController from "./controllers.js";

// handles incoming requests and sending responses back

export const bookmarkdRouter = express.Router();

bookmarkdRouter.get("/all", apiController.getAllUsers);
bookmarkdRouter.get("/user", apiController.getSpecificUser)
bookmarkdRouter.get("/bookshelves", apiController.getBookshelves)
bookmarkdRouter.get("/books", apiController.getBook)
bookmarkdRouter.get("/user_book_data", apiController.getBookData)
bookmarkdRouter.get("/search", apiController.getSearchResults)

bookmarkdRouter.post("/ai_api", apiController.getAiRec);

bookmarkdRouter.patch("/fav", apiController.addToFavourites)
bookmarkdRouter.delete("/fav", apiController.deleteFromFavourites)

bookmarkdRouter.patch("/complete", apiController.addToCompleted)
bookmarkdRouter.delete("/complete", apiController.deleteFromCompleted)

bookmarkdRouter.patch("/customshelves", apiController.addBookToShelf)

bookmarkdRouter.post("/createbookshelf", apiController.createNewBookshelf)

bookmarkdRouter.patch("/resetbookshelves", apiController.resetBookshelves)

bookmarkdRouter.get("/currentbooks", apiController.getCurrentBooks)

/* 
bookmarkdRouter.get("/", apiController.getRandomBottles);
bookmarkdRouter.get("/id/", apiController.getBottleById);

bookmarkdRouter.post("/", apiController.createBottle);

bookmarkdRouter.patch("/update/", apiController.updateBottleScore);

bookmarkdRouter.delete("/:id", apiController.deleteBottle);

 */