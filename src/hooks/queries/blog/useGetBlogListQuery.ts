import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { PaginatedResponse } from 'types/pagination';
import { makeAPICall } from 'utils/api';
import { GET_BLOG_DETAIL, GET_BLOG_LIST } from 'utils/constants/endpoints/blog-endpoint';



function getCourseList(
    { page, limit }: { page: number; limit: number },
    options?: UseQueryOptions<PaginatedResponse<any>>
  ): UseQueryOptions<PaginatedResponse<any>> {
    return {
      ...options,
      queryKey: [GET_BLOG_LIST, page, limit],
      queryFn: async () => {
        return await makeAPICall<PaginatedResponse<any>>(
          GET_BLOG_LIST,
          {},
          {
          },
          {}
        );
      },
    };
  }


export function useGetCourseListQuery(
    { page, limit }: { page: number | 1; limit: number | 10  },
    options?: UseQueryOptions<PaginatedResponse<any>>
  ): UseQueryResult<PaginatedResponse<any>> {
    return useQuery(getCourseList({ page, limit }, options));
  }