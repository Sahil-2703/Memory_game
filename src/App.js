import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center w-[100vw] h-[100vh]">
        <p className="text-4xl font-bold"> Remember the Color </p>
        {/* <div className="container mx-auto bg-black w-[70%] h-[70%] mt-10"> */}
          <Cards />
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
