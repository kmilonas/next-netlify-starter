import React from "https://esm.sh/react";
import { renderToReadableStream } from "https://esm.sh/react-dom/server";
import type { Config, Context } from "@netlify/edge-functions";

export default async function handler(req: Request, context: Context) {
  const stream = await renderToReadableStream(
    <html>
      <body>
<iframe width="100%" height="300px" frameborder="0" allowfullscreen allow="geolocation" 
src="//umap.openstreetmap.fr/en/map/swim-spots_955902?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&captionMenus=true#7/58.119/18.787"></iframe><p><a href="//umap.openstreetmap.fr/en/map/swim-spots_955902?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=false&onLoadPanel=undefined&captionBar=false&captionMenus=true#7/"{context.geo.latitude}/{context.geo.longitude}>
  </p></body>
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