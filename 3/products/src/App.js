import ListProducts from './components/ListProducts';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListProducts />
      </header>
    </div>
  );
}

export default App;
