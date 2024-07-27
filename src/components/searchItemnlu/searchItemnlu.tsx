import { Link } from "react-router-dom";
import "./searchItemnlu.css";

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

const SearchItemnlu: React.FC<SearchItemProps> = ({ item }) => {
  console.log("Item", item);
  
  return (
    <div className="searchItemnlu">
      <img
        src={item.photo[0]} // Use the first image from the array
        alt=""
        className="siImgnlu"
      />
      <div className="siDescnlu">
        <h1 className="siTitlenlu">{item.name}</h1>
        <span className="siSubtitlenlu">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeaturesnlu">
          {item.desc}
        </span>
      </div>
      <div className="siDetailsnlu">
        {item.rating && <div className="siRatingnlu">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTextsnlu">
          <Link to={`/doctorlistNlu/${item._id}`}>
            <button className="siCheckButtonnlu">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItemnlu;
