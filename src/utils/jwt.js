export const setToken = (token) => {
    localStorage.setItem('jwt', token);
    console.log("Llegue a jwt.js")
  };
  
  export const getToken = () => {
    return localStorage.getItem('jwt');
  };
  
  export const removeToken = () => {
    localStorage.removeItem('jwt');
  };