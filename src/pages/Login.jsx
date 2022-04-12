import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
	const [details, setDetails] = useState({
		firstname: "",
		lastname: "",
		email: "",
		phone: "",
		password: "",
	});
	const [checked, setChecked] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(details, checked);
		localStorage.setItem("userData", JSON.stringify(details));
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setDetails({ ...details, [name]: value });
	};

	return (
		<div className='flex gap-10 flex-col md:flex-row h-screen w-screen'>
			<div className='picture flex-1 sm:h-80'>
				<h2 className='text-2xl'>
					Build Exceptional Services with Back Office Support and Business
					Performance{" "}
				</h2>
			</div>
			<form
				method='post'
				onSubmit={handleSubmit}
				className='form flex-1 py-2 px-5'
			>
				<div className='header my-3'>
					<h1 className='text-[#272262] font-extrabold text-2xl my-2'>
						Create Account
					</h1>
					<p className='my-2'>Build an exceptional business</p>
				</div>
				<div className='form-group flex gap-5 my-4'>
					<div className='firstname'>
						<label htmlFor='firstname' className='block text-xl'>
							First Name
						</label>
						<input
							type='text'
							placeholder='Enter Your First Name'
							id='firstname'
							name='firstname'
							value={details.firstname}
							onChange={handleChange}
							className='w-full focus:border-b-4 focus:border-b-[#272262] text-xl text-[#272262]'
							required
						/>
					</div>
					<div className='lastname'>
						<label htmlFor='lastname' className='block text-xl'>
							Last Name
						</label>
						<input
							type='text'
							id='lastname'
							placeholder='Enter Your Last Name'
							name='lastname'
							value={details.lastname}
							onChange={handleChange}
							className='w-full focus:border-b-4 focus:border-b-[#272262] text-xl text-[#272262]'
							required
						/>
					</div>
				</div>
				<div className='form-group my-4'>
					<label htmlFor='phone' className='block text-xl'>
						Phone
					</label>
					<input
						type='number'
						placeholder='Enter your Phone Number'
						value={details.phone}
						onChange={handleChange}
						name='phone'
						id='phone'
						className='w-full focus:border-b-4 focus:border-b-[#272262] text-xl text-[#272262]'
						required
					/>
				</div>
				<div className='form-group my-4'>
					<label htmlFor='email' className='block text-xl'>
						Email
					</label>
					<input
						type='email'
						placeholder='Enter your email'
						name='email'
						value={details.email}
						onChange={handleChange}
						className='w-full focus:border-b-4 focus:border-b-[#272262] text-xl text-[#272262]'
						id='email'
						required
					/>
				</div>
				<div className='form-group my-4'>
					<label htmlFor='password' className='block text-xl'>
						Password
					</label>
					<input
						type='password'
						name='password'
						placeholder='Enter your password'
						value={details.password}
						onChange={handleChange}
						id='password'
						className='w-full focus:border-b-4 focus:border-b-[#272262] text-xl text-[#272262]'
						required
					/>
				</div>
				<div className='form-group flex justify-between my-2'>
					<div className='checkboxInput'>
						<input
							type='checkbox'
							id='check'
							checked={checked}
							onChange={(e) => setChecked(e.target.checked)}
						/>
						<label htmlFor='check' className='pl-2'>
							Remember Me
						</label>
					</div>
					<Link to='' className='text-[#3DB0FF]'>
						Forgot Password
					</Link>
				</div>
				<div className='form-group'>
					<button
						type='submit'
						className='w-full bg-[#3DB0FF] hover:bg-[#3DB0FF] focus:bg-[#3DB0FF] activr:bg-[#3DB0FF] text-[#FFFFFF] text-center text-2xl  rounded-md p-2 my-4 shadow-xl'
					>
						Submit
					</button>
				</div>
				<div className='form-group text-center'>
					<p>
						<span>Get An Account?</span>{" "}
						<span>
							<Link to='' className='text-[#3DB0FF]'>
								Sign In
							</Link>
						</span>
					</p>
				</div>
			</form>
		</div>
	);
};

export default Login;
