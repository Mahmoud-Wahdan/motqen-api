import { Router } from "express";
import apiV1Router from "./api/v1/api.js";

const mainRouter = Router();

mainRouter.use("/v1", apiV1Router);

export default mainRouter;
