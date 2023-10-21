import React from "https://esm.sh/react";
import { renderToReadableStream } from "https://esm.sh/react-dom/server";
import type { Config, Context } from "@netlify/edge-functions";

export default async function handler(req: Request, context: Context) {
  const mylink = "//umap.openstreetmap.fr/en/map/swim-spots_955902?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=false&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&captionMenus=true";
  const stream = await renderToReadableStream(
    <html>
      <title>Hello</title>
      <body>
        <h1>Hello {context.geo.country?.name}</h1>

        <iframe width="100%" height="300px" frameborder="0" allowfullscreen allow="geolocation" src= {mylink}></iframe>
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