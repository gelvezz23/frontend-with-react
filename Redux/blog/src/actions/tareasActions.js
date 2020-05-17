/** @format */

import axios from 'axios';
import { TRAER_TODAS, CARGANDO, ERROR } from '../types/tareasTypes';

export const traerTodas = () => async (dispatch) => {
	dispatch({
		type: CARGANDO,
	});

	try {
		const respuesta = await axios.get('https://jsonplaceholder.typicode.com/todos');

		const tareas = {};
		respuesta.data.map(
			(tar) =>
				(tareas[tar.userId] = {
					...tareas[tar.userId],
					[tar.id]: { ...tar },
				})
		);

		dispatch({
			type: TRAER_TODAS,
			payload: respuesta.data,
		});
	} catch (error) {
		console.log(error.message);
		dispatch({
			type: ERROR,
			payload: 'Información de tareas no disponible.',
		});
	}
};
