import { Dock, Navbar, Welcome } from "./components"
import { Draggable } from "gsap/Draggable"
import gsap from "gsap";
import { Safari, Terminal, Resume } from "./windows/index";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <>
      <Navbar />
      
    <main>
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
    </main>
    </>
  )
}

export default App