// Home.js
import { useState } from "react";
import Banner from "../../components/Header/Banner/Banner";
import CardItems from "../CardItems/CardItems";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const cardItems = useLoaderData();

  return (
    <div>
      <Banner handleSearch={handleSearch} />
      <CardItems cardItems={cardItems} inputValue={searchValue} />
    </div>
  );
};

export default Home;
