import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      // const x = req.body;
      const body = req.body;
      const key = `notes.${body.date}.tec_id`;
      const value = `${body.tec_id}`;

      const { db } = await connectToDatabase();
      const response = await db
        .collection("lista")
        .find({ "notes. /*aqui teria que vir a data */ .tec_id`": value })
        .toArray();

      res.status(200).send(response);
    } catch (error) {
      res.status(404).send(error);
    }
  } else {
    res.status(400).send("Corrija o método de requisição");
  }
};
