import { readCollegeData } from "../colleges";

export default async function handler(req, res) {
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-allow-methods", "POST, GET, OPTIONS");
  res.setHeader("access-control-allow-headers", "*");

  const uuids = req.body.uuid;

  const navianceData = await readCollegeData();

  const dataToSend = navianceData.filter(
    (datum) => uuids.indexOf(datum.uuid) !== -1
  );

  res.status(200).send(dataToSend);
}
