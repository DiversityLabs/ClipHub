import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@/components/ui/theme-provider"
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Auth from "./pages/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
])

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
