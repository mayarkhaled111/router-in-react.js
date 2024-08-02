import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./component/Layout"
import Home from "./component/Home"
import About from "./component/About"
import Portfolio from "./component/Portfolio"
import Contact from "./component/Contact"

function App() {
  let routes = createBrowserRouter([
    {path:'' , element: <Layout></Layout> , children : [
      {index: true , element: <Home></Home>},
      {path: '/about' , element: <About></About>},
      {path: '/portfolio' , element: <Portfolio></Portfolio>},
      {path: '/contact' , element: <Contact></Contact>},
    ]}
  ])
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
