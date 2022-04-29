/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type { GetProductsProduct200, GetProducts200, GetProductsParams } from ".././model";
/**
 * Retrieves a Product.
 * @summary Retrieves a Product
 */
export declare const getProductsProduct: (id: string) => Promise<GetProductsProduct200>;
/**
 * Retrieves a list of Products.
 * @summary List Products
 */
export declare const getProducts: (params?: GetProductsParams | undefined) => Promise<GetProducts200>;
declare type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (...args: any) => Promise<infer R> ? R : any;
export declare type GetProductsProductResult = NonNullable<AsyncReturnType<typeof getProductsProduct>>;
export declare type GetProductsResult = NonNullable<AsyncReturnType<typeof getProducts>>;
export {};