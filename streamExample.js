const fs = require('fs');

// Create a writable stream
const writableStream = fs.createWriteStream('output.txt');

// Data to write in chunks
const dataChunks = ["Hello, ", "this is a ", "streamed ", "writing example."];
dataChunks.forEach((chunk) => {
  writableStream.write(chunk); // Write each chunk to the file
});

// End the writable stream
writableStream.end(() => {
  console.log("Finished writing to the file.");
});