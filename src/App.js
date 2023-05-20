import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Home from './pages/Home';
import Home2 from './pages/Home2';

function App() {
  const router= createBrowserRouter([{
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/home2',
        element:<Home2></Home2>

      }
      
    ]
  }])
  return (
    <div>
      <div  className='max-w-screen-xl	mx-auto'>
      <RouterProvider router={router}></RouterProvider>
     </div>
    </div>
  );
}

export default App;
