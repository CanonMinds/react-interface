import { useState, useEffect, useCallBack, useCallback } from "react";
import { BiCalendar } from "react-icons/bi";
import AppointmentInfo from "./components/AppointmentInfo";
import AddAppointment from "./components/AddAppointment";
import Search from "./components/Search";

function App() {
  let [appointmentList, setAppointmentList] = useState([]);

  const fetchData = useCallback(() => {
    fetch("./data.json")
      // issue Promises, 'helps' monitor for changes
      // perfect for retrieving data on trad API
      .then((response) => response.json())
      .then((data) => {
        setAppointmentList(data);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
        <BiCalendar className="inline-block text-red-400 align-top" /> Your
        Appointments{" "}
      </h1>
      <AddAppointment />
      <Search />

      <ul className="divide-y divide-gray-200">
        {appointmentList.map((appointment) => (
          <AppointmentInfo key={appointment.id} appointment={appointment} />
        ))}
      </ul>
    </div>
  );
}

export default App;
