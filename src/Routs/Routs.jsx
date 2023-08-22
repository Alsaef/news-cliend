import {createBrowserRouter} from 'react-router-dom';
import Home from '../Component/Home/Home';
import Catagories from '../Component/Catagorise/Catagories';
import MainNews from '../Component/MainNews/MainNews';
import Newspage from '../Component/Newspage/Newspage';
import LoginPage from '../Component/LoginPage/LoginPage';
import Register from '../Component/Register/Register';
import Private from '../Private/Private';
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
            path:'/',
            element:<Catagories></Catagories>,
            loader:()=>fetch('http://localhost:3000/news'),
        },
        {
           path:'/category/:id',
           element:<Catagories></Catagories>,
           loader:({params})=>fetch(`http://localhost:3000/categories/${params.id}`),
        },
      ],
    },
    {
      path:'/news',
      element:<MainNews></MainNews>,
      children:[
        {
          path:":id",
          element:<Private><Newspage></Newspage></Private>,
          loader:({params})=>fetch(`http://localhost:3000/news/${params.id}`)
        },
      ]

    },   
    {
      path:'/login',
      element:<LoginPage></LoginPage>
    },
    {
      path:'/register',
      element:<Register></Register>
    }
  ]);

  export default router;