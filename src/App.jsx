import Login from "./components/Login/Login"
import image3 from './images/03.jpg';


function App() {
  

  return (
    <>
    <div className="size-full h-screen bg-no-repeat bg-cover bg-center" style={{backgroundImage:`url(${image3})`}}>
    <div className="min-h-screen text-white h-[100vh] flex justify-center items-center bg-cover"><Login/></div>
    </div>
    </>
  )
}

export default App
