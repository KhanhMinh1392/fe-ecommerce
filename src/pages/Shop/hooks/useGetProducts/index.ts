import { getProducts } from '@/services/product';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';

const DEFAULT_PAGE = 1;

export const useGetProducts = () => {
  const [searchParams] = useSearchParams();

  return useQuery({
    queryFn: () => {
      const payload = {
        populate: '*',
        pagination: {
          page: searchParams.get('page') ?? DEFAULT_PAGE,
          pageSize: 9,
        },
      };
      return getProducts(payload);
    },
    queryKey: ['products'],
  });
};
