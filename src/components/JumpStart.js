import { useState } from "react";
import ListOptions from "../data/Status";
import trashIcon from "../images/icons8-trash-64.png"
import Modal from "./NotesModal";

const jumpStart = []
const localStorageDataName = "jumpStart"
let localStorageDataPull = JSON.parse(localStorage.getItem("jumpStart"))
if (localStorageDataPull == null) {
  localStorage.setItem(localStorageDataName, JSON.stringify(jumpStart))
  localStorageDataPull = JSON.parse(localStorage.getItem("jumpStart"))
}

const initialValues = {
  id: "",
  companyName: "",
  notes: ""
};

function AddUser() {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newId = localStorageDataPull.length + 1
    setValues({
      ...values,
      id: newId,
      [name]: value,
    });
  };

  function submitNewCompany() {
    let oldObject = localStorageDataPull
    oldObject.push(values)
    localStorage.setItem("jumpStart", JSON.stringify(oldObject))
    BookedDemoData()
  }

  return (
    <form className="addUserForm">
      <input
        value={values.companyName}
        onChange={handleInputChange}
        name="companyName"
        label="Company"
        className="formInput"
        placeholder="Company Name"
      />
      <input
        value={values.notes}
        onChange={handleInputChange}
        name="notes"
        label="Job Title"
        className="formInput"
        placeholder="Notes"
      />
      <button type="submit" onClick={submitNewCompany} className="submitBtn"> Enter </button>
    </form>
  );
}

const RemoveUser = (id, companyName) => {
  if (window.confirm(`Are you sure you want to remove ${companyName}?`) === true) {
    const newjumpStart = localStorageDataPull.filter(
      (prospect) => prospect.id !== id)
    window.localStorage.setItem("jumpStart", JSON.stringify(newjumpStart))
    window.location.reload(true)
  }
}

function BookedDemoData() {
  let demoDataFromLocalStorage = localStorage.getItem("jumpStart")
  if (JSON.parse(demoDataFromLocalStorage).length === 0) {
    return (
      <div className="no-leads">
        <h1>There are no leads with this status</h1>
      </div>
    )
  } else {
    const prospects = JSON.parse(demoDataFromLocalStorage).map(prospect =>
      <div className="prospect">
        <li key={prospect.id} className="prospect-name">{prospect.companyName}</li>
        <Modal prospect={prospect} prospectDataList={JSON.parse(demoDataFromLocalStorage)} localStorageDataName={localStorageDataName} />
        <ListOptions prospect={prospect} prospectDataList={JSON.parse(demoDataFromLocalStorage)} localStorageDataName={localStorageDataName} />
        <button className="delete-button" onClick={() => RemoveUser(prospect.id, prospect.companyName)}>
          <img src={trashIcon} alt="" className="trash-icon" />
        </button>
      </div>
    )
    return (
      <ul className="prospect-list">{prospects}</ul>
    )
  }
}

const JumpStart = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="main-content">
      <div className="main-content-header">
        <h1>Scheduled Jump Starts</h1>
        <button className="add-user-button" onClick={() => { setShow(!show) }}>Add User</button>
      </div>
      <div className="main-content-body">
        <div className={show ? "show add-user-form" : "add-user-form"}>
          <AddUser />
        </div>
        <BookedDemoData />
      </div>
    </div>
  )
};

export default JumpStart;