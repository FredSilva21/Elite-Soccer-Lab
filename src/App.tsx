import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import SobreNos from "./pages/sobreNos";
import Precos from "./pages/precos";
import NossaEquipa from "./pages/nossaEquipa";
import Pessoa from "./pages/pessoa";
import Contactos from "./pages/contactos";
import TermsAndPrivacy from "./pages/Termos";

const routes = [
  { path: "/", element: <LandingPage /> },
  { path: "/sobre-nos", element: <SobreNos /> },
  { path: "/precos", element: <Precos /> },
  { path: "/nossa-equipa", element: <NossaEquipa /> },
  { path: "/equipa/:id", element: <Pessoa /> },
  { path: "/contactos", element: <Contactos /> },
  { path: "/termos-e-privacidade", element: <TermsAndPrivacy /> }

];

function App() {
  return (
    <div className="flex">
      <div className="flex-1">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
