// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  if (req.method === "GET") {
    const { db } = await connectToDatabase();
    const x = await db.collection("restaurants").find().limit(5).toArray();
    res.status(200).send(x);
  } else {
    res.send("Mude o método de requisição");
  }
};
