export const initialState = {
	data: [],
}

const GET_DATA = "GET_DATA"

export const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case GET_DATA:
			return { ...state, data: action.payload };

		default:
			return state;
	}
}

export const getData = (data: { work: string, wages: number, description: string }[]) => ({
	type: GET_DATA,
	payload: data
})