import Navigation from "./components/Navigation"

const App = () => {
  return (
    <main className="w-full h-screen flex flex-row">
    <Navigation position="left" /> 
    
      <Navigation position="right" /> 
    </main>
  )
}

export default App
