import { Outlet } from "react-router-dom"
import { Nav } from "../../components/Nav"
import { Footer } from "../../Pages/Footer"

export const Main = () => {
  return (
    <div>
        <div className="h-16 shadow-lg">
        <Nav></Nav>
        </div>
        <div className="min-h-[calc(100vh-116px)]">
        <Outlet></Outlet>
        </div>
         <Footer></Footer>
    </div>
  )
}
