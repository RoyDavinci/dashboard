import React from "react";
import Logo from "../images/photo_2022-04-10_13-27-45.jpg";

const Header = () => {
	return (
		<div>
			<header className='flex justify-between p-3'>
				<div className='logoContainer flex items-center p-1 bg-white rounded-lg'>
					<img src={Logo} alt='' className='w-12 h-12 px-2' />
					<p className='p-2 text-lg'>HostBeak</p>
					<i className='fa-solid fa-caret-right p-3 text-[#76C3FC]'></i>
				</div>
				<div className='userContainer flex items-center'>
					<div className='notif relative'>
						<i className='fa-solid fa-bell px-3 text-[#ccc]'></i>
						<div className='absolute bg-red-400 top-1 right-3 rounded-full h-1.5 w-1.5'></div>
					</div>
					<div className='circle px-3 rounded-full h-8 w-8 bg-[#091E46]'></div>
					<div className='user px-4'>
						<span className='px-3'>Ogoluwa</span>
						<i className='fa-solid fa-chevron-down'></i>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
