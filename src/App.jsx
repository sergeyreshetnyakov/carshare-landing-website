import Navbar from "./components/Navbar"
import Header from "./components/Header"
import CarBook from "./components/carBook/CarBook"
import ContactInfo from "./components/ContactInfo"
import Footer  from "./components/Footer"
import "./App.sass"

const App = () => {
  return (
    <div className="app">
      <div className="app-content">
        <Navbar />
        <Header />
        <CarBook />
        <ContactInfo />
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
