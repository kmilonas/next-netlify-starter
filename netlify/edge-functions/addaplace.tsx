import React from "https://esm.sh/react";
import { renderToReadableStream } from "https://esm.sh/react-dom/server";
import type { Config, Context } from "@netlify/edge-functions";

export default async function handler(req: Request, context: Context) {
  const mylink0 = "https://umap.openstreetmap.fr/en/map/swim-spots_875791#"
  const mylink = mylink0 + context.geo.latitude + "/" + context.geo.longitude;
  const mystyle =  `
  body{font-family: sans-serif; } 
  iframe{height: 60vh; width: 60vw;} `
  //const myiframestyle = "{height: 60%;}"
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
      <h2>Adding a place to the map is easy</h2>

      <ol>
  <li>Click the pen symbol in the top right of the map</li>
  <li>Click the pin symbol in the menu that pops up in the top right</li>
  <li>Put the pin at the location of your plunge spot. Tell the world how amazing it is and how to get there :)
</li>
</ol>
        <iframe width="80vw" height = "80vw" frameborder="0" allowfullscreen allow="geolocation" src= {mylink}></iframe>
        

      </body>
    </html>
  );

  return new Response(stream, {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
}

export const config: Config = {
  path: "/addaplace",
};