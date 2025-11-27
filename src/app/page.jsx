"use client";
import useLogin from "@/hooks/useLogin";
import Footer from "@/components/web/Footer";
import Navbar from "@/components/web//Navbar";
import ModalLogin from "@/components/auth/ModalLogin";
import { PlanesSection } from "@/components/web/PlanesSection";
import { LocationsSection } from "@/components/web/LocationSection";
import { ServiciosSection } from "@/components/web/ServiciosSection";
import HeroSection from "@/components/web/HeroSection";

export default function Home() {
    const {
        visible,
        handleOpenLogin,
        handleCloseLogin,
        userLogin,
        error,
        loading,
    } = useLogin();    

    return (
        <main className="min-h-screen">
            <Navbar handleOpenLogin={handleOpenLogin} />
            <HeroSection />
            <section id="sedes" className="bg-gray-950">
                <LocationsSection />
            </section>
            <section id="planes" className="">
                <PlanesSection />
            </section>
            <section id="servicios" className="">
                <ServiciosSection />
            </section>
            <Footer />
            <ModalLogin
                visible={visible}
                handleCloseLogin={handleCloseLogin}
                userLogin={userLogin}
                error={error}
                loading={loading}
            />
        </main>
    );
}
