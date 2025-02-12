import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="outer-container">
      <div className="container">
        <RestaurantCard resData={resList[0].info} />
        <RestaurantCard resData={resList[2].info} />
        <RestaurantCard resData={resList[3].info} />
        <RestaurantCard resData={resList[4].info} />
        <RestaurantCard resData={resList[5].info} />
        <RestaurantCard resData={resList[6].info} />
        <RestaurantCard resData={resList[7].info} />
      </div>
    </div>
  );
};

export default Body;
