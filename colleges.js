const { readdir, readFile } = require("fs").promises;
const { join: joinPath } = require("path");

export async function readCollegeData() {
  // get file names for naviance data
  const navianceDataFileNames = await readdir(joinPath(__dirname, "./data"));

  // wait for all to complete
  let navianceData = []; // object for naviance data
  await Promise.all(
    navianceDataFileNames.map(async (fileName) => {
      let data = JSON.parse(
        (await readFile(joinPath(__dirname, "./data/" + fileName))).toString()
      );
      navianceData.push(data);
    })
  );

  return navianceData;
}
