import { readCollegeData } from "../colleges";

export default async function handler(_req, res) {
  let navianceData = await readCollegeData();

  let collegesInfo = {};

  navianceData.forEach(({ name, uuid }) => {
    collegesInfo[uuid] = name;
  });

  // send the data
  res.status(200).send(collegesInfo);
}
