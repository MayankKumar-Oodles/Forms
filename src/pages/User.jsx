import React from "react";
import Title from "../components/Title";
import Employee from "./Employee";
import UserTitle from "../components/UserTitle";

const User = ({ isloggedin }) => {
  return (
    <>
      <UserTitle />
      <div>
        <div className="flex justify-center items-center">
          {/* <h1>Employee page</h1> */}

          <table className="border-collapse shadow-xl w-11/12 mt-4">
            <thead className="bg-slate-400">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Phone no</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>Ajay</td>
                  <td>abc@gmail.com</td>
                  <td>male</td>
                  <td>987894232</td>
                </tr>
                <tr>
                  <td>vinay</td>
                  <td>kpc@gmail.com</td>
                  <td>male</td>
                  <td>987489232</td>
                </tr>
                <tr>
                  <td>Arun</td>
                  <td>abc@gmail.com</td>
                  <td>male</td>
                  <td>987892232</td>
                </tr>
                <tr>
                  <td>kamal</td>
                  <td>abc@gmail.com</td>
                  <td>male</td>
                  <td>9878989232</td>
                </tr>
                <tr>
                  <td>Ajay</td>
                  <td>abc@gmail.com</td>
                  <td>male</td>
                  <td>9878989232</td>
                </tr>
                <tr>
                  <td>mayank</td>
                  <td>abc@gmail.com</td>
                  <td>male</td>
                  <td>987893232</td>
                </tr>
                <tr>
                  <td>Anuj</td>
                  <td>aewc@gmail.com</td>
                  <td>male</td>
                  <td>9878989232</td>
                </tr>
                <tr>
                  <td>vimal</td>
                  <td>abc@gmail.com</td>
                  <td>male</td>
                  <td>987893232</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;
