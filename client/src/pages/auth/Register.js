import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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
	console.log('Form data', values);
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

	return (
		<main>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}>
				<div className="form">
					<Form>
						<h3>Sign Up</h3>

						<div className="form-group">
							<div className="input">
								<label className="label">First name</label>
								<Field
									type="text"
									className="form-control"
									placeholder="First name"
									id="Fname"
									name="Fname"
								/>
								<ErrorMessage className="error" name="Fname" />
							</div>
						</div>

						<div className="form-group">
							<div className="input">
								<label>Last name</label>
								<Field
									type="text"
									className="form-control"
									placeholder="Last name"
									id="Lname"
									name="Lname"
								/>
								<ErrorMessage className="error" name="Lname" />
							</div>
						</div>
						<div className="form-group">
							<div className="input">
								<label>User name</label>
								<Field
									type="text"
									className="form-control"
									placeholder="User name"
									id="Uname"
									name="Uname"
								/>
								<ErrorMessage className="error" name="Uname" />
							</div>
						</div>

						<div className="form-group">
							<div className="input">
								<label>Email address</label>
								<Field
									type="email"
									className="form-control"
									placeholder="Enter email"
									id="email"
									name="email"
								/>
								<ErrorMessage className="error" name="email" />
							</div>
						</div>

						<div className="form-group">
							<div className="input">
								<label>Password</label>
								<Field
									type="password"
									className="form-control"
									placeholder="Enter password"
									id="password"
									name="password"
								/>
								<ErrorMessage className="error" name="password" />
							</div>
						</div>

						<button type="submit" className="btn">
							Sign Up
						</button>

						<p className="signIn">
							Already registered <a href="#">sign in?</a>
						</p>
					</Form>
				</div>
			</Formik>
		</main>
	);
};

export default Register;
