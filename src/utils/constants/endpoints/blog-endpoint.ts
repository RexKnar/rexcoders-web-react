import { EndpointDetails } from './types';

export const GET_BLOG_LIST = `GET_COURSE_LIST`;
export const GET_BLOG_DETAIL=  `GET_COURSE_DETAIL`;


export default <EndpointDetails>{
  [GET_BLOG_LIST]: {
    requestType: `GET`,
    endpoint: `/api/v1/training`,
  },
  [GET_BLOG_DETAIL]: {
    requestType: `GET`,
    endpoint: `/api/v1/training/[slug]`,
  },
  
};
