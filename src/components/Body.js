import RestuarantCard from "./RestuarantCard";
import tempData from "../utils/tempData";
import { useState } from "react";
const restaurantsData = tempData;

let mockListOfRestaurants = [
  {
    id: "291999",
    name: "Hotel Sudha",
    cloudinaryImageId: "nig9hnmz4pmcbviyehk2",
    locality: "Adalja Complex",
    areaName: "Subhanpura",
    cuisines: ["South Indian"],
    avgRating: 4.4,
  },
  {
    id: "107110",
    name: "Shree Kheteshwar Sweets (Subhanpura)",
    cloudinaryImageId: "edsilkslzfn79yq5tjtv",
    locality: "New Ipcl Road",
    areaName: "Subhanpura",
    cuisines: ["Sweets", "Snacks", "Desserts", "Street Food"],
    avgRating: 4,
  },
  {
    id: "68034",
    name: "McDonald's",
    cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
    locality: "Old Padra Road",
    areaName: "Diwalipura",
    cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
    avgRating: 4.2,
  },
];

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(
    mockListOfRestaurants
  );

  console.log(useState(mockListOfRestaurants));
  return (
    <div className="body">
      <div className="container">
        <div className="search">search</div>
        <div className="restuarant-container">
          <div className="filters">
            <button
              className="filter-btn"
              onClick={() => {
                filteredList = listOfRestaurants.filter((x) => x.avgRating > 4);
                setListOfRestaurants(filteredList);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
          <h4 className="title">{restaurantsData.header.title}</h4>
          <div className="restuarant-list">
            {listOfRestaurants.map((restaurant) => (
              <RestuarantCard
                key={restaurant?.id}
                restaurantsData={restaurant}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
