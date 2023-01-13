import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <Navbar title="TextUtils2" about="About Me"/>
    <div className="container my-5">
    <TextForm heading="Enter the Heading"/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
