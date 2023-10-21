import React from "https://esm.sh/react";
import { renderToReadableStream } from "https://esm.sh/react-dom/server";
import type { Config, Context } from "@netlify/edge-functions";

export default async function handler(req: Request, context: Context) {
  let a0 = "http://"
  let a1 = 'www.google.com'
  const stream = await renderToReadableStream(
    <html>
      <body>
<iframe width="100%" height="300px" frameborder="0"  
src={a0}{a1}></iframe>
 </body>
    </html>
  );

  return new Response(stream, {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
}

export const config: Config = {
  path: "/hello",
};