import { UseQueryOptions, UseQueryResult, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { PaginatedResponse } from 'types/pagination';
import { makeAPICall } from 'utils/api';
import { GET_COURSE_LIST } from 'utils/constants/endpoints/course-endpoint';



function getCourseList(
    { page, limit }: { page: number; limit: number },
    options?: UseQueryOptions<PaginatedResponse<any>>
  ): UseQueryOptions<PaginatedResponse<any>> {
    
    return {
      ...options,
      queryKey: [GET_COURSE_LIST, page, limit],
      queryFn: async () => {
        console.log('demo1',limit);
        let response= await makeAPICall<PaginatedResponse<any>>(
          GET_COURSE_LIST,
          {},
          {
          },
          {}
        );
        console.log('response',response);
        return response;
      },
    };
  }


export function useGetCourseListQuery(
    { page, limit }: { page: number | 1; limit: number | 10  },
    options?: UseQueryOptions<PaginatedResponse<any>>
  ): UseQueryResult<PaginatedResponse<any>> {
    
    return useQuery(getCourseList({ page, limit }, options));
  }