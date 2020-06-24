import React, { useState, useEffect } from "react";
import axios from "axios";

const Customers = ({ API_URL_BASE, onSelectedCustomerCallback }) => {
  const [customerList, setCustomerList] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState({});
  const [error, setError] = useState("");
  
	useEffect(() => {
		axios.get(API_URL_BASE + "/customers").then((response) => {
			// Load in the data
			setCustomerList(response.data);
			// }).catch((error) => {
			// Show an error
			// setError("There was an error with this request!");
		});
	}, []);

	const selectCustomer = (customer) => {
		setSelectedCustomer(customer);
		onSelectedCustomerCallback(customer);
	};

	return (

		<table>
      <tbody>
			{customerList.map((customer, i) => (
				<tr key={i}>
					<td>{customer.id}</td>
					<td> {customer.name} </td>
					<td>
						<button
							type="button"
							onClick={() => {
								selectCustomer(customer);
							}}>
							Select
						</button>
					</td>
				</tr>
			))}
      </tbody>
		</table>
	);
};

export default Customers;
