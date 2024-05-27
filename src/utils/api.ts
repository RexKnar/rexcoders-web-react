import Cookies from 'js-cookie';
import endpointInfo from './constants/endpoints';


export async function makeAPICall<T>(
  apiName: string,
  payload: Record<string, unknown> = {},
  params: Record<string, string | number | boolean> = {},
  substitutions: Record<string, string> = {}
): Promise<T> {
  let { endpoint, requestType } = endpointInfo[apiName];
  const {token}= Cookies.get();

  Object.keys(substitutions).forEach((key) => {
    const substitution = substitutions[key];
    endpoint = endpoint.replace(`[${key}]`, substitution);
  });

//   const url = new URL(`${window.location.origin}${endpoint}`);
const url = new URL(`http://localhost:7700${endpoint}`);
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key].toString())
  );

  const body = JSON.stringify(payload);
  const header =token? { 'Authorization': `Bearer ${token}` }: {}

  const response = await fetch(url.toString(), {
    method: requestType,
    ...header,
    body: requestType.toUpperCase() === 'GET' ? null : body,
  });

  if (!response.ok) {
    const error = await response.json();
    return Promise.reject(error);
  }
  return response.json() as Promise<T>;
}
