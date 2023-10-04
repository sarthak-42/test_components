import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Toast } from "react-toastify";
const initialState = {
    name :'',
    contact:'',
    email:''
}
function AddAgent() {
    const[state,setState] = useState(initialState)

    const{name,contact,email}= state;

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Name",name);
    }

    const handleInputChange = (e)=>{
        const{name,value} = e.target
        setState({...state, [name]:value})
    }
  return (
    <div>
      AddAgent
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label for="validationServer01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationServer01"
            value={name}
            onChange={handleInputChange}
            required
        
          />
        </div>
        <div className="col-md-4">
          <label for="validationServer02" className="form-label">
           Contact
          </label>
          <input
            type="text"
            className="form-control "
            id="validationServer02"
          
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-md-4">
          <label for="validationServerUsername" className="form-label">
         Email
          </label>
          <div className="input-group has-validation">
            <input
              type="text"
              className="form-control "
              id="validationServerUsername"
              value={email}
              aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        {/* <div className="col-md-6">
    <label for="validationServer03" className="form-label">City</label>
    <input type="text" className="form-control " id="validationServer03" aria-describedby="validationServer03Feedback" required/>
    
  </div>
  <div className="col-md-3">
    <label for="validationServer04" className="form-label">State</label>
    <select className="form-select " id="validationServer04" aria-describedby="validationServer04Feedback" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
   
  </div>
  <div className="col-md-3">
    <label for="validationServer05" className="form-label">Zip</label>
    <input type="text" className="form-control " id="validationServer05" aria-describedby="validationServer05Feedback" required/>
   
  </div>
  */}
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
        <Link to="/">
          <button className="btn btn-primary" type="button">
            Go back
          </button>

        </Link>
      </form>
    </div>
  );
}

export default AddAgent;
