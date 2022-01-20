import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      
      <div className="min-h-screen mx-auto 2xl:container">
        {children}
      </div>

      <Footer />
    </>
  )
}