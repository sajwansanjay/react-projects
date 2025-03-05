import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_ITEMS_API, ITEM_IMAGE } from "../utils/constants";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_ITEMS_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    avgRating,
    costForTwoMessage,
    cuisines,
    id,
    sla: { slaString },
    totalRatingsString,
  } = resInfo?.cards[2]?.card?.card?.info;

  function findItemCards(resInfo) {
    const regularCards =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    for (const cardWrapper of regularCards) {
      const cardData = cardWrapper?.card?.card;
      if (cardData?.itemCards) {
        return cardData;
      }
    }

    return {}; // Return an empty object if no itemCards are found
  }

  const cardData = findItemCards(resInfo);

  const { title, itemCards = [] } = cardData;

  console.log("Test: " + itemCards);

  return (
    <div>
      <div className="container">
        <div className="res-menu-main">
          <h1>{name}</h1>
          <div className="res-info-box">
            <p>
              Rating {avgRating} ({totalRatingsString}) • {costForTwoMessage}
            </p>
            <p>{slaString}</p>
          </div>
          <h2>
            {title} ({itemCards.length})
          </h2>
          <div>
            {itemCards.map((item) => (
              <div key={item.card.info.id} className="item-box">
                <div>
                  <p className="item-name">{item.card.info.name}</p>
                  <p className="item-price">
                    Rs:{" "}
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}
                  </p>
                  <p className="item-desc">{item.card.info.description}</p>
                </div>
                <div>
                  <img
                    src={ITEM_IMAGE + item.card.info.imageId}
                    alt={item.card.info.category}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurentMenu;
