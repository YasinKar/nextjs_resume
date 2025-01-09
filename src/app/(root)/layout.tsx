import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchResume } from "@/lib/fetchResume";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const resume = await fetchResume();

    return (
        <>
            <Navbar fullName={resume.fullName} />
            {children}
            <Footer />
        </>
    );
}