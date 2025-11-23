import { Dock, Navbar, Welcome } from "./components"

const App = () => {
  return (
    <>
      <Navbar />
      
    <main>
      <Welcome />
      <Dock />
    </main>
    </>
  )
}

export default App