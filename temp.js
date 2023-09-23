// const url = "https://wt-mini-project.netlify.app/api/get-users"; // Replace with your desired URL
// const https = require("https");

// // const url = 'https://example.com';

// const fs = require("fs");

// function createJsonFile(dataObject, fileName) {
//   const jsonData = JSON.stringify(dataObject, null, 2); // Convert object to formatted JSON string

//   fs.writeFile(`${fileName}.json`, jsonData, "utf8", (err) => {
//     if (err) {
//       console.error("Error writing JSON file:", err);
//     } else {
//       console.log(`${fileName}.json file has been created successfully.`);
//     }
//   });
// }

// https
//   .get(url, (response) => {
//     let data = "";

//     response.on("data", (chunk) => {
//       data += chunk;
//     });

//     response.on("end", () => {
//       console.log("Response data:", JSON.parse(data));
//       createJsonFile(JSON.parse(data), "data");
//       console.log("data.json saved");
//     });
//   })
//   .on("error", (error) => {
//     console.error("Error:", error);
//   });

const crypto = require("crypto");

function calculateSHA256(input) {
  const hash = crypto.createHash("sha256");
  hash.update(input);
  return hash.digest("hex");
}

const input = "123456".repeat(1);
const sha256Hash = calculateSHA256(input);

console.log("SHA-256 Hash:", sha256Hash);
