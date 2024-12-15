import ListComponent from '@components/list';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@components/ui/pagination';

interface CusPaginationProps {
  pagination: (string | number)[];
}

export default function CusPagination(props: CusPaginationProps) {
  const { pagination } = props;
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
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
  );
}
