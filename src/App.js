
import './App.css';
import Navbar from './components/Navbar'
// import TextForm from './components/TextForm'
import About from "./components/About";



function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutus="about us" />
    {/* <TextForm heading = "Enter the text"/>   */}
    <About/>
    </>
  )
}

export default App;
