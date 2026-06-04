export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const backendUrl = env.BACKEND_URL || "http://localhost:8080";
  const targetPath = url.pathname.replace(/^\/api/, "");
  const target = `${backendUrl}${targetPath}${url.search}`;

  const init = {
    method: request.method,
    headers: {},
  };

  if (request.method !== "GET" && request.method !== "HEAD") {
    init.body = request.body;
  }

  request.headers.forEach((value, key) => {
    init.headers[key] = value;
  });

  delete init.headers["host"];

  return fetch(target, init);
}
