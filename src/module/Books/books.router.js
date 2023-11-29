import { Router } from "express";
import { deletebook, getAllBook, newbook, updatedbook } from "./Book.controller.js";

const bookRouter=Router()

bookRouter.post("/",newbook)
bookRouter.get("/",getAllBook)
bookRouter.put("/:id",updatedbook)
bookRouter.delete("/:id",deletebook)


export default bookRouter