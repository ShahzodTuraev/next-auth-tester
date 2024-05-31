"use server";
const pool = require("../../../config/db");
export async function GET(req: any, res: any) {
  const actors = await pool.query(`SELECT * FROM public."student" LIMIT 10`);
  console.log("come");

  return Response.json(actors.rows);
}
