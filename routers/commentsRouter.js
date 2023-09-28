import {Router} from "express";
import CommentsController from "../controllers/commentsController.js";

const {createComment, createManyComments, createAllComments, createAllCommentsByItinerary, createCommentById, createCommentByName, updateComment, deleteComment} = CommentsController;

const commentsRouter = Router();

commentsRouter.post("/", createComment);
commentsRouter.post("/many", createManyComments);

commentsRouter.get("/", createAllComments);
commentsRouter.get("/:itineraryId", createAllCommentsByItinerary);
commentsRouter.get("/id/:id", createCommentById);
commentsRouter.get("/name/:itinerary", createCommentByName);

commentsRouter.put("/:id", updateComment);

commentsRouter.delete("/:id", deleteComment);

export default commentsRouter;