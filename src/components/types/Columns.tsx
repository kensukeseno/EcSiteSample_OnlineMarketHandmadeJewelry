export type TypeArtist = {
  name: "load" | string;
  photo: "load" | string;
  artistId: "load" | number;
};

export type TpyeProduct = {
  product: "load" | string;
  ammount: "load" | number;
  photo: "load" | string;
  productId: "load" | number;
  price: "load" | number;
  artistId: "load" | number;
};

export type TypeArtistProduct = {
  artist: TypeArtist;
  productEntityList: TpyeProduct[];
};

export type TypeProductInCart = {
  product: TpyeProduct;
  purchaseAmmount: number;
};
