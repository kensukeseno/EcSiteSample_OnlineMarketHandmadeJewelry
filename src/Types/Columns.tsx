export type Artist = {
  name: "load" | string;
  photo: "load" | string;
  artistId: "load" | number;
};

export type Product = {
  product: "load" | string;
  ammount: "load" | number;
  photo: "load" | string;
  productId: "load" | number;
  price: "load" | number;
  artistId: "load" | number;
};

export type ArtistProduct = {
  artist: Artist;
  productEntityList: Product[];
};

export type PurchaseInfo = {
  product: Product;
  purchaseAmmount: number;
};
