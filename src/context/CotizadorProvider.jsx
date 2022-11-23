import { createContext, useState } from 'react';
import { getDiferenciaYear, calcularMarca, calcularPlan, formatearResultado } from '../helpers/index.js';

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
		// Precio base del seguro
		let resultado = 2000;
		// Se calcula y resta la diferencia de years entre el year actual y el year a cotizar
		const diferencia = getDiferenciaYear(datos.year);
		resultado -= ((diferencia * 3) * resultado) / 100;
		// Se multiplica el resultado por el % de la marca seleccionada
		// Europeo 30% // Americano 15% // Asiatico 5%
		resultado *= calcularMarca(datos.marca);
		// Se multiplica el resultado por el % del plan seleccionado
		// Basico 20% // Completo 50%
		resultado *= calcularPlan(datos.plan)
		// En caso de existir muchos digitos luego de la coma (1790.3999999...) lo quitamos:
		resultado = formatearResultado(resultado);
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