import "../styles/index.css";
import InputField from "../components/input";

function Personal({ personalInfo, updatePersonalInfo }) {
  const handleChange = (name, value) => {
    updatePersonalInfo({ ...personalInfo, [name]: value });
  };

  return (
    <div className="personalInfo">
      <h1>Personal Information</h1>
      <InputField
        label="Full Name"
        type="text"
        name="name"
        value={personalInfo.name}
        onChange={handleChange}
      />
      <InputField
        label="Email"
        type="text"
        name="email"
        value={personalInfo.email}
        onChange={handleChange}
      />
      <InputField
        label="Phone Number"
        type="tel"
        name="phoneNumber"
        value={personalInfo.phoneNumber}
        onChange={handleChange}
      />
      <InputField
        label="Address"
        type="text"
        name="address"
        value={personalInfo.address}
        onChange={handleChange}
      />
    </div>
  );
}

export default Personal;
