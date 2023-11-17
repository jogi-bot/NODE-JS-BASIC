//understanding how work

const fs = require("fs");

const buffer = Buffer.from("krunal kem cho", "utf-8");

fs.writeFileSync("example.txt", buffer);
//write krunal kem cho  in file => example.txt

const readStream = fs.createReadStream("example.txt", "utf-8");

//console.log(readStream);

readStream.on("data", (chunk) => {
  console.log("Received Data ", chunk);
});

readStream.on("end", () => {
  console.log("End Task");
});

readStream.on("error", (err) => {
  console.log("Error Reading File", err);
});

console.log(buffer); // showing buffer value

//step another for understanding  createWriteStream how to work
const writeStream = fs.createWriteStream("example.txt");

writeStream.write("Hello ");
writeStream.write("I AM KRUNAL");

writeStream.end();

writeStream.on("data", (chunk) =>
  console.log("write opretion is finish", chunk)
);

//Hello I AM KRUNAL

//readStream understanding into deep

const readStream = fs.createReadStream("example.txt");

readStream.on("data", (chunk) => {
  console.log(chunk); //<Buffer 48 65 6c 6c 6f 20 49 20 41 4d 20 4b 52 55 4e 41 4c>
});

setTimeout(() => {
  console.log(readStream.read(2)); //
}, 1000);
