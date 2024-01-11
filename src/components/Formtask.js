import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Formtask = () => {
  const form = useForm({
    defaultValues: {
      skills: [{ number: "" }],
    },
    mode: "onChange",
  });
  const { register, control, handleSubmit, reset, formState } = form;
  const { errors, isValid, isDirty, isSubmitSuccessful } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "skills",
    control,
  });

  const [newdata, setNewData] = useState();

  const onSubmit = (data) => {
    setNewData(data);
    reset();
  };

  return (
    <div className="container">
      <div className="row d-flex flex-direction-column ">
        <div className="box col-lg-5 col-xl-5 col-md-6 col-sm-12">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-container"
            noValidate
          >
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: true,
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters long",
                },

                maxLength: {
                  value: 30,
                  message: "Name cannot exceed 30 characters",
                },

                validate: (name) => {
                  var regex =
                    /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
                  if (regex.test(name)) {
                    return true;
                  } else {
                    return "Invalid name";
                  }
                },
              })}
            />
            <p>{errors.name?.message}</p>
            <label htmlFor="email"> </label>
            Email:
            <input
              type="text"
              id="email"
              {...register("email", {
                required: true,
                validate: (email) => {
                  var regex =
                    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                  if (regex.test(email)) {
                    return true;
                  } else {
                    return "Invalid Email";
                  }
                },
              })}
            />
            <p>{errors.email?.message}</p>
            <label htmlFor="position">Position:</label>
            <input
              type="text"
              id="position"
              {...register("position", {
                required: true,
                validate: (position) => {
                  var regex = /^[a-zA-Z\-]+$/;
                  if (regex.test(position)) {
                    return true;
                  } else {
                    return "Invalid Position";
                  }
                },
              })}
            />
            <p>{errors.position?.message}</p>
            <label htmlFor="salary">Salary:</label>
            <input
              type="text"
              id="salary"
              {...register("salary", {
                required: true,
                validate: (sal) => {
                  var regex = /^(?!0+(?:\.0+)?$)[0-9]+(?:\.[0-9]+)?$/;
                  if (regex.test(sal)) {
                    return true;
                  } else {
                    return "Invalid Entry";
                  }
                },
              })}
            />
            <p>{errors.salary?.message}</p>
            <label htmlFor="gender">Gender:</label>
            <select
              {...register("Gender", { required: "must have to be select" })}
              id="gender"
            >
              <option value="--select--"></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <p>{errors.gender?.message}</p>
            <label htmlFor="skills" className="skill-label">
              Skills:
            </label>
            {fields.map((field, index) => {
              return (
                <div className="add-skill-container" key={field.id}>
                  <input
                    type="text"
                    className="input-skill-container"
                    id="skills"
                    {...register(`skills.${index}.number`, {
                      required: "Atleast one skill is required",
                    })}
                  />

                  {index > 0 && (
                    <Button
                      variant="danger"
                      type="button"
                      onClick={() => remove(index)}
                    >
                      remove
                    </Button>
                  )}
                </div>
              );
            })}
            <Button
              variant="success"
              type="button"
              className="add"
              onClick={() => append({ number: "" })}
            >
              Add
            </Button>
            <p>{errors.skills?.message}</p>
            <label htmlFor="address">Address:</label>
            <input
              id="address"
              {...register("address", {
                required: true,
                validate: (adr) => {
                  var regex = /^[a-zA-Z0-9\s,.'-]{3,}$/;
                  if (regex.test(adr)) {
                    return true;
                  } else {
                    return "Invalid Address Format";
                  }
                },
              })}
            />
            <p>{errors.address?.message}</p>
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              {...register("phone", {
                required: true,
                validate: (num) => {
                  const pattern = new RegExp(/^\d{1,10}$/);
                  if (!pattern.test(num)) return "Invalid phone number";
                },
              })}
            />
            <p>{errors.phone?.message}</p>
            <Button
              type="submit"
              className="addempbtn"
              disabled={!formState.isValid}
            >
              Add Employeee
            </Button>
          </form>
        </div>

        <div className="box col-lg-5 col-xl-5 col-md-6 col-sm-12">
          <section className="display-container ">
            {isSubmitSuccessful ? (
              <div className="display-data">
                <p>Name:{newdata.name}</p>
                <p>Email:{newdata.email}</p>
                <p>Position:{newdata.position}</p>
                <p>Salary:{newdata.salary}</p>
                <p>Gender:{newdata.Gender}</p>
                <p>
                  Skills:{" "}
                  {newdata.skills.map((e, index) => (
                    <span key={index}>{e.number} </span>
                  ))}{" "}
                </p>
                <p>Address:{newdata.address}</p>
                <p>Phone:{newdata.phone}</p>
              </div>
            ) : (
              <div>
                <h2>No data</h2>
              </div>
            )}
          </section>
        </div>
        {/* <DevTool control={control} /> */}
      </div>
    </div>
  );
};

export default Formtask;
