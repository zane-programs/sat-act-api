import { readCollegeData } from "../colleges";

export default async function handler(_req, res) {
  // available to all sites (oops)
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-allow-methods", "GET, POST");

  let navianceData = await readCollegeData();

  let collegesInfo = {};

  navianceData.forEach(({ name, uuid }) => {
    collegesInfo[uuid] = name;
  });

  // send the data
  res.status(200).send(collegesInfo);
}
