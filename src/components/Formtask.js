import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Formtask = () => {
  const form = useForm({
    defaultValues: {
      skills: [{ number: "" }],
    },
    mode: "onChange",
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors, isValid, isDirty, isSubmitSuccessful } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "skills",
    control,
  });

  const [newdata, setNewData] = useState();
  const [newSkill, setNewSkill] = useState([]);

  const onSubmit = (data) => {
    setNewData(data);

    const newSkillData = data.skills;

    setNewSkill(newSkillData);
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-container"
        noValidate
      >
        <label htmlFor="name">
          Name:
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
        </label>
        <p>{errors.name?.message}</p>

        <label htmlFor="email">
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
        </label>
        <p>{errors.email?.message}</p>

        <label htmlFor="position">
          Position:
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
        </label>
        <p>{errors.position?.message}</p>

        <label htmlFor="salary">
          Salary:
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
        </label>
        <p>{errors.salary?.message}</p>

        <label htmlFor="gender">
          Gender:
          <select
            {...register("Gender", { required: "must have to be select" })}
            id="gender"
          >
            <option value="--select--"></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
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
                <button
                  type="button"
                  className="remove"
                  onClick={() => remove(index)}
                >
                  remove
                </button>
              )}
            </div>
          );
        })}

        <button
          type="button"
          className="add"
          onClick={() => append({ number: "" })}
        >
          Add
        </button>

        <p>{errors.skills?.message}</p>

        <label htmlFor="address">
          Address:
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
        </label>
        <p>{errors.address?.message}</p>

        <label htmlFor="phone">
          Phone
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
        </label>
        <p>{errors.phone?.message}</p>

        <button
          type="submit"
          className="addempbtn"
          disabled={!formState.isValid}
        >
          Add Employeee
        </button>
      </form>

      <section className="display-container">
        {isSubmitSuccessful ? (
          <div className="display-data">
            <p>Name:{newdata.name}</p>
            <p>Email:{newdata.email}</p>
            <p>Position:{newdata.position}</p>
            <p>Salary:{newdata.salary}</p>
            <p>Gender:{newdata.Gender}</p>
            <p>
              Skills:{" "}
              {newSkill.map((e, index) => (
                <span key={index}>{e.number} ,</span>
              ))}{" "}
            </p>
            <p>Address:{newdata.address}</p>
            <p>Phone:{newdata.phone}</p>
          </div>
        ) : (
          <div>
            <p>No data</p>
          </div>
        )}
      </section>
      {/* <DevTool control={control} /> */}
    </div>
  );
};

export default Formtask;
