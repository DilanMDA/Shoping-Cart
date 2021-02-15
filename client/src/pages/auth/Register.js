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

//API call backend and compare email
const emailAddresses = ['test@gmail.com', 'test2@gmail.com', 'test3@gmail.com'];
const UserName = ['Akila', 'Amila'];

const onSubmit = (values) => {
	console.log('Form data', values);
};

const validationSchema = yup.object().shape({
	Fname: yup.string().required('Required'),
	Lname: yup.string().required('Required'),
	Uname: yup
		.string()
		.required('Required')
		.notOneOf(
			UserName,
			'All ready have this User name pleas enter another one',
		),
	email: yup
		.string()
		.email('Invalid email format')
		.notOneOf(emailAddresses, 'Email already taken!')
		.required('Required'),
	password: yup
		.string()
		.required('No password provided. pleas enter your password')
		.min(8, 'Password is too short - should be 8 chars minimum.')
		.matches(
			'^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$',
			'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
		),
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
									autoComplete="off"
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
									autoComplete="off"
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
									autoComplete="off"
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
									autoComplete="off"
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
									autoComplete="off"
									id="password"
									name="password"
								/>
								<ErrorMessage className="error" name="password" />
							</div>
						</div>

						<div className="btn">
							<button type="submit" className="btnSubmit">
								Sign Up
							</button>
							<button type="reset" className="btnReset">
								Reset
							</button>
						</div>

						{/* <p className="signIn">
							Already registered <a href="#">sign in?</a>
						</p> */}
					</Form>
				</div>
			</Formik>
		</main>
	);
};

export default Register;
