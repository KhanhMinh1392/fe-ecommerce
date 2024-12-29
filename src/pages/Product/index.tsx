import CusBreadcrumb from '@/components/breadcrumb';
import { MainContainer } from '@/components/layout';
import ProductDetail from '@/components/product-detail';
import { getProductsById } from '@/services/product';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

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
  const params = useParams<{ productId: string }>();
  const { productId } = params;

  const { data: product } = useSuspenseQuery({
    queryKey: ['product', productId],
    queryFn: () => {
      return getProductsById(productId ?? '');
    },
  });

  return (
    <MainContainer>
      <CusBreadcrumb breadcrumbs={breadcrumbs} />
      <ProductDetail product={product.data} />
    </MainContainer>
  );
}
