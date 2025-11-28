
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Simulator from './pages/Simulator';
import { Menu, X } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen font-sans bg-[#0b0f19] text-slate-200">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-40 bg-[#0b0f19]/80 backdrop-blur-lg border-b border-white/5">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent tracking-tighter">
                        StudenIQ
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            Início
                        </Link>
                        {/* Smooth scroll anchors only work on home, logic omitted for simplicity in SPA router, pointing to home sections */}
                        <Link to="/simulator" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/20">
                            Acessar Simulador
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="md:hidden text-slate-300 hover:text-white p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-20 left-0 right-0 bg-[#0b0f19] border-b border-white/10 p-6 shadow-2xl animate-fade-in min-h-[calc(100vh-80px)]">
                        <nav className="flex flex-col gap-4">
                            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white py-2 border-b border-white/5">
                                Início
                            </Link>
                            <Link to="/simulator" onClick={() => setIsMenuOpen(false)} className="text-blue-400 font-semibold py-2">
                                Acessar Simulador
                            </Link>
                        </nav>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-[#05080f] border-t border-white/5 py-12 px-6">
                <div className="container mx-auto text-center">
                    <div className="text-2xl font-bold text-slate-500 mb-4 tracking-tighter">StudenIQ</div>
                    <p className="text-slate-500 text-sm mb-6">
                        Feito para estudantes da Bahia. Planeje, estude e conquiste.
                    </p>
                    <div className="text-slate-600 text-xs">
                        © 2025 StudenIQ. Todos os direitos reservados.
                    </div>
                </div>
            </footer>
        </div>
    );
};

const App: React.FC = () => {
  return (
    <HashRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/simulator" element={<Simulator />} />
            </Routes>
        </Layout>
    </HashRouter>
  );
};

export default App;