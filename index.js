//load up the required modules
const { osFilePath } = require("./src/utils/file-path-util");
const express = require("express");
const cors = require("cors");
const { shipAscii } = require("./ship");
require("dotenv").config();

//load up the env variables
const { PORT, CORS_ALLOWED_URLS, FOLDER_PATH } = process.env;

//start up the app
const app = express();

//enable cors
try {
  const allowedUrls = CORS_ALLOWED_URLS.split(",");
  app.use(cors({ origin: allowedUrls }));
} catch (e) {
  console.error("\nPlease create a .env that includes: CORS_ALLOWED_URLS");
  console.log(
    "CORS_ALLOWED_URLS should be a comma separated list of urls that are allowed to access this server.\n"
  );
}

//use json
app.use(express.json());

//serve all the neccesary files when we hit the main endpoint
console.log(`looking for the front end in: ${FOLDER_PATH ?? "build"}`);
app.use("/", (req, res) => {
  res.sendFile(osFilePath(`${FOLDER_PATH ?? "build"}/index.html`), {
    root: __dirname,
  });
});

//start the server if the port has been provided in a .env
if (!PORT) {
  console.error("\nPlease create a .env that includes: PORT");
  console.log(
    "PORT should be the port number that the server should listen on.\n"
  );
  process.exit(1);
}
app.listen(PORT, () => {
  console.log(
    shipAscii,
    `\nAye ship set sail from port: ${PORT}, swab the deck and keep a lookout for the front-end that has been hoisted.`
  );
});
