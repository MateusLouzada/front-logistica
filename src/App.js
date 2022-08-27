import AddTruck from "./components/AddTruck";
import Upload from "./components/Upload";
import ShowTrucks from "./components/ShowTrucks";
import ShowLocations from "./components/ShowLocations";

function App() {
  return (
    <div className="App">
      <AddTruck />
      <Upload />
      <ShowTrucks />
      <ShowLocations />
    </div>
  );
}

export default App;
