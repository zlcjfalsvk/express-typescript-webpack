import express from "express";
import HelloController from "./Hello.controller";

export default express.Router().get("/hello", HelloController.get_hello);
