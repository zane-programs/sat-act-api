import { readCollegeData } from "../../colleges";

export default async function handler(req, res) {
  const navianceData = await readCollegeData();

  res
    .status(200)
    .send(navianceData.find(({ uuid }) => uuid === req.query.uuid));
}
