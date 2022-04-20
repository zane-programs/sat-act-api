import { readCollegeData } from "../../colleges";

export default async function handler(req, res) {
  // available to all sites (oops)
  res.setHeader("access-control-allow-origin", "*");

  const navianceData = await readCollegeData();

  res
    .status(200)
    .send(navianceData.find(({ uuid }) => uuid === req.query.uuid));
}
