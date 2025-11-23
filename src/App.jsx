import { Dock, Navbar, Welcome } from "./components"
import { Draggable } from "gsap/Draggable"
import gsap from "gsap";
import { Safari, Terminal, Resume, Finder, Text, ImageWindowContent, Contact } from "./windows/index";

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
      <Finder />
      <Text />
      <ImageWindowContent />
      <Contact />
    </main>
    </>
  )
}

export default App