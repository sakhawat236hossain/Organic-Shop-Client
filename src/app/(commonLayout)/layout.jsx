import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function HomeLayout({ children }) {
    return <>
        <Navbar></Navbar>
        {children}
       <Footer></Footer>
    </>
}