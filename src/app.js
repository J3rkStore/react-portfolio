import "./css/app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    //jsx fragment shown with the <></> element that wraps both divs.  All JSX components need a parent element (in common?)
    <div className="comonents">
      <header className="app-header">
        <Header />
      </header>
      <div className="app-navigation">
        <Navigation />
      </div>

      <main>
        {console.log("hey hey ", Navigation.content)}
        <div></div>
      </main>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
