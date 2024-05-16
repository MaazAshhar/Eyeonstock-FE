// check whether user log in or not


export const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    if(token != null){
        return true;
    }else{
        return false;
    }
}

// save the details of login user

export const doLogin = async (res:any ,next:Function)=>{
    localStorage.setItem("token",JSON.stringify(res.data.token));
    next();
}

// log out current user

export const doLogout = async (next:Function)=>{
    localStorage.removeItem("token");
    next();
}

// get the token 

export const getToken = async ()=>{
    if(isLoggedIn()){
        const token = localStorage.getItem("token");
        if (token) {
            return JSON.parse(token);
        }
    }else{
        return null;
    }
}