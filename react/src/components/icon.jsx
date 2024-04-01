import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = ({ email, phoneNumber, address }) => {
  return (
    <div className="contactInfo">
      {email && (
        <div className="contactIcon">
          <FaEnvelope className="icon" />
          <p>{email}</p>
        </div>
      )}
      {phoneNumber && (
        <div className="contactIcon">
          <FaPhone className="icon" />
          <p>{phoneNumber}</p>
        </div>
      )}
      {address && (
        <div className="contactIcon">
          <FaMapMarkerAlt className="icon" />
          <p>{address}</p>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
