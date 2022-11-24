import useCotizador from "../hooks/useCotizador";

const Resultado = () => {

	const { resultadoFinal } = useCotizador();

	return ( 
		<div className="pt-10 text-gray-600 text-center text-2xl font-semibold uppercase">
			{resultadoFinal}
		</div>
	 );
}
 
export default Resultado;