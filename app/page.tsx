// import { sql } from "@vercel/postgres";

// export default async function Cart({
//   params,
// }: {
//   params: { user: string };
// }): Promise<JSX.Element> {
//   const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;

//   return (
//     <div>
//       {rows.map((row) => (
//         <div key={row.id}>
//           {row.id} - {row.quantity}
//         </div>
//       ))}
//     </div>
//   );
// }
import React from "react";

export default function Page() {
  return (
    <div>
      ทดสอบเชื่อมต่อและใช้งาน Postgresql ของ vercel ก็เชื่อมต่อ db ได้ปกติ
    </div>
  );
}
