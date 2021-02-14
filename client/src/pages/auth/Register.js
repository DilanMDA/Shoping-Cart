import { Form } from 'formik/dist/Form';
import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
import '../css/pages.css';
 
const Register = () => {
	return (
		<form>
			<label htmlFor="fname"> First Name</label>
			<input type='text' id='fname' name='fname' />
			
			<label htmlFor="lname">Name</label>
			<input type='text' id='lname' name='lname' />
			
			<label htmlFor="uname">User Name</label>
			<input type='text' id='uname' name='uname'/>

			<label htmlFor="email">Email</label>
			<input type='text' id='email' name='email' />

			<button>Submit</button>
		</form>
	);
	
};

export default Register;
