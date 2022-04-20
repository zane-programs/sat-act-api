import allowCors from "../allowCors";
import { readCollegeData } from "../colleges";

async function handler(req, res) {
  const uuids = req.body.uuid;

  const navianceData = await readCollegeData();

  const dataToSend = navianceData.filter(
    (datum) => uuids.indexOf(datum.uuid) !== -1
  );

  res.status(200).send(dataToSend);
}

export default allowCors(handler);
