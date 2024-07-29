import { Link } from "react-router-dom";
import "./searchItemLUN2.css";

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

const searchItemLUN2: React.FC<SearchItemProps> = ({ item }) => {
  return (
    <div
      className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-4 mb-4"
      style={{ width: "800px", height: "250px" }}
    >
      <img
        src={item.photo[0]}
        alt=""
        className="object-cover rounded-lg"
        style={{ width: "174px" }}
      />
      <div className="flex flex-col justify-between ml-4 md:ml-6 w-full">
        <div>
          <h1 className="text-xl font-bold">{item.name}</h1>
          <span className="text-gray-500">
            Studio Apartment with Air conditioning
          </span>
          <span className="block mt-2 text-gray-600">{item.desc}</span>
        </div>
        <div className="flex flex-row justify-between items-center mt-4 md:mt-0">
          {item.rating && (
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-2">Excellent</span>
              <button className="bg-purple-600 text-white px-2 py-1 rounded-lg">
                {item.rating}
              </button>
            </div>
          )}
          <div className="text-right">
            <Link
              to={`/doclist2/${item._id}`}
            >
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                style={{ borderRadius: "9px" }}
              >
                See Availability
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default searchItemLUN2;
