import CusBreadcrumb from '@/components/breadcrumb';
import Card from '@/components/card';
import Divider from '@/components/divider';
import { MainContainer } from '@/components/layout';
import ListComponent from '@/components/list';
import { CircularProgress } from '@/components/loading';
import CusPagination from '@/components/pagination';
import { usePagination } from '@/hooks/usePagination';
import Filters from './Filters';
import { useGetProducts } from './hooks';

const breadcrumbs = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/shop',
    label: 'Shop',
  },
];

export default function Shop() {
  const { data: products, isLoading } = useGetProducts();
  const pagination = usePagination({
    currentPage: products?.meta.pagination.page ?? 1,
    pageSize: products?.meta.pagination.pageSize ?? 10,
    totalCount: products?.meta.pagination.total || 0, // Replace with actual count
    siblingCount: 2, // Replace with desired number of visible siblings
  });

  return (
    <MainContainer>
      <CusBreadcrumb breadcrumbs={breadcrumbs} />
      <div className="mt-6 flex gap-5">
        <Filters />
        <div className="flex-1">
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              <div className="flex items-end justify-between">
                <h1 className="text-3xl font-semibold">All</h1>
                <p className="text-gray-600">
                  Showing 1-10 of 100 Products Sort by: <strong className="text-gray-900">Most Popular</strong>
                </p>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-x-5 gap-y-9 pb-2">
                <ListComponent
                  data={products?.data || []}
                  renderItems={(product) => <Card key={product.id} product={product} />}
                />
              </div>
              <Divider />
              <CusPagination page={products?.meta.pagination.page ?? 1} pagination={pagination} />
            </>
          )}
        </div>
      </div>
    </MainContainer>
  );
}
