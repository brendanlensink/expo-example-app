import { clog } from "../../services/";

export async function loggableRequest<T>(
  url: string,
  method: string,
  headers:
    | Headers
    | string[][]
    | Record<string, string>
    | undefined = undefined,
  body: any | undefined = undefined
): Promise<T> {
  clog.info(`Starting ${method} request:`);
  clog.info(`    url: ${url}`);
  // TODO: we'll probably want to redact this, since it can contain their auth token.
  // It's useful for debugging so going to leave it in for now though.
  clog.info(`    headers: ${JSON.stringify(headers)}`);
  if (body !== undefined) {
    clog.info(`    body: ${JSON.stringify(body)}`);
  }

  return await fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(body),
  }).then((response) => {
    clog.info(`Request returned status code ${response.status}`);
    return response.json();
  });
}
