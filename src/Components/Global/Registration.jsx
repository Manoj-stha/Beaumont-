import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField, MenuItem, Checkbox, FormControlLabel } from "@mui/material";
import Modal from "../Pages/Modal";

const Registration = ({ isOpen, onClose }) => {
    const handleClick = ()=>{
    }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-[40rem] p-10 rounded-xl shadow-md bg-white">
        <h2 className="text-xl font-bold mb-5">Register</h2>

        <Formik
          initialValues={{
            name: "",
            email: "",
            mobile: "",
            office: "",
            destination: "",
            subscribe: false,
          }}
          onSubmit={(values) => {
            console.log("Form Data:", values);
          }}
        >
          {({ values, handleChange }) => (
            <Form className="flex flex-col gap-6">
              <TextField
                name="name"
                label="Full Name"
                variant="outlined"
                value={values.name}
                onChange={handleChange}
                fullWidth
                autoFocus
              />
              <TextField
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                name="mobile"
                label="Mobile"
                type="tel"
                variant="outlined"
                value={values.mobile}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                select
                name="office"
                label="Nearest Office"
                variant="outlined"
                value={values.office}
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value="">Select nearest office</MenuItem>
                <MenuItem value="Itahari">Itahari</MenuItem>
                <MenuItem value="Pokhara">Pokhara</MenuItem>
                <MenuItem value="Biratnagar">Biratnagar</MenuItem>
                <MenuItem value="Dharan">Dharan</MenuItem>
                <MenuItem value="Kathmandu">Kathmandu</MenuItem>
              </TextField>
              <TextField
                select
                name="destination"
                label="Destination"
                variant="outlined"
                value={values.destination}
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value="">Select a Destination</MenuItem>
                <MenuItem value="Japan">Japan</MenuItem>
                <MenuItem value="Korea">Korea</MenuItem>
                <MenuItem value="UK">UK</MenuItem>
              </TextField>

              {/* Subscription Checkbox */}
              <FormControlLabel
                control={
                  <Field as={Checkbox} name="subscribe" color="primary" />
                }
                label="Yes, I would like to receive information on study abroad news and events from Beaumont."
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                onClick={handleClick}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default Registration;
