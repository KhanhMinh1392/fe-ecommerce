import { ApiResponse } from '@/types/common';
import axiosInstance from '..';

interface GetProductsParameters {
  populate: string;
}

export interface Product {
  id: number;
  documentId: string;
  product_name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  price: number;
  images: Image[];
}
interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText?: null;
  caption?: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: null;
  provider: string;
  provider_metadata?: null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
interface Formats {
  thumbnail: Thumbnail;
  small: Thumbnail;
  medium: Thumbnail;
  large: Thumbnail;
}
interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export const getProducts = async (params: GetProductsParameters): ApiResponse<Product[]> => {
  return await axiosInstance.get('/products', { params });
};

export const getProductsById = async (productId: string): ApiResponse<Product> => {
  return await axiosInstance.get(`/products/${productId}?populate=*`);
};
