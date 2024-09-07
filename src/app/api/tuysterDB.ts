import { sql } from "@vercel/postgres";

export default async function getAllProducts({
  params,
}: {
  params: { name: string };
}): Promise<any> {
  //   const { rows } = await sql`SELECT * FROM tuysterdb WHERE name LIKE '%${params.name}%'`;
  const { rows } = await sql`SELECT * FROM tuysterdb`;

  return rows;
}

export async function getProducts({
  params,
}: {
  params: { name: string };
}): Promise<any> {
    const { rows } = await sql`SELECT * FROM tuysterdb WHERE name LIKE '%${params.name}%'`;
    //   const { rows } = await sql`SELECT * FROM tuysterdb`;

  return rows;
}
