import React, { useState, useEffect } from "react";
import EmployeeServices from "../services/EmployeeServices";
import UpdateUser from "../components/UpdateUser";


const Employee = () => {
  const [Employee, setNewEmployee] = useState([]);
  useEffect(() => {
    getEmployeeData();
  }, []);

  const getEmployeeData = async () => {
    const data = await EmployeeServices.getData();
    //   console.log(data);
    setNewEmployee(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

//   const updateData=(e)=>{
//           console.log("Data to be updated" ,e);
//           <AddUserModal/>
          
//   }
  return (
    <div>
      <div>
        {/* <h1>Employee page</h1> */}

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Phone no</th>
            </tr>
          </thead>
          <tbody>
            {Employee.map((e) => {
              return (
                <tr key={e.id}>
                  <td> {e.name}</td>
                  <td> {e.email}</td>
                  <td> {e.gender}</td>
                  <td> {e.phone}</td>
                   <td><UpdateUser data={e} /></td> 
                   <td>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
                      Delete
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
};

export default Employee;
