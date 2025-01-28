import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./layouts/home";
import Dashboard from "./pages/Dashboard";
import Word from "./pages/word";



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
    <RouterProvider router={router} />
  )
}

export default App;
