import { Method } from "types/api-method-types";



export type EndpointDetails = Record<
  string,
  { requestType: Method; endpoint: string }
>;
