const BASE_API = 'http://localhost:4000/';

function maybeStringify(json) {
  if (json === undefined) return undefined;
  return JSON.stringify(json);
}

function makeRequest(route, method, body = undefined) {
  return new Request(BASE_API + route, {
    method,
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: maybeStringify(body),
  });
}

function doFetch(request) {
  return fetch(request)
  .then((response) => {
    if (!response.ok) {
      throw Error(response);
    }
    return response.json();
  })
  .catch((error) => {
    throw error;
  });
}

export default class ApiClient {
  static get(route) {
    const req = makeRequest(route, 'GET');
    return doFetch(req);
  }
  static post(route, body = {}) {
    const req = makeRequest(route, 'POST', body);
    return doFetch(req);
  }
  static delete(route) {
    const req = makeRequest(route, 'DELETE');
    return doFetch(req);
  }
}
