// import { Form } from 'formik/dist/Form';
import React from 'react';
import { useFormik } from 'formik';
// import * as Yup from 'yup';
import '../css/pages.css';

const Register = () => {
	// Managing the form state
	// Handling form submission
	//  Validation and error messages
	const formik = useFormik({
		initialValues: {
			fname: 'Akila',
			lname: '',
			uname: '',
			email: '',
		},
	});
	console.log('Form values', formik.values);

	return (
		<form>
			<label htmlFor="fname"> First Name</label>
			<input
				type="text"
				id="fname"
				name="fname"
				onChange={formik.handleChange}
				value={formik.values.fname}
			/>

			<label htmlFor="lname">Name</label>
			<input
				type="text"
				id="lname"
				name="lname"
				onChange={formik.handleChange}
				value={formik.values.lname}
			/>

			<label htmlFor="uname">User Name</label>
			<input
				type="text"
				id="uname"
				name="uname"
				onChange={formik.handleChange}
				value={formik.values.uname}
			/>

			<label htmlFor="email">Email</label>
			<input
				type="text"
				id="email"
				name="email"
				onChange={formik.handleChange}
				value={formik.values.email}
			/>

			<button>Submit</button>
		</form>
	);
};

export default Register;
