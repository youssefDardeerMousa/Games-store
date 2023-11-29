import { Router } from "express";
import { UpdateAuther, deleteAuther, getAuthers, newauthor } from "./auther.controller.js";

const autherRouter=Router()

autherRouter.post("/",newauthor)
autherRouter.get("/",getAuthers)
autherRouter.put("/:id",UpdateAuther)
autherRouter.delete("/:id",deleteAuther)


export default autherRouter