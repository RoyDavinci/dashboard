import React from "react";
import "./analyticcomponent.css";

const AnalyticComponent = ({ month, year, date, icon, latest }) => {
	return (
		<div className='AnalyticComponent-container flex justify-between items-center '>
			<div className='analyticReportContainer flex justify-between flex-auto w-80'>
				<div className='input mx-2 w-8'>
					<input type='checkbox' name='' id='analytic' />
				</div>
				<div className='report flex w-full items-center relative mx-2 relative'>
					<p className=''>
						{month} {year} Report
					</p>
					{latest ? (
						<span className='mx-2 bg-[#BBF6D8] rounded  px-2 text-[#4DDE96]'>
							new
						</span>
					) : (
						""
					)}
				</div>
				<div className='date w-full'>
					<p className=''>{date}</p>
				</div>
			</div>
			<div className='btnAnalyticContainer flex-auto w-20 text-right mx-2'>
				<button className='hover:bg-[#3DB0FF] bg-[#3DB0FF] py-2 mx-2 px-4 hover:text-white text-white'>
					View
				</button>
				<i className={icon}></i>
			</div>
		</div>
	);
};

export default AnalyticComponent;
