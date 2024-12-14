import CusBreadcrumb from '@components/breadcrumb';
import Card from '@components/card';
import Divider from '@components/divider';
import { MainContainer } from '@components/layout';
import ListComponent from '@components/list';
import { usePagination } from '@hooks/index';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@components/ui/pagination';

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
        <div className="h-[1220px] w-72 rounded-2xl border px-6 py-5">
          <h1 className="text-xl font-semibold">Filters</h1>
          <Divider />
        </div>
        <div className="flex-1">
          <div className="flex items-end justify-between">
            <h1 className="text-3xl font-semibold">Casual</h1>
            <p className="text-gray-600">
              Showing 1-10 of 100 Products Sort by: <strong className="text-gray-900">Most Popular</strong>
            </p>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-x-5 gap-y-9 pb-2">
            <ListComponent data={Array.from({ length: 9 })} renderItems={(_item, index) => <Card key={index} />} />
          </div>
          <Divider />
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <ListComponent
                data={pagination}
                renderItems={(item) => {
                  if (item === '...') {
                    return (
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                  } else {
                    return (
                      <PaginationItem>
                        <PaginationLink href="#">{item}</PaginationLink>
                      </PaginationItem>
                    );
                  }
                }}
              />
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </MainContainer>
  );
}
