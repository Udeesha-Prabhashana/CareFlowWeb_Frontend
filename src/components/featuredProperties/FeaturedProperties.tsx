import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import React from "react";

interface Hotel {
  _id: string;
  photos: string;
  name: string;
  city: string;
  cheapestPrice: number;
  rating?: number;
}

const FeaturedProperties: React.FC = () => {
  const { data, loading, error } = useFetch<Hotel[]>("/hotels?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data && data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
