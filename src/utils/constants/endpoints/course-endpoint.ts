import { EndpointDetails } from './types';

export const GET_COURSE_LIST = `GET_COURSE_LIST`;
export const GET_COURSE_DETAIL=  `GET_COURSE_DETAIL`;


export default <EndpointDetails>{
  [GET_COURSE_LIST]: {
    requestType: `GET`,
    endpoint: `/api/institute/course`,
  },
  [GET_COURSE_DETAIL]: {
    requestType: `GET`,
    endpoint: `/api/v1/training/[slug]`,
  },
  
};
