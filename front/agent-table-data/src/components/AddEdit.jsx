import React from "react";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  contact: "",
  email: "",
  destination: "",
  role: "",
};

function AddEdit() {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();
  const { name, contact, email, destination, role } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/post", {
        name,
        contact,
        email,
        destination,
        role,
      })
      .then(() => {
        setState({
          name: "",
          contact: "",
          email: "",
          destination: "",
          role: "",
        });
      })
      .catch((err) => {
        toast.error(err.response.data);
        setTimeout(() => {
          navigate.push("/");
        }, 500);
      });
  };
  const handleIntputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      ssup bitch
      <div className=" m-4 px-3">
        <form
          className="row g-3 needs-validation"
          novalidate
          onSubmit={handleSubmit}
        >
          <div className="col-md-4">
            <label htmlFor="validationCustom01" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              value={name}
              onChange={handleIntputChange}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label for="validationCustom02" className="form-label">
              Contact
            </label>
            <input
              type="number"
              className="form-control"
              id="validationCustom02"
              value={contact}
              required
              onChange={handleIntputChange}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label for="validationCustomUsername" className="form-label">
              Email
            </label>
            <div className="input-group has-validation">
              {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
              <input
                type="text"
                className="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                value={email}
                required
                onChange={handleIntputChange}
              />
              <div className="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div className="col-md-6">
            <label for="validationCustom03" className="form-label">
              Area
            </label>
            <select
              className="form-select"
              id="validationCustom04"
              required
              onChange={handleIntputChange}
            >
              <option selected disabled value={destination}>
                Choose...
              </option>
              <option>UAE</option>
              <option>Europe</option>
              <option>Aus</option>
              <option>...</option>
            </select>
            <div className="invalid-feedback">Please Select One</div>
          </div>
          <div className="col-md-3">
            <label for="validationCustom04" className="form-label">
              Role
            </label>
            <select className="form-select" id="validationCustom04" required>
              <option selected disabled value={role}>
                Choose...
              </option>
              <option>Agent</option>
              <option>Admin</option>
            </select>
            <div className="invalid-feedback">Please select One</div>
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit" value="Save">
              Create Profile
            </button>
          </div>
          <Link to="/">
            <button className="btn btn-primary" type="Go back">
              Retreat
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default AddEdit;
