import cors from "cors";
import express from "express";

import router from "./lib/router";

const { PORT = 3333 } = process.env;

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// Serve API requests from the router
app.use("/api", router);

// Serve app production bundle
app.use(express.static("dist/app"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
