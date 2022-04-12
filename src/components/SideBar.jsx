import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const SideBar = () => {
	const [styles, setStyles] = useState(0);
	const [icon, setIcon] = useState(false);
	const [value, setValue] = useState("");

	const handleClick = (id, data) => {
		setStyles(id);
		setIcon(!icon);
		setValue(data);
	};
	console.log(value);
	const items = [
		{
			title: "Welcome",
			icon: "fa-solid fa-rocket",
			children: [],
		},
		{
			title: "Dashboard",
			icon: "fa-solid fa-table-columns",
			children: [],
		},
		{
			title: "Sales",
			icon: "fa-solid fa-credit-card",
			children: [""],
		},
		{
			title: "Purchases",
			icon: "fa-solid fa-cart-shopping",
			children: ["Bills", "Products", "Services"],
		},
		{
			title: "Banking",
			icon: "fa-solid fa-building-columns",
			children: [],
		},
		{
			title: "Payroll",
			icon: "fa-solid fa-file-invoice",
			children: [""],
		},
		{
			title: "Reports",
			icon: "fa-solid fa-chart-simple",
			children: [],
		},
		{
			title: "Analytics",
			icon: "fa-solid fa-user-group",
			children: [
				"View Report",
				"Todo",
				"Upload Docs",
				"Chat",
				"Schedule",
				"Message Board",
				"Make Payments",
				"Billing",
			],
		},
		{
			title: "Settings",
			icon: "fa-solid fa-gear",
			children: [],
		},
		{
			title: "Logout",
			icon: "fa-solid fa-arrow-right-from-bracket",
			children: [],
		},
	];

	return (
		<div className='sidebarContainer '>
			<div className='sidebarContainerItem text-md cursor-pointer my-4 items-center justify-center flex flex-col '>
				{items.map((item, index) => {
					return (
						<div
							className='itemcontent my-2'
							key={index}
							onClick={() => handleClick(index, item.title)}
						>
							<Link
								to={
									item.title === "Logout"
										? "/login"
										: item.children.length > 0
										? `/${item.children[0].toLowerCase().split(" ").join("-")}`
										: `/${item.title.toLowerCase()}`
								}
								className='hover:text-black'
							>
								<span
									className={
										styles === index && icon
											? "content icon flex justify-between"
											: "icon flex justify-between  text-gray-400 "
									}
								>
									<div
										className={
											item.title === "Logout"
												? "iconTitle flex mt-4"
												: "iconTitle flex "
										}
									>
										<div
											className={
												styles === index && icon
													? "rounded-full w-8  box text-sm inline-flex"
													: "w-8 text-sm inline-flex"
											}
										>
											<i
												className={
													item.title === "Logout"
														? `${item.icon} text-red-600`
														: `${item.icon}`
												}
											></i>
										</div>
										<div className='itemTitle'>
											<ul className='w-20 mx-4'>
												<li>
													<h3 className='mb-2'>{item.title}</h3>
												</li>
												<li
													className={
														styles === index && icon
															? "contentItem block transition ease-in-out "
															: "contentItem hidden block "
													}
												>
													{item.children.length > 0 &&
														item.children.map((child, index) => {
															return (
																<Link
																	key={index}
																	to={`/${child
																		.toLowerCase()
																		.split(" ")
																		.join("-")}`}
																	className='block child active:text-[#2630A1]'
																>
																	{child}
																</Link>
															);
														})}
												</li>
											</ul>
										</div>
										<div className='controlIcon w-4'>
											{item.children.length > 0 ? (
												styles === index && icon ? (
													<i className='fa-solid fa-chevron-down'></i>
												) : (
													<i className='fa-solid fa-chevron-right'></i>
												)
											) : (
												""
											)}
										</div>
									</div>
								</span>
							</Link>
						</div>
					);
				})}
				<div className='payment flex items-center bg-[#081494] text-white p-2 rounded w-52 justify-center'>
					<i className='fa-solid fa-credit-card mx-2'></i>
					<p>Accept Payments</p>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
