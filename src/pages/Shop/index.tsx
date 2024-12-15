import CusBreadcrumb from '@components/breadcrumb';
import Card from '@components/card';
import Divider from '@components/divider';
import { MainContainer } from '@components/layout';
import ListComponent from '@components/list';
import CusPagination from '@components/pagination';
import { usePagination } from '@hooks/index';
import Filters from './Filters';

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
  const pagination = usePagination({
    currentPage: 1,
    pageSize: 10,
    totalCount: 20, // Replace with actual count
    siblingCount: 2, // Replace with desired number of visible siblings
  });
  return (
    <MainContainer>
      <CusBreadcrumb breadcrumbs={breadcrumbs} />
      <div className="mt-6 flex gap-5">
        <Filters />
        <div className="flex-1">
          <div className="flex items-end justify-between">
            <h1 className="text-3xl font-semibold">All</h1>
            <p className="text-gray-600">
              Showing 1-10 of 100 Products Sort by: <strong className="text-gray-900">Most Popular</strong>
            </p>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-x-5 gap-y-9 pb-2">
            <ListComponent data={Array.from({ length: 9 })} renderItems={(_item, index) => <Card key={index} />} />
          </div>
          <Divider />
          <CusPagination pagination={pagination} />
        </div>
      </div>
    </MainContainer>
  );
}
