import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import { useTranslation } from "react-i18next"; 
import './i18n'; 

// Corrected Path: Pointing to the services folder
import { getProfile, getProjects } from "./services/api"; 

function App() {
    const [mode, setMode] = useState<string>('dark');
    const [loading, setLoading] = useState<boolean>(true);
    const { i18n } = useTranslation();

    const handleModeChange = () => {
        setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    // Handle Scroll
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    // Handle Data Fetching & Loading State
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Wait for your Django API to respond
                await Promise.all([getProfile(), getProjects()]);
            } catch (error) {
                console.error("Data fetch failed", error);
            } finally {
                // Only stop loading once data is ready
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Handle RTL/LTR Logic
    useEffect(() => {
        const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.dir = dir; 
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    if (loading) {
        return (
            <div className="loader-container">
                <div className="loader-dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
        );
    }

    return (
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
            <FadeIn transitionDuration={700}>
                <Main />
                <Expertise />
                <Timeline />
                <Project />
                <Contact />
            </FadeIn>
            <Footer />
        </div>
    );
}

export default App;
