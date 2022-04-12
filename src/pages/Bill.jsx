import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

import "./bill.css";

const Bill = () => {
	return (
		<div className='billContainer bg-[#F9F9F9]'>
			<Header></Header>
			<main className=''>
				<SideBar></SideBar>
				<section className='bg-white p-3 rounded'>
					<h1>Add Bill</h1>
					<form action='' className='form-horizontal flex gap-10 text-sm'>
						<div className='form-group flex-1'>
							<div className='choose'>
								<label htmlFor='choose' className='block my-2'>
									Vendor
								</label>
								<select name='' id='choose' className='p-2'>
									<option value='Choose'>Choose</option>
								</select>
							</div>
							<div className='vendor'>
								<label htmlFor='vendor' className='block my-2'>
									Currency
								</label>
								<select name='' id='vendor' className='p-2 bg-none'>
									<option value='currency'>USD - US Dollar</option>
								</select>
							</div>
							<div className='file'>
								<p className='my-2'>Upload Copy Of Bill</p>
								<label htmlFor='file' className='filecontainer p-2 block '>
									<p>
										Upload File
										<i className='fa-solid fa-file-arrow-up'></i>
									</p>
									<input type='file' className='p-2' />
								</label>
							</div>
						</div>
						<div className='form-group flex-1'>
							<div className='form-group-options'>
								<div className='date'>
									<label htmlFor='date' className='block my-2'>
										Date
									</label>
									<input type='date' id='date' name='date' className='' />
								</div>
								<div className='due-date'>
									<label htmlFor='due-date' className='block my-2'>
										Due Date
									</label>
									<input
										type='date'
										id='due-date'
										name='due-date'
										className=''
									/>
								</div>
								<div className='po'>
									<label htmlFor='po/so' className='block my-2'>
										PO/SO
									</label>
									<input type='text' name='po-so' id='po/so' className='p-2' />
								</div>
							</div>
						</div>
						<div className='textbox flex-1'>
							<div className='bill'>
								<label htmlFor='bill' className='block my-2'>
									Bill#
								</label>
								<input type='text' name='bill' id='bill' className='p-2' />
							</div>
							<label htmlFor='note' className='block my-2'>
								Notes
							</label>
							<textarea name='' id='note' cols='' rows='4.5'></textarea>
						</div>
					</form>
					<div className='itemBillContainer'>
						<table className='table '>
							<thead>
								<tr>
									<th scope='col'>Item</th>
									<th scope='col'>Expense Category</th>
									<th scope='col'>Description</th>
									<th scope='col'>Qty</th>
									<th scope='col'>Price</th>
									<th scope='col'>Tax</th>
									<th scope='col'>Amount</th>
									<th scope='col'></th>
								</tr>
							</thead>
							<tbody>
								<tr className='table-data'>
									<td>
										<select name='' id=''>
											<option value='Choose'>Choose</option>
										</select>
									</td>
									<td>
										<select name='' id=''>
											<option value='Choose'>Choose</option>
										</select>
									</td>
									<td width='130px'>
										<input type='text' id=''></input>
									</td>
									<td width='60px'>
										<input type='text' id=''></input>
									</td>
									<td width='120px'>
										<input type='text' id=''></input>
									</td>
									<td width='120px'>
										<input type='text' id=''></input>
									</td>
									<td>N0.00</td>
									<td>
										<i className='fa-solid fa-trash-can'></i>
									</td>
								</tr>
								<tr className='noborder'>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td>
										<p>Sub Total:</p>
									</td>
									<td>N0.00</td>
									<td></td>
								</tr>
								<tr className='noborder'>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td>
										<p>Total (NGN):</p>
									</td>
									<td>N0.00</td>
									<td></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className='btnContainer text-right'>
						<button className='cancel btn btn-outline-secondary mx-3'>
							Cancel
						</button>
						<button className='save btn btn-info px-3'>Save</button>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Bill;
