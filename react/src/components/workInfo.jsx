import { useState } from "react";
import InputField from "./input";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

function Career({ updateCareer }) {
  const [careerData, setCareerData] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });
  const [careerEntries, setCareerEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (name, value) => {
    setCareerData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCareerEntries = [...careerEntries, careerData];
    setCareerEntries(newCareerEntries);
    setCareerData({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
    updateCareer(newCareerEntries);
  };

  const handleEdit = (entry) => {
    setCareerData(entry);
    setSelectedEntry(entry);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedEntries = careerEntries.map((entry) =>
      entry === selectedEntry ? careerData : entry
    );

    setCareerEntries(updatedEntries);
    setCareerData({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
    setSelectedEntry(null);
    updateCareer(updatedEntries);
  };

  const handleDelete = (entry) => {
    const updatedEntries = careerEntries.filter((item) => item !== entry);
    setCareerEntries(updatedEntries);
    setSelectedEntry(null);
    updateCareer(updatedEntries);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="workContainer">
      <form onSubmit={selectedEntry ? handleSubmit : handleUpdate}>
        <div className="workInfo">
          <h1>Work Experience</h1>
          <InputField
            label="Company"
            type="text"
            name="company"
            value={careerData.company}
            onChange={handleChange}
          />
          <InputField
            label="Position"
            type="text"
            name="position"
            value={careerData.position}
            onChange={handleChange}
          />
          <div className="careerDate">
            <InputField
              label="Start Date"
              type="text"
              name="startDate"
              value={careerData.startDate}
              onChange={handleChange}
            />
            <InputField
              label="End Date"
              type="text"
              name="endDate"
              value={careerData.endDate}
              onChange={handleChange}
            />
          </div>
          <InputField
            label="Location"
            type="text"
            name="location"
            value={careerData.location}
            onChange={handleChange}
          />
          <InputField
            id="descriptionInput"
            label="Description"
            type="text"
            name="description"
            value={careerData.description}
            onChange={handleChange}
          />
          <button type="submit">{selectedEntry ? "Submit" : "Update"}</button>
        </div>
      </form>
      <div className="dropdownMenu">
        <div className="dropdownHeader" onClick={toggleDropdown}>
          <h3>Companies</h3>
          <span className="chevronIcon">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>
        <CSSTransition
          in={isOpen}
          timeout={300}
          classNames="dropdown"
          unmountOnExit
        >
          <div className="dropdownContent">
            {careerEntries.map((entry, index) => (
              <div key={index} className="workEntry">
                <div className="workContent">
                  <h4>{entry.company}</h4>
                  <p>{entry.position}</p>
                </div>
                <div className="buttonContainer">
                  <button onClick={() => handleEdit(entry)}>Edit</button>
                  <button onClick={() => handleDelete(entry)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default Career;
