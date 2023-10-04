import React from 'react'

function AgentForm() {
  return (
    <>
    <div>
    <form className="row g-3 needs-validation" novalidate>
  <div className="col-md-4">
    <label for="validationCustom01" className="form-label">Name</label>
    <input type="text" className="form-control" id="validationCustom01" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Contact</label>
    <input type="text" className="form-control" id="validationCustom02"  required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustomUsername" className="form-label">Email</label>
    <div className="input-group has-validation">
      {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
      <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom03" className="form-label">Area</label>
    <select className="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>UAE</option>
      <option>Europe</option>
      <option>Aus</option>
      <option>...</option>
    </select>
    <div className="invalid-feedback">
      Please Select One 
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom04" className="form-label">Role</label>
    <select className="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>Agent</option>
      <option>Admin</option>
    </select>
    <div className="invalid-feedback">
      Please select One
    </div>
  </div>
 
  
 
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
    </div>
    </>
  )
}

export default AgentForm
