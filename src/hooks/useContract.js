import { useEffect, useState } from "react";

export default function useContract() {
	const [contract, setContract] = useState(null);
	const [constructor, setConstructor] = useState(null);
	const [events, setEvents] = useState([]);
	const [functions, setFunctions] = useState([]);

	const readContract = () => {
		const contractString = localStorage.getItem('contract');
		const contractData = JSON.parse(contractString);

		setContract(contractData);

		getConstructor(contractData.abi);
		getFunctions(contractData.abi);
		getEvents(contractData.abi);
	}

	const getEvents = (data) => {
		const eventData = [];

		for (let i = 0; i < data.length; i++) {
			const item = data[i];

			if (item.type === 'event') {
				eventData.push(item);
			}
		}

		setEvents(eventData);
	}

	const getConstructor = (data) => {
		const constructorData = data.find((item) => item.type === 'constructor');

		setConstructor(constructorData);
	}

	const getFunctions = (data) => {
		const functionData = [];

		for (let i = 0; i < data.length; i++) {
			const item = data[i];

			if (item.type === 'function') {
				functionData.push(item);
			}
		}

		setFunctions(functionData);
	}


	useEffect(() => {
		readContract();
	}, []);

	return {
		contract,
		constructor,
		functions,
		events,
		contractLoaded: !!contract
	}
 }
