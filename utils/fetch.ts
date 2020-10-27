import fetch from "isomorphic-fetch";

const BASE_URL = "http://localhost:3002/api/v1";

function initRequest(url: string, init?: RequestInit): [string, RequestInit] {
  let headers = {};

  url = BASE_URL + url;

  if (init && init.headers) {
    headers = Object.assign(
      {
        Authorization: `Bearer `, // 带上token的地方
        "Content-Type": "application/json"
      },
      headers
    );
  }

  return [url, { ...init, headers }];
}

/**
 * @description fetch get
 *
 * @param {string} url 请求接口
 * @param init 请求配置项
 *
 * @returns fetch get data
 */
export async function fetchGet(
  url: string,
  init?: RequestInit
): Promise<Response> {
  [url, init] = initRequest(url, init);
  const res = await fetch(url, init);
  return res.json();
}

export async function fetchPost(
  url: string,
  body: BodyInit,
  init?: Omit<RequestInit, "body">
): Promise<Response> {
  [url, init] = initRequest(url, {
    ...init,
    method: "POST",
    body: JSON.stringify(body)
  });

  const res = await fetch(url, init);

  return res.json();
}

export async function fetchPut(
  url: string,
  body?: BodyInit,
  init?: Omit<RequestInit, "body">
): Promise<Response> {
  [url, init] = initRequest(url, {
    ...init,
    method: "PUT",
    body: JSON.stringify(body)
  });

  const res = await fetch(url, init);

  return res.json();
}

export async function fetchDelete(
  url: string,
  body?: BodyInit,
  init?: Omit<RequestInit, "body">
): Promise<Response> {
  [url, init] = initRequest(url, {
    ...init,
    method: "DELETE",
    body: JSON.stringify(body)
  });

  const res = await fetch(url, init);

  return res.json();
}
