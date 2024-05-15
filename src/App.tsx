import { Outlet } from "react-router-dom"
import { AuthProvider } from "./contexts/authContext/authContext";


function App() {
  return (
      <AuthProvider>
        <Outlet />
      </AuthProvider>
  )
}

export default App
