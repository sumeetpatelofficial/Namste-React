import React from "react";
import ReactDOM from "react-dom/client";
import tempData from "./tempData";
/**
 * header
 * -- Logo
 * -- nav Items
 * body
 * -- Search
 * -- RestuarantContainer
 *    -- RestuarantCard
 * footer
 * -- Copyright
 * -- Links
 * -- Address
 * -- Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="container d-flex">
        <div className="logo">Logo</div>
        <div className="navbar">
          <ul className="nav-items">
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
const restaurantsData = tempData;

const RestuarantCard = ({ restaurantsData }) => {
  // console.log(props.restaurantsData);
  const { cloudinaryImageId, name, avgRating, cuisines, areaName, sla } =
    restaurantsData?.info;
  return (
    <div className="res-card">
      <div className="image-container">
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt=""
        />
      </div>
      <div className="restuarant-description">
        <h4 className="name">{name}</h4>
        <div className="rating">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            role="img"
            aria-hidden="true"
            strokeColor="rgba(2, 6, 12, 0.92)"
            fill="rgba(2, 6, 12, 0.92)"
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
            ></circle>
            <path
              d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
              fill="white"
            ></path>
            <defs>
              <linearGradient
                id="StoreRating20_svg__paint0_linear_32982_71567"
                x1="10"
                y1="1"
                x2="10"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#21973B"></stop>
                <stop offset="1" stop-color="#128540"></stop>
              </linearGradient>
            </defs>
          </svg>
          <span>{avgRating}</span>
        </div>
        <p className="cousines">{cuisines.join(", ")}</p>
        <p className="area">
          {areaName} | {sla.lastMileTravelString}
        </p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="search">search</div>
        <div className="restuarant-container">
          <h4 className="title">{restaurantsData.header.title}</h4>
          <div className="restuarant-list">
            {restaurantsData.gridElements.infoWithStyle.restaurants.map(
              (restaurant) => (
                <RestuarantCard
                  key={restaurant.info.id}
                  restaurantsData={restaurant}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement);

root.render(<AppLayout />);
