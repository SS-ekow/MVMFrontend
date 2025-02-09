
import Header from "../Header"
import Footer from "../Footer"

interface LayoutProps{
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <>
    
    <Header/>
    <main className="container mx-auto p-2 bg-slate-50 rounded-md">
    {children}

    </main>
    <Footer/>
    </>
  )
}

export default Layout