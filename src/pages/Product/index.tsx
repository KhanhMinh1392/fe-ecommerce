import CusBreadcrumb from '@components/breadcrumb';
import { MainContainer } from '@components/layout';
import ProductDetail from '@components/product-detail';

const breadcrumbs = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/shop',
    label: 'Shop',
  },
  {
    href: '#',
    label: 'T-Shirt',
  },
];

export default function Product() {
  return (
    <MainContainer>
      <CusBreadcrumb breadcrumbs={breadcrumbs} />
      <ProductDetail />
    </MainContainer>
  );
}
