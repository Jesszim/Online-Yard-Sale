import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Spinner from './Spinner'

const PrivateRoutes = () => {
  let isAuth = useSelector(state => state.auth.isAuth)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const verifyAuth = async () => {
      if (isAuth) {
        setTimeout(() => setLoading(false), 1000)
      }
    }
    verifyAuth()
  }, [isAuth])

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) :
        isAuth ? <Outlet /> : <Navigate to='/login' />
      }
    </>
  )
}

export default PrivateRoutes