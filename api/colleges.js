import allowCors from "../allowCors";
import { readCollegeData } from "../colleges";

async function handler(_req, res) {
  // available to all sites (oops)
  res.setHeader("access-control-allow-origin", "*");

  let navianceData = await readCollegeData();

  let collegesInfo = {};

  navianceData.forEach(({ name, uuid, data }) => {
    if (data?.scattergrams) {
      collegesInfo[uuid] = name;
    }
  });

  // send the data
  res.status(200).send(collegesInfo);
}

export default allowCors(handler);
