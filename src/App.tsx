import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./layouts/home";
import Dashboard from "./pages/Dashboard";
import Word from "./pages/word";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/word',
        element: <Word />,
      },
    ],
  },
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    <ToastContainer/>
    </>
  )
}

export default App;
