import { store } from "@/store/store.ts";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.tsx";
import PokeFinder from "./components/AllPokemons.tsx";
import SinglePokemonViewer from "./components/SinglePokemon.tsx";
import "./index.css";
import Loader from "./components/Loader.tsx";

let persistor = persistStore(store);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/all",
    element: <PokeFinder />,
  },
  {
    path: "/pokemon/:id",
    element: <SinglePokemonViewer />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
