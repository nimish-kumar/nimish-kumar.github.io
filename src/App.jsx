import "./app.css";
import { Navbar } from "@components";
import { Home } from "./pages";

function App() {
  return (
    <div className="app">
      <div>
        <Navbar />
      </div>
      <section className="home">
        <Home />
      </section>
    </div>
  );
}

export default App;
