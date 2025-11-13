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
const url = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`);

  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key].toString())
  );

  const body = JSON.stringify(payload);
  const branchId = '3acce6d0-532e-4e75-aa7e-b69690124e0a';
  const header =token? { 'Authorization': `Bearer ${token}`, 'branchId': branchId } : {'BranchId': branchId}
  const headers: Record<string, string> = {
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    'branchId': branchId, // must match backend CORS whitelist
  };

  const response = await fetch(url.toString(), {
    method: requestType,
    ...header,
    headers,
    body: requestType.toUpperCase() === 'GET' ? null : body,
  });

  if (!response.ok) {
    const error = await response.json();
    return Promise.reject(error);
  }
  return response.json() as Promise<T>;
}
