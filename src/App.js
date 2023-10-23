import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root from "./components/Root";
import ContactsPage from "./containers/ContactsPage";
import AppointmentsPage from "./containers/AppointmentsPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={"/contacts"} replace />} />
        <Route path={"/contacts"} element={<ContactsPage />} />
        <Route path={"/appointments"} element={<AppointmentsPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
