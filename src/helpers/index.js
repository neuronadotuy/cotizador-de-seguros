export function getDiferenciaYear(year) {
	return new Date().getFullYear() - year
};

export function calcularMarca(marca) {
	let precioMarca;
	switch (marca) {
		case '1':
			precioMarca = 1.30
			break;
		case '2':
			precioMarca = 1.15
			break;
		case '3':
			precioMarca = 1.05
			break;
	
		default:
			break;
	}

	return precioMarca;
};

export function calcularPlan(plan) {
	let precioPlan;
	switch (plan) {
		case '1':
			precioPlan = 1.20
			break;
		case '2':
			precioPlan = 1.50
			break;
	
		default:
			break;
	}

	return precioPlan;
}

export function formatearResultado(cantidad) {
	return cantidad.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	})
};