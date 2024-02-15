import { db } from "@/lib/connection";

export default async function handler(req, res) {
  try {
    const resp = await db.collection("internships").find().toArray();
    res.status(200).send(resp);
  } catch (err) {
      res.send(err.message);
  }
}
