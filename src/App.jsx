import { Dock, Navbar, Welcome } from "./components"
import { Draggable } from "gsap/Draggable"
import Terminal from "./windows/Terminal";
import gsap from "gsap";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <>
      <Navbar />
      
    <main>
      <Welcome />
      <Dock />

      <Terminal />
    </main>
    </>
  )
}

export default App