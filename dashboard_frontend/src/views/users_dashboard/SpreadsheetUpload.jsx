import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { TextField } from "formik-material-ui";
import { Alert, Box, Link, Typography, Button } from "@mui/material";
import { errorToast, successToast } from "../../helpers/notifications/toasts";
import { importUsers } from "../../redux/users/actions";
import { importUsersApi } from "../../helpers/services/user";

const SpreadsheetUpload = () => {
  const dispatch = useDispatch();

  const initialValues = {
    file: null,
  };

  const validationSchema = Yup.object().shape({
    file: Yup.mixed()
      .required('Please add a file')
      .test('fileFormat', 'Invalid format: only XLS and XLSX are accepted', (value) => {
        if (value) {
          const validExtensions = ['.xls', '.xlsx'];
          const fileExtension = value.name.substr(value.name.lastIndexOf('.')).toLowerCase();
          return validExtensions.includes(fileExtension);
        }
        return false;
      }),
  });

  const handleSubmit = async (values,{setSubmitting}) => {
      setSubmitting(false);
      const formData = new FormData();
      formData.append('file', values.file);

      importUsersApi(formData,(res,err)=>{
        if(res){

        }
        if(err){

        }
        
      });

    }

  const handleFileChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    setFieldValue('file', file);
  };

  return (
    <Box>
      <Alert severity="info" sx={{ mt: 2 }}>
        <Link
          href="/sample_files/sample_spreadsheet.xls"
          download="sample_spreadsheet.xls"
          color="inherit"
          underline="always"
        >
          Sample File
        </Link>
        <Typography>Click this "Sample File" link to get a sample file to import users</Typography>
      </Alert>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({isSubmitting, values, setFieldValue}) => (
          <Form>
            <input
              id="file"
              name="file"
              type="file"
              onChange={(event) => handleFileChange(event, setFieldValue)}
               
            />
            <Box mt={2}>
              <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                Send
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default SpreadsheetUpload;

