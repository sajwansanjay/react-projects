import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, use } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import RestaurentMenu from "./Restaurentmenu";
import { Link } from "react-router";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredList, setFilteredList] = useState();
  const [searchText, setSearchText] = useState("");
  console.log("useEffect()");

  useEffect(() => {
    fetchData();
    console.log("useEffect(1)");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0454314&lng=77.5478699&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ); //https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0454314&lng=77.5478699&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
    const json = await data.json();
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //console.log(filteredList);
  };

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="outer-container">
      {" "}
      {console.log("useEffect(2)")}
      <div className="container mb-15">
        <div className="search-box">
          <input
            type="text"
            name="seach-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            id="searchBtn"
            className="btn"
            onClick={() => {
              const filterRestaurent = listOfRestaurant.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              console.log(setFilteredList(filterRestaurent));
            }}>
            search
          </button>
        </div>
        <div className="filter-container">
          <button
            className="btn"
            onClick={() => {
              const ratingFilteredList = listOfRestaurant.filter(
                (restaurantRating) => restaurantRating.info.avgRating > 4.3
              );
              setFilteredList(ratingFilteredList);
              console.log("Rating");
            }}>
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="container">
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            className="product-card"
            to={"restaurants/" + restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
