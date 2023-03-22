// import axios from "axios";
// import React, { createContext, useContext, useState } from "react";
// import Swal from "sweetalert2";
// import { API } from "../helpers/consts";

// export const authContext = createContext();
// export const useAuth = () => useContext(authContext);

// const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);

//   async function handleRegister(formData) {
//     setLoading(true);
//     try {
//       const res = await axios.post(`${API}/accounts/register/`, formData);
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: error,
//       });
//     } finally {
//       setLoading(false);
//     }

//     const values = {
//       handleRegister,
//     };

//     return (
//       <authContext.Provider value={values}>{children}</authContext.Provider>
//     );
//   }
// };

// export default AuthContextProvider;
