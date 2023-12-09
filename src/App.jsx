import "./app.scss";
import { Card } from "./components";

function App() {
  return (
    <div className="app">
      <section>Header</section>
      <section className="card-section">
        <Card />
      </section>
      <section>Footer</section>
    </div>
  );
}

export default App;
