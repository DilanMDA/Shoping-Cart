import React from 'react';
import { useFormik } from 'formik';

import '../css/pages.css';

const Register = () => {
	// Managing the form state
	// Handling form submission
	//  Validation and error messages
	const formik = useFormik({
		initialValues: {
			Fname: 'Akila',
			Lname: '',
			Uname: '',
			email: '',
			password: '',
		},
	});
	console.log('Form values', formik.values);

	return (
		<main>
			<div className="form">
				<form>
					<h3>Sign Up</h3>

					<div className="form-group">
						<div className="input">
							<label>First name</label>
							<input
								type="text"
								className="form-control"
								placeholder="First name"
								id="Fname"
								name="Fname"
								onChange={formik.handleChange}
								value={formik.values.Fname}
							/>
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
								value={formik.values.Lname}
							/>
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
								value={formik.values.Uname}
							/>
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
								value={formik.values.email}
							/>
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
								value={formik.values.password}
							/>
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
