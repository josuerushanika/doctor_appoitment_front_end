import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  BiLogoYoutube, BiLogoFacebookSquare, BiLogoInstagram, BiSolidLeftArrow, BiSolidRightArrow,
} from 'react-icons/bi';
import { fechDoctors } from '../redux/doctors/doctorSlice';
import Navbar from './Navbar';
// import flesh from '../images/flesh.jpg';
import '../css/Home.css';

const Doctors = () => {
  const navigate = useNavigate();
  const doctors = useSelector((state) => state.doctors.doctors);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fechDoctors());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <h1 className="d-flex justify-content-center"> LAST MODEL </h1>
      <p className="d-flex justify-content-center">Please Select One Doctors</p>
      <p className="d-flex justify-content-center">..............................</p>

      <div className="card-group">
        <div className="card">
          <BiSolidLeftArrow />
          <BiSolidRightArrow />
          <ul className="d-flex justify-content-center list-unstyled align-items-center">
            {doctors.map((doctor) => (
              <li key={doctor.id} className="doctors-list">
                <button
                  className="doctors-card"
                  type="button"
                  onClick={() => {
                    navigate(`${doctor.id}`);
                  }}
                >
                  <div className="circle-color">
                    <img src={doctor.image_url} alt={doctor.name} className="rounded-circle w-50 h-20 blob" width="2" />
                  </div>
                  <div className="doctors-card-details">
                    <h5>{doctor.name}</h5>
                    <p className="dots2">..............................</p>
                    <p className="doctors-details">
                      {doctor.bio}
                    </p>
                  </div>
                  <BiLogoYoutube />
                  <BiLogoFacebookSquare />
                  <BiLogoInstagram />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
