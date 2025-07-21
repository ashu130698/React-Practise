import './App.css'; // (if you have any app-wide styles)
import Card from './components/Card'; // ✅ import the Card component

function App() {
  return (
    <div className="App">
      <h1>React Card Component</h1>
      <Card /> {/* ✅ Render it here */}
    </div>
  );
}

export default App;
