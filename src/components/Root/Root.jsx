
import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header"

const Root = () => {
  return (
    <div className=" align-center justify-center text-center ">
        <Header/>
        <Outlet></Outlet>
    </div>
  )
}
export default Root