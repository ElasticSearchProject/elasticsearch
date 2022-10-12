import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import SearchRouter from "./routes/search.js";

dotenv.config();

const app = express();

app.set("etag", false);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use("/api/search", SearchRouter);

app.get("/", (req, res) => {
  res.send("Hello express!");
});

app.listen(process.env.PORT, () => {
  console.log(`server is open on port ${process.env.PORT}!`);
});
