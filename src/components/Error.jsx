import useCotizador from '../hooks/useCotizador';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

const Error = () => {

	const { error } = useCotizador();

	return ( 
		<div className="w-full bg-red-500 p-3 text-white rounded shadow-xl flex items-center gap-3">
			<ExclamationCircleIcon className="w-8"/>
			<p>{error}</p>
		</div>
	 );
}
 
export default Error;