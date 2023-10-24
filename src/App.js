import React, { useState } from "react";
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
  const [contacts, setContacts] = useState([
    { name: "John Doe", phone: "123-456-7890", email: "johndoe@gmail.com" },
    { name: "Tommy Tutone", phone: "443-867-5309", email: "ttutone@gmail.com" },
  ]);
  const [appointments, setAppointments] = useState([]);

  const addContact = (name, phone, email) => {
    setContacts([{ name, phone, email }, ...contacts]);
  };

  const addAppointment = (name, contact, date, time) => {
    setAppointments([{ name, contact, date, time }, ...appointments]);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={"/contacts"} replace />} />
        <Route
          path={"/contacts"}
          element={<ContactsPage contacts={contacts} addContact={addContact} />}
        />
        <Route
          path={"/appointments"}
          element={
            <AppointmentsPage
              apppointments={appointments}
              addAppointment={addAppointment}
            />
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
