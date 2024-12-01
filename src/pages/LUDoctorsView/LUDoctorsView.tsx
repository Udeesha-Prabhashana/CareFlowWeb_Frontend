import "./LUDoctorsView.scss";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import SidebarPatient from "../../components/sidebarPatient/sidebarPatient";

export interface Item {
  id: string;
  name: string;
  photoUrl: string;
  description: string;
  docCharge: string;
  rating?: number;
  specialization?: string;
}

const LUDoctorsView: React.FC = () => {
  const location = useLocation();
  const state = location.state as { item?: Item };
  const item = state?.item;

  return (
    <div className="LUDVDoctorsView">
      <SidebarPatient />
      <div className="LUDVhomeContainer2lu">
        <div className="LUDVbodyContainerLu">
          <div className="flex items-center mb-8 text-purple-600 pl-14">
            <Link to="/doclist2" className="flex items-center">
              <FontAwesomeIcon icon={faCircleArrowLeft} />
              <span className="ml-2 font-roboto text-lg cursor-pointer">Go back</span>
            </Link>
          </div>

          {item ? (
            <div className="flex flex-row ml-14">
              <div className="flex flex-col items-center mr-6 w-1/3">
                <img
                  src={item.photoUrl}
                  alt={item.name}
                  className="w-full h-80 object-cover rounded-lg mb-4"
                />
              </div>
              <div className="flex flex-col w-2/3 ml-14">
                <h1 className="text-black text-3xl font-semibold leading-none mb-2">
                  {item.name}
                </h1>
                <p className="text-gray-600 text-base mb-4">{item.description}</p>
                <div className="flex flex-row mb-2">
                  <span className="text-gray-600 font-bold w-32 flex-shrink-0">Speciality:</span>
                  <span className="text-gray-600 flex-grow">{item.specialization}</span>
                </div>
                <div className="flex flex-row mb-2">
                  <span className="text-gray-600 font-bold w-32 flex-shrink-0">Charge:</span>
                  <span className="text-gray-600 flex-grow">{item.docCharge + 1000}</span>
                </div>
              </div>
            </div>
          ) : (
            <p>No doctor information available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LUDoctorsView;
