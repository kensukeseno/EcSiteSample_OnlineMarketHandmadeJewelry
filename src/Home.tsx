import { useState, useEffect } from "react";
import ArtistTable from "./Components/ArtistTable";

export type Cols = {
  name: string;
  photo: string;
  base: string;
  productList: string;
};

export function Home() {
  const [artists, setArtists] = useState<Cols[]>([
    {
      name: "load",
      photo: "load",
      base: "load",
      productList: "load",
    },
  ]);

  useEffect(() => {
    fetch("/homeArtist")
      .then((res) => res.json())
      .then((data) => setArtists(data));
    fetch("/artistPrivate").then((res) => res.json());
  }, []);

  return (
    <div>
      <div>
        <ArtistTable data={artists} />
      </div>
    </div>
  );
}

export default Home;
