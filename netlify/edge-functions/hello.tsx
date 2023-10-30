import React from "https://esm.sh/react";
import { renderToReadableStream } from "https://esm.sh/react-dom/server";
import type { Config, Context } from "@netlify/edge-functions";

export default async function handler(req: Request, context: Context) {
  const mylink0 = "//umap.openstreetmap.fr/en/map/swim-spots_955902?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=false&onLoadPanel=undefined&captionBar=false&captionMenus=true#7/";
  const mylink = mylink0 + context.geo.latitude + "/" + context.geo.longitude;
  const mystyle =  `
  body{font-family: sans-serif; } 
  iframe{height: 60vh; width: 60vw;} 
  .container {
    position: relative;
    overflow: hidden;
    width: 75%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  }
  
  /* Then style the iframe to fit in the container div with full height and width */
  .responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }`
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
      <p>
        Is your favorite spot missing? 
      <a href = "https://lustrous-horse-2d03ff.netlify.app/addaplace">Add it to the map</a>
      </p>
      <div class="container">
  <iframe class="responsive-iframe" frameborder="0" allowfullscreen allow="geolocation" src= {mylink}></iframe>
       </div>
     
      </body>
    </html>
  ); q

  return new Response(stream, {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
}

export const config: Config = {
  path: "/hello",
};