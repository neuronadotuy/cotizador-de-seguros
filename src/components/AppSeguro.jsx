import Formulario from './Formulario';
import useCotizador from '../hooks/useCotizador';

const AppSeguro = () => {

	return ( 
		<>
			<header className="my-10">
				<h1 className="text-gray-600 text-center text-4xl font-bold uppercase">
					Cotizador de Seguros
				</h1>
			</header>
			<main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow-xl rounded-md p-10">
				<Formulario />
			</main>
		</>
	 );
}
 
export default AppSeguro;