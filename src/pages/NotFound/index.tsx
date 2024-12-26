import CusBreadcrumb from '@/components/breadcrumb';
import { MainContainer } from '@/components/layout';

const breadcrumbs = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/not-found',
    label: 'Not Found',
  },
];

export default function NotFound() {
  return (
    <MainContainer className="min-h-screen">
      <CusBreadcrumb breadcrumbs={breadcrumbs} />
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-6xl font-bold text-gray-700">404 - Page Not Found</h1>
      </div>
    </MainContainer>
  );
}
