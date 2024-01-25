import React, { useState, useEffect } from "react";
import EmployeeServices from "../services/EmployeeServices";
import UpdateUser from "../components/UpdateUser";
import DeleteUser from "../components/DeleteUser";
import Title from "../components/Title";

const Employee = () => {
  const [Employee, setNewEmployee] = useState([]);
  useEffect(() => {
    getEmployeeData();
  }, []);

  const refDel = () => {
    getEmployeeData();
  };

  const getEmployeeData = async () => {
    const data = await EmployeeServices.getData();
    //   console.log(data);
    setNewEmployee(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  
  return (
    <div>
      <Title refDel={refDel}/>
      <div className="flex justify-center items-center">
        {/* <h1>Employee page</h1> */}

        <table className="border-collapse w-10/12">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Phone no</th>
              <th>Action</th>
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
                  <td className=" flex  justify-around items-center">
                    <UpdateUser
                      data={e}
                       
                      refDel={refDel}
                    />
                    <DeleteUser
                      id={e.id}
                      refDel={refDel}
                      
                    />
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
