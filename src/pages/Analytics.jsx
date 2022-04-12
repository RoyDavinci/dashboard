import React from "react";
import "./analytics.css";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import AnalyticComponent from "../components/AnalyticComponent";

const Analytics = () => {
	return (
		<div className='analyticsContainer bg-[#F9F9F9]'>
			<Header></Header>
			<div className='mainAnalyticContainer '>
				<div className='sideBars'>
					<SideBar className=''></SideBar>
				</div>
				<div className='componentContainer '>
					<div className='analyticDivConponent bg-white p-4'>
						<AnalyticComponent
							month='February'
							date='4th October 2021 11:20am'
							icon='far fa-comment-alt'
							latest
						></AnalyticComponent>
						<AnalyticComponent
							month='March'
							year='2021'
							date='4th October 2021 11:20am'
							icon='far fa-comment-alt'
						></AnalyticComponent>
						<AnalyticComponent
							month='March'
							year='2021'
							date='4th October 2021 11:20am'
							icon='far fa-comment-alt'
						></AnalyticComponent>
						<AnalyticComponent
							month='March'
							year='2021'
							date='4th October 2021 11:20am'
							icon='far fa-comment-alt'
						></AnalyticComponent>
						<AnalyticComponent
							month='March'
							year='2021'
							date='4th October 2021 11:20am'
							icon='far fa-comment-alt'
						></AnalyticComponent>
						<AnalyticComponent
							month='March'
							year='2021'
							date='4th October 2021 11:20am'
							icon='far fa-comment-alt'
						></AnalyticComponent>
						<AnalyticComponent
							month='March'
							year='2021'
							date='4th October 2021 11:20am'
							icon='far fa-comment-alt'
						></AnalyticComponent>
						<AnalyticComponent
							month='February'
							date='4th October 2021 11:20am'
							icon='far fa-comment-alt'
						></AnalyticComponent>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Analytics;
