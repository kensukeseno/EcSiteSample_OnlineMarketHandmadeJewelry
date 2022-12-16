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
  }, []);

  return (
    <div>
      <form action="http://localhost:8080/login">
        <button type="submit">login</button>
      </form>

      <div>
        <ArtistTable data={artists} />
      </div>
    </div>
  );
}

export default Home;
