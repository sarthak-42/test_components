import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import { Toast } from "react-toastify/dist/components";
import { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Link to={"/addAgent"}>
          <div class="d-grid gap-2 col-2 mx-auto m-5">
            <button class="btn btn-primary" type="button">
              Add New
            </button>
          </div>
        </Link>

        <table className="table table-hove m-5 px-2">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Contact</th>
              <th scope="col">Email</th>
              <th scope="col">Area</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.contact}</td>
                  <td>{item.email}</td>
                  <td>{item.destination}</td>
                  <td>{item.role}</td>

                  <td>
                    <Link to={`/update/${item.id}`}>
                      <button
                        type="button"
                        className="btn  btn-outline-secondary "
                      >
                        Edit
                      </button>
                    </Link>

                    <button type="button" className="btn btn-danger mx-2 px-2">
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
