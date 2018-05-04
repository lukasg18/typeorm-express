import * as path from "path";
import * as express from "express";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";
import { createExpressServer } from "routing-controllers";

// Creates and configures an ExpressJS web server.

// ref to Express instance
const config: express.Application = express();

config.use(morgan("dev"));
config.use(bodyParser.json());
config.use(bodyParser.urlencoded({ extended: false }));

const app = createExpressServer({
  controllers: [] // we specify controllers we want to use
});

export { app };
