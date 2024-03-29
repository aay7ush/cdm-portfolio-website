import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-120px)] grid place-content-center">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
export default Layout
