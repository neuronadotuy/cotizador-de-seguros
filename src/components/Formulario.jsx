import { Fragment } from 'react';
import { MARCAS, YEARS, PLANES } from '../constants/index';
import useCotizador from '../hooks/useCotizador';
import Error from './Error';

const Formulario = () => {

	const { datos, error, setError, handleChangeDatos, cotizarSeguro } = useCotizador();

	const handleSubmit = e => {
		e.preventDefault();
		if (Object.values(datos).includes('')) {
			setError('Todos los campos son obligatorios');
			setTimeout(() => {
				setError('')
			}, 3000);
			return;
		}
		error && setError('');
		cotizarSeguro(datos);
	};

	return ( 
		<>
			{error && <Error />}
			<form onSubmit={handleSubmit}>
				<div className="my-5">
					<label htmlFor="" className="block mb-3 font-semibold text-gray-600 uppercase">
						Marca
					</label>
					<select 
						name="marca" 
						id="" 
						className="w-full p-3 bg-white border border-gray-200 rounded"
						onChange={e => handleChangeDatos(e)}
						value={datos.marca}
					>
						<option value="">Selecciona una Marca</option>
						{MARCAS.map(marca => {
							return <option key={marca.id} value={marca.id}>{marca.nombre}</option>
						})}
					</select>
				</div>
				<div className="my-5">
					<label htmlFor="" className="block mb-3 font-semibold text-gray-600 uppercase">
						Año
					</label>
					<select 
						name="year" 
						id="" 
						className="w-full p-3 bg-white border border-gray-200 rounded"
						onChange={e => handleChangeDatos(e)}
						value={datos.year}
					>
						<option value="">Selecciona un Año</option>
						{YEARS.map(year => {
							return <option key={year} value={year}>{year}</option>
						})}
					</select>
				</div>
				<div className="my-5">
					<label htmlFor="" className="block mb-3 font-semibold text-gray-600 uppercase">
						Plan
					</label>
					<div className="flex gap-3 items-center">
						{PLANES.map(plan => {
							return(
								<Fragment key={plan.id}>
									<label htmlFor={plan.id} className="cursor-pointer">{plan.nombre}</label>
									<input 
										type="radio" 
										name="plan" 
										id={plan.id} 
										value={plan.id} 
										className="mt-1 mr-10 cursor-pointer"
										onChange={e => handleChangeDatos(e)}
									/>
								</Fragment>
							)
						})}
					</div>
				</div>
				<input type="submit" value="Cotizar" className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 font-semibold uppercase rounded"/>
			</form>
		</>
	 );
}
 
export default Formulario;