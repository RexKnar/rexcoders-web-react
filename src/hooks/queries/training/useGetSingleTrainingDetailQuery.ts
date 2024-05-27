import { UseQueryOptions, UseQueryResult, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { PaginatedResponse } from 'types/pagination';
import { makeAPICall } from 'utils/api';
import { GET_COURSE_DETAIL } from 'utils/constants/endpoints/course-endpoint';



function getCourseDetail(
    slug:string ,
    options?: UseQueryOptions<any>
  ): UseQueryOptions<any> {

   return {
      ...options,
      queryKey: [GET_COURSE_DETAIL, slug],
      queryFn: async () => {
        return await makeAPICall<any>(
          GET_COURSE_DETAIL,
          {},
          {
          },
          {slug:slug}
        );
      },
    };

  }


export function useGetCourseDetailQuery(
      slug:string | '' ,
    options?: UseQueryOptions<any>
  ): UseQueryResult<any> {
    return useQuery(getCourseDetail( slug , options));
  }