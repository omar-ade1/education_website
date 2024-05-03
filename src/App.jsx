import "./App.css";
import Header from "./components/header/Header";
import { SkeletonTheme } from "react-loading-skeleton";
import RouterComponent from "./router/RouterComponent";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <SkeletonTheme baseColor="#ddd" highlightColor="#eee">
      <div className="App overflow-hidden">
        <Header />
        <RouterComponent />
        <Footer />
      </div>
    </SkeletonTheme>
  );
}

export default App;
// this 