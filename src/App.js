import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "./screens/HomeScreen";




function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
      <HomeScreen/>
      </main>
      <Footer/>  
    </div>
  );
}

export default App;
