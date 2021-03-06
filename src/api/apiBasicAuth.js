import apiClientL from './clientBasicAuth';

const endpoint = '/login';

export const getUser= async (email, password, cancelToken)=>{
    let error;
    let user;

    const response = await apiClientL(email, password, cancelToken).get(endpoint);
    if (response.ok){
        user = response.data
    }else if (response.status === 401){
        error="Invalid Email/Password Combo"
    }else{
        error = "An Unexpected Error has Occured. Please Try again Later."
    }
    return {
        error,
        user
    }

}
