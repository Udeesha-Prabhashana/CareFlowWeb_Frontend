import { Link } from "react-router-dom";
import "./searchItem.css";

// Define the types for the item prop
interface Item {
  _id: string;
  name: string;
  photo: string[];
  desc: string;
  rating?: number;
  // Add other optional properties as needed
}

interface SearchItemProps {
  item: Item;
}

const SearchItem: React.FC<SearchItemProps> = ({ item }) => {
  console.log("Item", item);
  
  return (
    <div className="searchItem">
      <img
        src={item.photo[0]} // Use the first image from the array
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          {item.desc}
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <Link to={`/doclist/${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
