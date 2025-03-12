/**
 * @link https://egghead.io/blog/using-branded-types-in-typescript
 */
declare const __brand: unique symbol;
type CoreBrand<B> = { [__brand]: B };

/**
 * @description used to make some unique id or some unique primitive type
 */
export type Brand<T, B> = T & CoreBrand<B>;
