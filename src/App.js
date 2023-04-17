import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Presentation from './pages/Presentation/Presentation'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import Itemshop from './pages/Itemshop/Itemshop'
import Forum from './pages/Forum/Forum'
import './app.scss'




const Layout = () => {
  return(
    <div className='app'>

      <Navbar/>
      <Outlet/>
      <Footer/>
      
    </div>
    

  )
}
const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/register",
        element: <Register/>
      },
      {
        path:"/itemshop",
        element: <Itemshop/>
      },
      {
        path:"/presentation",
        element: <Presentation/>
      },
      {
        path:"/forum",
        element: <Forum/>
      }
    ]
  }

])

function App() {
  

  
  return (
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
