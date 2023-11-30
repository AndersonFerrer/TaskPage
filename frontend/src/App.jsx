/* eslint-disable react-hooks/exhaustive-deps */
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index.routing'
import { useAuthContext } from './hooks/useAuthContext'
import { useEffect } from 'react'
import { Loader } from './components/Loader'

function App() {
  const { checkAuth, loading } = useAuthContext()
  const user = window.localStorage.getItem('user')

  useEffect(() => {
    async function verifyToken() {
      await checkAuth(user);
    }
    verifyToken()
  }, [user])
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <RouterProvider router={router} />
    </>

  )
}

export default App