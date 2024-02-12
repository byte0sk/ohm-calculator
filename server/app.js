require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const API_BASE_PATH = "/api";

const resistanceRouter = require("./routes/resistance");
const ResistanceSchema = require("./models/resistance");

async function initializeColorCodes() {
  try {
    const defaultColorCodes = [
      {
        displayName: "No Color",
        color: "transparent",
        code: "",
        significantFigure: null,
        multiplier: null,
        tolerance: 20,
      },
      {
        displayName: "Pink",
        color: "#c44fa1",
        code: "PK",
        significantFigure: null,
        multiplier: 0.001,
        tolerance: null,
      },
      {
        displayName: "Silver",
        color: "#a3a3a3",
        code: "SR",
        significantFigure: null,
        multiplier: 0.01,
        tolerance: 10,
      },
      {
        displayName: "Gold",
        color: "#c79d14",
        code: "GD",
        significantFigure: null,
        multiplier: 0.1,
        tolerance: 5,
      },
      {
        displayName: "Black",
        color: "#1c1c1c",
        code: "BK",
        significantFigure: 0,
        multiplier: 1,
        tolerance: null,
      },
      {
        displayName: "Brown",
        color: "#594b3e",
        code: "BN",
        significantFigure: 1,
        multiplier: 10,
        tolerance: 1,
      },
      {
        displayName: "Red",
        color: "#c73e32",
        code: "RD",
        significantFigure: 2,
        multiplier: 100,
        tolerance: 2,
      },
      {
        displayName: "Orange",
        color: "#e67330",
        code: "OG",
        significantFigure: 3,
        multiplier: 1000,
        tolerance: 0.05,
      },
      {
        displayName: "Yellow",
        color: "#f2d938",
        code: "YE",
        significantFigure: 4,
        multiplier: 10000,
        tolerance: 0.02,
      },
      {
        displayName: "Green",
        color: "#23ad27",
        code: "GN",
        significantFigure: 5,
        multiplier: 100000,
        tolerance: 0.5,
      },
      {
        displayName: "Blue",
        color: "#232aad",
        code: "BU",
        significantFigure: 6,
        multiplier: 1000000,
        tolerance: 0.25,
      },
      {
        displayName: "Violet",
        color: "#8123ad",
        code: "VT",
        significantFigure: 7,
        multiplier: 10000000,
        tolerance: 0.1,
      },
      {
        displayName: "Grey",
        color: "#7a7a7a",
        code: "GY",
        significantFigure: 8,
        multiplier: 100000000,
        tolerance: 0.01,
      },
      {
        displayName: "White",
        color: "white",
        code: "WH",
        significantFigure: 9,
        multiplier: 1000000000,
        tolerance: null,
      },
    ];
    // Check if the color codes have already been initialized
    const count = await ResistanceSchema.countDocuments();
    if (count === 0) {
      // If not, insert the default color codes
      await ResistanceSchema.insertMany(defaultColorCodes);
      console.log("Default color codes have been initialized.");
    } else {
      console.log("Color codes are already initialized.");
    }
  } catch (error) {
    console.error("Error initializing color codes:", error);
  }
}

mongoose.connect(process.env.DATABASE_CONN, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", (error) => console.log("Connected to DB!"));

app.use(express.json());
app.use(`${API_BASE_PATH}/resistance`, resistanceRouter);
app.listen(PORT, () => {
  console.log("Server started! Listening on port " + PORT);
  initializeColorCodes();
});
