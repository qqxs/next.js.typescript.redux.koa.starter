import http from "http";

/**
 * @description user api routes
 *
 * @param req
 * @param res
 *
 */
export default function handler(
  req: http.IncomingMessage,
  res: http.ServerResponse
): void {
  if (req.method === "GET") {
    // Process a GET request
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ name: "John Doe", msg: `this GET request ` }));
  } else if (req.method === "POST") {
    // Process a POST request
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ name: "John Doe", msg: `this POST request ` }));
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({ name: "John Doe", msg: `this ${req.method} request ` })
    );
  }
}
