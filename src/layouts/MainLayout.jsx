import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import HelpMessage from '../components/HelpMessage'
import ScrollToTop from '../components/ScrollToTop'

const MainLayout = ({ children }) => (
  <>
    <Header />
    <main className="main">
      {children}
    </main>
    <HelpMessage />
    <ScrollToTop />
    <Footer />
  </>
)

export default MainLayout
