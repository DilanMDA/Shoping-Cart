import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import '../css/pages.css';

const initialValues = {
	Fname: '',
	Lname: '',
	Uname: '',
	email: '',
	password: '',
};
const onSubmit = (values) => {
	// console.log('Form data', values);
};

const validate = (values) => {
	// values.Fname values.Lname values.Uname values.email values.password
	// errors.Fname ........
	// errors.Fname= 'this field is required'
	let errors = {};

	if (!values.Fname) {
		errors.Fname = 'This field is required';
	}
	if (!values.Lname) {
		errors.Lname = 'This field is required';
	}
	if (!values.Uname) {
		errors.Uname = 'This field is required';
	}
	if (!values.email) {
		errors.email = 'This field is required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email format';
	}
	if (!values.password) {
		errors.password = 'This field is required';
	}
	return errors;
};

const validationSchema = yup.object().shape({
	Fname: yup.string().required('Required'),
	Lname: yup.string().required('Required'),
	Uname: yup.string().required('Required'),
	email: yup.string().email('Invalid email format').required('Required'),
	password: yup
		.string()
		.required('No password provided.')
		.min(8, 'Password is too short - should be 8 chars minimum.')
		.matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const Register = () => {
	// Managing the form state

	// Handling form submission
	//  Validation and error messages
	const formik = useFormik({
		initialValues,
		onSubmit,
		// validate,
		validationSchema,
	});
	console.log('Visted Field', formik.touched);

	return (
		<main>
			<div className="form">
				<form onSubmit={formik.handleSubmit}>
					<h3>Sign Up</h3>

					<div className="form-group">
						<div className="input">
							<label className="label">First name</label>
							<input
								type="text"
								className="form-control"
								placeholder="First name"
								id="Fname"
								name="Fname"
								onBlur={formik.handleBlur} // handleBlur is helper method that we get constant
								onChange={formik.handleChange}
								value={formik.values.Fname}
							/>
							{formik.touched.Fname && formik.errors.Fname ? (
								<div className="error">{formik.errors.Fname}</div>
							) : null}
						</div>
					</div>

					<div className="form-group">
						<div className="input">
							<label>Last name</label>
							<input
								type="text"
								className="form-control"
								placeholder="Last name"
								id="Lname"
								name="Lname"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.Lname}
							/>
							{formik.touched.Lname && formik.errors.Lname ? (
								<div className="error">{formik.errors.Lname}</div>
							) : null}
						</div>
					</div>
					<div className="form-group">
						<div className="input">
							<label>User name</label>
							<input
								type="text"
								className="form-control"
								placeholder="User name"
								id="Uname"
								name="Uname"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.Uname}
							/>
							{formik.touched.Uname && formik.errors.Uname ? (
								<div className="error">{formik.errors.Uname}</div>
							) : null}
						</div>
					</div>

					<div className="form-group">
						<div className="input">
							<label>Email address</label>
							<input
								type="email"
								className="form-control"
								placeholder="Enter email"
								id="email"
								name="email"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.email}
							/>
							{formik.touched.email && formik.errors.email ? (
								<div className="error">{formik.errors.email}</div>
							) : null}
						</div>
					</div>

					<div className="form-group">
						<div className="input">
							<label>Password</label>
							<input
								type="password"
								className="form-control"
								placeholder="Enter password"
								id="password"
								name="password"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.password}
							/>
							{formik.touched.password && formik.errors.password ? (
								<div className="error">{formik.error.password}</div>
							) : null}
						</div>
					</div>

					<button type="submit" className="btn">
						Sign Up
					</button>

					<p className="signIn">
						Already registered <a href="#">sign in?</a>
					</p>
				</form>
			</div>
		</main>
	);
};

export default Register;
