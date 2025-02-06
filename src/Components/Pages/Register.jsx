import { MenuItem, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import registration from "../../assets/form/Registration.png"
import "../Css/Register.css"

const Register = () => {
  return (
    <div className="flex justify-center " >
      <img src={registration} className="absolute left-40 top-30 w-[50rem]"/>
      <div className="w-[40rem] h-[42rem] p-10 mt-[8rem] ml-[50rem] rounded-xl " id="register">
        <Formik
          initialValues={{ name: "", email: "", mobile: "",office: "", destination: "" }}
          onSubmit={(values) => {
            console.log("Form Data:", values);
          }}
        >
          {({ values, handleChange }) => (
            <Form className="flex flex-col gap-8 pt-5">
              <TextField
                id="full-Name"
                name="name"
                label="Full Name"
                variant="outlined"
                value={values.name}
                onChange={handleChange}
                fullWidth
              />
              <TextField 
              id="email"
              name="email"
              label="Email" 
              type="email" 
              variant="outlined"
              value={values.email}
              onChange={handleChange}
              fullWidth 
              />
              <TextField
                id="mobile"
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
                id="office"
                name="office"
                label="Office"
                variant="outlined"
                value={values.office}
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value=''> Select nearest office</MenuItem>
                <MenuItem value='Itahari'> Itahari</MenuItem>
                <MenuItem value='Pokhara'> Pokhara</MenuItem>
                <MenuItem value='Biratnagar'> Biratnagar</MenuItem>
                <MenuItem value='Dharan'> Dharan</MenuItem>
                <MenuItem value='Kathmandu'> Kathmandu</MenuItem>

              </TextField>
              <TextField
              select
                id="destination"
                name="destination"
                label="Destination"
                variant="outlined"
                value={values.destination}
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value=''> Select a Destination</MenuItem>
                <MenuItem value='Japan'> Japan</MenuItem>
                <MenuItem value='Korea'> Korea</MenuItem>
                <MenuItem value='UK'> UK</MenuItem>

              </TextField>
              <div className="ml-5 font-bold font-montserrat mt-[-10px]">

              <Field type='checkbox' name='subscribe' className="mr-2"/>
              <label>
                Yes, I would like to receive information on study abroad news and events from Beaumont.
                </label> 
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
