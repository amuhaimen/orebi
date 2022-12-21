import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import Rootlayout from "./components/layout/Rootlayout";
import Home from "./pages/Home";
let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
