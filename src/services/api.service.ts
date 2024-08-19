const API_KEY = ''; // https://www.themoviedb.org Get a Free API KEY

type ApiParams = Record<string, string>;

function createParams(paramsOptions: ApiParams) {
  const params: ApiParams = {};

  Object.keys(paramsOptions).forEach((key) => {
    params[key] = paramsOptions[key];
  });

  return params;
}

function getUrl(endpoint: string, params?: ApiParams) {
  const url = new URL(`${apiService.config.api}${endpoint}`);
  const paramsOptions: ApiParams = params ? createParams(params) : {};
  paramsOptions.api_key = API_KEY;
  url.search = new URLSearchParams(paramsOptions).toString();
  return url;
}

const apiService = {
  config: {
    api: 'https://api.themoviedb.org/3',
    apiImages: 'https://image.tmdb.org/t/p/w500',
  },
  httpGet: async (endpoint: string, params?: ApiParams) => {
    const url = getUrl(endpoint, params);
    return fetch(url, {
      headers: { 'content-type': 'application/json' },
    })
      .then((response) => handleResponse(response))
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        return Promise.reject(error);
      });
  },
  httpPost: async <T>(endpoint: string, data: T, params?: ApiParams) => {
    const url = getUrl(endpoint, params);
    return fetch(url, {
      method: 'post',
      body: data ? JSON.stringify(data) : null,
      headers: { 'content-type': 'application/json' },
    })
      .then((response) => handleResponse(response))
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        return Promise.reject(error);
      });
  },
  httpPut: async <T>(endpoint: string, data: T) =>
    fetch(`${apiService.config.api}${endpoint}`, {
      method: 'put',
      body: data ? JSON.stringify(data) : null,
      headers: { 'content-type': 'application/json' },
    })
      .then((response) => handleResponse(response))
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        return Promise.reject(error);
      }),
  httpDelete: async (endpoint: string) =>
    fetch(`${apiService.config.api}${endpoint}`, {
      method: 'delete',
      headers: { 'content-type': 'application/json' },
    })
      .then((response) => handleResponse(response))
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        return Promise.reject(error);
      }),
};

const handleResponse = (response: Response) => {
  // You can handle 400 errors as well.
  if (response.status === 200 || response.status === 201) {
    return response.json();
  } else {
    if (response.status === 401) {
      alert(
        'Go to https://www.themoviedb.org Get a Free API KEY for Dev purpose',
      );
    }
    throw Error('error');
  }
};

export default apiService;
