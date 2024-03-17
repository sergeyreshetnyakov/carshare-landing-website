import Navbar from "./components/Navbar"
import Header from "./components/Header"
import CarBook from "./components/carBook/CarBook"
import ContactInfo from "./components/ContactInfo"
import Footer  from "./components/Footer"

const App = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="mx-[20%] max-2xl:mx-[15%]">
        <Navbar />
        <Header />
        <CarBook />
        <ContactInfo />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
