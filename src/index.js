import http from "http";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import compression from "compression";
import helmet from "helmet";

import initializeDb from "./db";
import middleware from "./middleware";
import api from "./controllers";
import config from "./config.json";

const app = express(),
  server = http.createServer(app);

// logger
app.use(morgan("dev"));

// 3rd party middleware for handleing cors error
app.use(
  cors({
    exposedHeaders: config.corsHeaders
  })
);

// body parser for parsing the request data
// can add different parser for parsing different type of request
app.use(
  bodyParser.json({
    limit: config.bodyLimit
  })
);

app.use(compression);
app.use(helmet);

// connect to db
initializeDb(config).then(db => {
  // internal middleware
  app.use(middleware({ config, db }));

  // api router
  app.use("/api", api({ config, db }));

  server.listen(process.env.PORT || config.port, () => {
    console.log(`Started on port ${server.address().port}`);
  });
});

export default app;
