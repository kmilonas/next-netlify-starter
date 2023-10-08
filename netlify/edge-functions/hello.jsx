
import { Context } from "@netlify/edge-functions";

export default () => new Response("Hello world in ?{context.geo?.country?.code}");

export const config = { path: "/test" };
