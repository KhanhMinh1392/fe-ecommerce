import ListComponent from '@/components/list';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface CusPaginationProps {
  page: number;
  pagination: (string | number)[];
}

export default function CusPagination(props: CusPaginationProps) {
  const { page, pagination } = props;
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" size={undefined} />
        </PaginationItem>
        <ListComponent
          data={pagination}
          renderItems={(item, index) => {
            if (typeof item === 'string' && item === '...') {
              return (
                <PaginationItem key={index}>
                  <PaginationEllipsis />
                </PaginationItem>
              );
            } else {
              return (
                <PaginationItem key={index}>
                  <PaginationLink href={`?page=${item}`} size={undefined} isActive={item === page}>
                    {item}
                  </PaginationLink>
                </PaginationItem>
              );
            }
          }}
        />
        <PaginationItem>
          <PaginationNext href="#" size={undefined} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
