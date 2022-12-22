import React from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  FormLabel,
  Grid,
  Input,
  styled,
  TextField,
} from "@mui/material";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
function Contact() {
  // const validationSchema = yup.object({
  //   name: yup.string().required(""),
  // });
  //   const CustomTextField = styled(TextField)({
  //     marginBlock: "1rem",
  //     "&:: placeholder": {
  //       color: "white",
  //     },
  //
  //     "& input:valid + fieldset": {
  //       borderColor: "#686766",
  //       borderWidth: 2,
  //     },
  //     "& input:invalid + fieldset": {
  //       borderColor: "red",
  //       borderWidth: 2,
  //     },
  //     "& input:valid:focus + fieldset": {
  //       borderLeftWidth: 6,
  //       borderWidth: 1,
  //       padding: "4px !important", // override inline-style
  //       borderColor: "#686766",
  //       color: "white",
  //     },
  //   });

  const CustomField = styled(TextField)(({ theme }) => ({
    paddingBlock: "1rem",
    borderColor: "whitesmoke",

    input: {
      color: "white",
      fontSize: "1.24rem",

      "&::placeholder": {
        color: "white",
        textTransform: "uppercase",
        fontSize: "1.24rem",
      },
    },
  }));

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Name must be at least 2 characters long")
      .max(100, "Name must be 100 characters or less")
      .required("Name is required"),
    email: yup.string().email().required(),
    message: yup
      .string()
      .min(10, "Message must be at least 10 characters long")
      .max(1000, "Message must be 1000 characters or less")
      .required("Message is required"),

    phone: yup
      .string()
      .matches(
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        "Phone number is not valid"
      ),
  });

  return (
    <section style={{ height: "" }}>
      <Grid item xs={12} sx={{ marginY: "1rem" }}>
        <Box sx={{ color: "white", marginY: "5rem" }}>
          <Typography
            variant="h1"
            sx={{ marginY: "0.5rem", fontSize: { xs: "32px", md: "52px" } }}
          >
            Connect with Me
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.5, fontWeight: 400 }}>
            Thank you for visiting my portfolio website. If you have a project
            that you think I might be able to help with, or if you just want to
            get in touch, please don't hesitate to reach out. You can contact me
            using the form below, or feel free to send me an email or give me a
            call. I look forward to hearing from you!
          </Typography>
        </Box>

        <Formik
          initialValues={{ name: "", email: "", phone: "", message: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form>
              {/* name */}
              <Field name="name">
                {({ field, form }) => (
                  <CustomField
                    {...field}
                    label={
                      <FormLabel
                        sx={{
                          color: "white",
                          opacity: 0.6,
                          textTransform: "capitalize",
                        }}
                      >
                        your name
                      </FormLabel>
                    }
                    placeholder="your name please?"
                    type="text"
                    fullWidth
                    margin="normal"
                    variant="standard"
                    error={form.touched.name && form.errors.name}
                    helperText={form.touched.name && form.errors.name}
                    sx={{
                      borderWidth: "1px",
                      borderColor: "yellow !important",
                    }}
                  />
                )}
              </Field>
              {/* email */}
              <Field name="email">
                {({ field, form }) => (
                  <CustomField
                    {...field}
                    label={
                      <FormLabel
                        sx={{
                          color: "white",
                          opacity: 0.6,
                          textTransform: "capitalize",
                        }}
                      >
                        email
                      </FormLabel>
                    }
                    placeholder="your name please?"
                    type="text"
                    fullWidth
                    margin="normal"
                    variant="standard"
                    error={form.touched.email && form.errors.email}
                    helperText={form.touched.email && form.errors.email}
                    sx={{
                      borderWidth: "1px",
                      borderColor: "yellow !important",
                    }}
                  />
                )}
              </Field>
              {/* phone number */}
              <Field name="phone">
                {({ field, form }) => (
                  <CustomField
                    {...field}
                    label={
                      <FormLabel
                        sx={{
                          color: "white",
                          opacity: 0.6,
                          textTransform: "capitalize",
                        }}
                      >
                        Phone Number (optional)
                      </FormLabel>
                    }
                    placeholder="will you like to add your phone number?"
                    type="text"
                    fullWidth
                    margin="normal"
                    variant="standard"
                    error={form.touched.phone && form.errors.phone}
                    helperText={form.touched.phone && form.errors.phone}
                    sx={{
                      borderWidth: "1px",
                      borderColor: "yellow !important",
                    }}
                  />
                )}
              </Field>
              {/* message */}
              <Field name="message">
                {({ field, form }) => (
                  <CustomField
                    {...field}
                    label={
                      <FormLabel
                        sx={{
                          color: "white",
                          opacity: 0.6,
                          textTransform: "capitalize",
                        }}
                      >
                        Message
                      </FormLabel>
                    }
                    placeholder="Your message please"
                    type="text"
                    fullWidth
                    margin="normal"
                    variant="standard"
                    error={
                      form.touched.message && form.errors.message ? true : false
                    }
                    helperText={form.touched.message && form.errors.message}
                    sx={{
                      borderWidth: "1px",
                      borderColor: "yellow !important",
                    }}
                  />
                )}
              </Field>
              {/* button */}
              <Button
                fullWidth
                variant="outlined"
                type="submit"
                sx={{
                  marginY: "1rem",
                  fontSize: { xs: "1.24rem", md: "3rem" },
                  fontWeight: 300,
                  color: "rgba(232, 233, 234, .8)",
                  borderRadius: "3.5rem",
                  border: "1px solid rgba(232, 233, 234, 0.2)",
                  letterSpacing: 1,
                  transition: " 0.5s ease-in",
                  "&:hover": {
                    color: "#1b62c7",
                    fontWeight: 400,
                    letterSpacing: 2,
                    transition: " 0.5s ease-out",
                  },
                }}
              >
                Click to send your message
              </Button>
            </Form>
          )}
        </Formik>
      </Grid>
    </section>
  );
}

export default Contact;
