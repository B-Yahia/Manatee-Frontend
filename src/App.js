import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import InterviewsTable from "./Components/InterviewsTable";

function App() {
  const url = "http://localhost:8080";
  const [eventDetails, setEventDetails] = useState();

  async function apiCall() {
    try {
      const response = await axios.get(url + "/applications");
      setEventDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    apiCall();
  }, [eventDetails]);
  return (
    <div className="App">
      <header className="App-header">
        {!!eventDetails && <InterviewsTable apps={eventDetails} />}
      </header>
    </div>
  );
}

export default App;
