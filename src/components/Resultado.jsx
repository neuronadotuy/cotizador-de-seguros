import { useCallback, useRef } from "react";
import useCotizador from "../hooks/useCotizador";
import { MARCAS, PLANES } from "../constants/index";

const Resultado = () => {

	const { datos, resultadoFinal } = useCotizador();
	const { marca, year, plan } = datos;
	const yearRef = useRef(year)

	const [nombreMarca] = useCallback(MARCAS.filter(m => m.id === Number(marca)), [resultadoFinal]);
	const [nombrePlan] = useCallback(PLANES.filter(p => p.id === Number(plan)), [resultadoFinal]);

	return ( 
			<div className="bg-gray-100 mt-5 p-5 shadow-xl rounded">
				<h2 className="pb-5 text-indigo-600 text-xl font-semibold uppercase">
					Resumen
				</h2>
				<div className="text-gray-600 flex flex-col">
					<p>
						<span className="mr-3 font-semibold text-indigo-600">Marca:</span>
						{nombreMarca.nombre}
					</p>
					<p>
						<span className="mr-3 font-semibold text-indigo-600">Año:</span>
						{yearRef.current}
					</p>
					<p>
						<span className="mr-3 font-semibold text-indigo-600">Plan:</span>
						{nombrePlan.nombre}
					</p>
				</div>
				<h2 className="pt-5 text-gray-600 text-2xl font-semibold uppercase">
				<span className="font-normal normal-case">Total:</span> {resultadoFinal}
				</h2>

			</div>
	 );
}
 
export default Resultado;