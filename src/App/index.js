import "./App.css";
import WelcomeMesage from "./WelcomeMessage";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";

function App() {
  return (
  <AppLayout>
    <AppBar/>
    <WelcomeMesage/>
  </AppLayout>
  );
}

export default App;
