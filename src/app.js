import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    //jsx fragment shown with the <></> element that wraps both divs.  All JSX components need a parent element (in common?)
    <>
      <div className="app-header">
        <Header />
      </div>
      <div className="app-navigation">
        <Navigation />
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
