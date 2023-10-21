import React from "https://esm.sh/react";
import { renderToReadableStream } from "https://esm.sh/react-dom/server";
import type { Config, Context } from "@netlify/edge-functions";

export default async function handler(req: Request, context: Context) {
  const mylink0 = "//umap.openstreetmap.fr/en/map/swim-spots_955902?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=false&onLoadPanel=undefined&captionBar=false&captionMenus=true#7/";
  const mylink = mylink0 + context.geo.latitude + "/" + context.geo.longitude;
  const mystyle = "body{  font-family: 'Montserrat', sans-serif; }"
  const stream = await renderToReadableStream(
    <html>
      <head>
      <title>plunge.guide</title>

      <style>
        {mystyle}
    </style>


    </head>
      <body>
        <h1>plunge.guide</h1>
      <h2>Guide to cold plunge spots, powered by you and the community</h2>

        <iframe width="100%" height="300px" frameborder="0" allowfullscreen allow="geolocation" src= {mylink}></iframe>
        
      <p>TBD</p>
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