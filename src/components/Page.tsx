import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type PagePros = {
    children: ReactNode
};

const Page = ({ children }: PagePros) => {
    return (
        <div className="page">
            <Navbar />
            <main className="page-content">
                { children }
            </main>
            <Footer />
        </div>
    );
}

export default Page;