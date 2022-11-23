import { createContext, useState } from 'react';
import getDiferenciaYear from '../helpers/index.js';

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

	const [datos, setDatos] = useState({
		marca: '',
		year: '',
		plan: '',
	});

	const [error, setError] = useState('')

	const handleChangeDatos = e => {
		setDatos({
			...datos,
			[e.target.name] : e.target.value,
		});
	};

	const cotizarSeguro = (datos) => {
		// base
		let resultado = 2000;
		// dif de anos
		const diferencia = getDiferenciaYear(datos.year);
		resultado -= ((diferencia * 3) * resultado) / 100;
		console.log(resultado);
		// restar 3% cada ano

		// Americano 15%
		// Europeo 30%
		// Asiatico 5%

		// Basico 20%
		// Completo 50%
		console.log(datos);
	};

	return(
		<CotizadorContext.Provider 
			value={{
				datos,
				error,
				setError,
				handleChangeDatos,
				cotizarSeguro
			}}
		>
			{children}
		</CotizadorContext.Provider>
	)
};

export { CotizadorProvider };
export default CotizadorContext;