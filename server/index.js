const {
  Client,
  logger,
  Variables,
} = require("camunda-external-task-client-js");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
var bodyParser = require("body-parser");
const categoryRoute = require("./routes/category");

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
dotenv.config();
app.use(express.json());

//ROUTES
app.use("/v1/category", categoryRoute);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(5000, () => {
  console.log("Backend is running on port 5000");
});

// configuration for the Client:
//  - 'baseUrl': url to the Process Engine
//  - 'logger': utility to automatically log important events

// const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };

// // create a Client instance with custom configuration
// const client = new Client(config);

// // subscribe to the topic: 'creditScoreChecker'
// client.subscribe("test_demo", async function ({ task, taskService }) {
//   // Put your business logic
//   // complete the task
//   // app.use(
//   //   cors({
//   //     origin: "*",
//   //     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   //     preflightContinue: false,
//   //     optionsSuccessStatus: 204,
//   //   })
//   // );
//   // dotenv.config();
//   // app.use(express.json());
//   // //ROUTES
//   // app.use("/v1/category", categoryRoute);
//   // mongoose
//   //   .connect(process.env.MONGO_URL, {
//   //     useNewUrlParser: true,
//   //     useUnifiedTopology: true,
//   //   })
//   //   .then(console.log("Connected to MongoDB"))
//   //   .catch((err) => console.error(err));
//   // app.use(bodyParser.json({ limit: "50mb" }));
//   // app.use(cors());
//   // app.use(morgan("common"));
//   // app.get("/", (req, res) => {
//   //   res.send("Hello world!");
//   // });
//   // app.listen(5000, () => {
//   //   console.log("Backend is running on port 5000");
//   // });
//   // await taskService.complete(task);
// });
