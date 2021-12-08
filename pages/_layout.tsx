import Navbar from '../components/Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="mx-auto 2xl:container">
        {children}
      </div>
    </>
  )
}