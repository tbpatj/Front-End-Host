require("dotenv").config();
const { ENVIRONMENT_OS } = process.env;

const osFilePath = (pathInMac) => {
  if (
    ENVIRONMENT_OS === "MAC" ||
    ENVIRONMENT_OS === "LINUX" ||
    ENVIRONMENT_OS === "UNIX"
  )
    return pathInMac;
  return pathInMac.replaceAll("/", `\\`);
};

module.exports = { osFilePath };
