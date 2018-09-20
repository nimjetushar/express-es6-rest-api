import facets from "../models/facets";
import { Router } from "express";

let router = Router();

// work with different type of api requests (get, post, put, delete)

router.get("/", (req, res) => {
  res.json(facets);
});

router.post("/", (req, res) => {
  console.log(req.body);
  const data = req.body;
  facets.push(data);
  res.json(data);
});

export default router;
