export const gid = {
  product: (id: string | number) => `gid://shopify/Product/${id}`,
  variant: (id: string | number) => `gid://shopify/ProductVariant/${id}`,
};
