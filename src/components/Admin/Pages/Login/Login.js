import React, { useState } from 'react';
import './Login.css';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import inputValidation from "../../../customer/Pages/Login/inputValidation";
import Loader from 'lib/customer/Loader/Loader';
import { useToasts } from "react-toast-notifications";
import { loginError } from "../../../../Helpers/toastHelper";

const Login = props => {

	const [submitLoader, setSubmitLoader] = useState(false);
	// const [loginError, setLoginError] = useState(false);
	const { addToast } = useToasts()

	const { register, handleSubmit, formState: { errors } } = useForm();

	const onFormSubmit = (data) => {
		setSubmitLoader(true)
		const { email, password } = data;
		axios.post("/login", {
			email,
			password,
			role: "ADMIN"
		}).then((res) => {
			console.log(res.data)
			localStorage.setItem('adminToken', res.data.token)
			window.location.href = "/admin/dashboard"
			setSubmitLoader(false)
		}).catch((err) => {
			console.log("error 01", err.message)
			loginError(addToast)
			// setLoginError(true)
			setSubmitLoader(false)
		})
		// console.log(email, password);
	}

	let btn;

	if (submitLoader) {
		btn = <Loader />
	} else {
		btn = <Button type={'submit'} className={'header__btn login__submit w-100 mb-5'}>Submit</Button>
	}

	// let loginErrorAlert;

	// if (loginError) {

	// 	loginErrorAlert = (<div class="alert alert-danger" role="alert">
	// 		Something went wrong
	// 	</div>)

	// }

	return (
		<div className={'customer__auth'}>
			<Container className={'h-100 text-center'}>
				{/* {loginErrorAlert} */}
				<Row className={'h-100 align-items-center justify-content-center'}>
					<Col md={5}>
						<div className={'customer__login__top text-center px-3 pt-3 shadow shadow-lg'}>
							<h2 className={'py-5 login-text-main'}>Login</h2>
							<Form className={'mt-4'} onSubmit={handleSubmit(onFormSubmit)}>
								<div className="input-group mb-2">
									<Form.Control type={'text'} placeholder={'EMAIL'} className={'detail__input__login_customer py-4'} {...register('email', inputValidation.email)} />

									<div className="input-group-append">
										<i className="zmdi zmdi-email input-group-text input__prepend__login_customer" />
									</div>
								</div>
								<small className="text-danger">
									{errors.email && errors.email.message}
								</small>
								<div className="input-group mb-2">
									<Form.Control type={'password'} placeholder={'PASSWORD'} className={'detail__input__login_customer py-4'} {...register('password', inputValidation.password)} />

									<div className="input-group-append">
										<i className="zmdi zmdi-key input-group-text input__prepend__login_customer" />
									</div>
								</div>
								<small className="text-danger">
									{errors.password && errors.password.message}
								</small>
								<div >
									{btn}
								</div>
							</Form>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};


export default Login;