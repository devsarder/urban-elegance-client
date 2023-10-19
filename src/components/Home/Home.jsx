import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const Home = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("../../../public/brands.json")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        // console.log(data);
      });
  }, []);
  return (
    <div className="my-10">
      <h1 className="text-5xl font-semibold drop-shadow-md text-center shadow-blue-500">
        AUTUMN'23 COLLECTION
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        {brands.map((brand) => (
          <BrandCard brand={brand} key={brand.id}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
