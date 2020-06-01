export const SET_INTERVIEWS = 'SET_INTERVIEWS';

function handleResponse(respnse){
	return respnse.data.json()
}

export function setInterviews(interviews){
	return{
		type: SET_INTERVIEWS,
		interviews
	}
}

export function saveInterview(data){
	console.log("inside save interview", data);
	return dispatch => {
		return fetch(`http://localhost:3001/api/v1/interviews`, {
            method: 'POST',
            body: JSON.stringify(data),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
		}).then(handleResponse);
	}
}
export function fetchInterviews(){
			{/* step 4 - this function is called , it fetches the API and dispateches data to Reducer in interviews.js */}
	return dispatch => {
		fetch("http://localhost:3001/api/v1/interviews")
			.then(res => res.json())
			.then(data => dispatch(setInterviews(data.data)));
	}
}