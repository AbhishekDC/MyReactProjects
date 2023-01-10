import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <Navbar title="TextUtils2" about="About Me"/>
    <div className="container my-5">
    <TextForm heading="Enter the Heading"/>
    </div>
    </>
  );
}

export default App;
