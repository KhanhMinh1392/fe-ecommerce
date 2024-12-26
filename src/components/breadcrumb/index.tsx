import ListComponent from '@/components/list';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Fragment } from 'react';

type BreadcrumbItem = {
  href: string;
  label: string;
};

interface CusBreadcrumbProps {
  breadcrumbs: BreadcrumbItem[];
}

export default function CusBreadcrumb(props: CusBreadcrumbProps) {
  const { breadcrumbs } = props;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <ListComponent
          data={breadcrumbs}
          renderItems={(breadcrumb, index) => {
            const Component =
              breadcrumbs.lastIndexOf(breadcrumbs[breadcrumbs.length - 1]) === index ? BreadcrumbPage : BreadcrumbLink;
            return (
              <Fragment key={breadcrumb.href}>
                <BreadcrumbItem>
                  <Component href={breadcrumb.href}>{breadcrumb.label}</Component>
                </BreadcrumbItem>
                {breadcrumbs.length > 1 && breadcrumbs.indexOf(breadcrumb) < breadcrumbs.length - 1 && (
                  <BreadcrumbSeparator />
                )}
              </Fragment>
            );
          }}
        />
      </BreadcrumbList>
    </Breadcrumb>
  );
}
