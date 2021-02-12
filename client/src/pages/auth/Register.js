import React, { useState } from 'react';

const Register = () => {
	const [email, setEmail] = useState(' ');
	const handleSubmit = () => {
		//
	};

	const registerForm = () => (
		<form onSubmit={handleSubmit}>
			<input
				type="email"
				className="form-control"
				onChange={(e) => console.log(e.target.value)}
				autoFocus
			/>
		</form>
	);
	return (
		<div className="container p-5">
			<div className="row">
				<div className="col-md-6 offset-3">
					<h4>Register</h4>
					{registerForm()}
				</div>
			</div>
		</div>
	);
};

export default Register;
