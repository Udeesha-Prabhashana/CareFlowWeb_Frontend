import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured: React.FC = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>1</h1>
          <h2>Find the Doctor</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtZGszOHhmd2NldmZ5cXJ2biJ9LCJwYXRoIjoiaWhoLWhlYWx0aGNhcmUtYmVyaGFkXC9hY2NvdW50c1wvYzNcLzQwMDA2MjRcL3Byb2plY3RzXC8yMDlcL2Fzc2V0c1wvODhcLzMzNzkyXC9mYjY1MzU2Mjc5MDcyZTI3ZTg0ZjY1NDI1ZWM1Zjc4MS0xNjQ2OTI0NzQ2LmpwZyJ9:ihh-healthcare-berhad:YWAJbyrDJnIUqO9mwSTBtN9-6uMXZEoR6grGy-FVJE4?format=webp"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>2</h1>
          <h2>Manage Your Appoinment</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://media.istockphoto.com/id/598717156/photo/patient-medical-history.jpg?s=612x612&w=0&k=20&c=1dfIMSv3jmlHZXjG2oYDe_769jVuk5P4Ymf2clU-wOA="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>3</h1>
          <h2>Medical History</h2>
        </div>
      </div>
    </div>
    
  );
};

export default Featured;
