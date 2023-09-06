import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { signOutAsyn, selectLoggedInUser } from "../authSlice";


function Logout() {
    const dispatch = useDispatch();
    const user = useSelector(selectLoggedInUser)

    useEffect(() => {
        dispatch(signOutAsyn());
    });

  return (
    <>
      {!user && <Navigate to={`/login`} replace={true}></Navigate>}
    </>
  )
};

export default Logout;
