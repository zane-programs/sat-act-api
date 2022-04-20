import { readCollegeData } from "../colleges";

export default async function handler(req, res) {
  // available to all sites (oops)
  res.setHeader("access-control-allow-origin", "*");

  const uuids = req.body.uuid;
  console.log(uuids);

  const navianceData = await readCollegeData();

  const dataToSend = navianceData.filter(
    (datum) => uuids.indexOf(datum.uuid) !== -1
  );

  res.status(200).send(dataToSend);
}
