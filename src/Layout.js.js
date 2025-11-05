
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Sparkles, Award, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigationItems = [
  { title: "Accueil", url: createPageUrl("Accueil") },
  { title: "Nos Services", url: createPageUrl("NosServices") },
  { title: "Nos Packs", url: createPageUrl("NosPacks") }, // Updated
  { title: "Notre Expertise", url: createPageUrl("NotreExpertise") }, // Updated
  { title: "À Propos", url: createPageUrl("APropos") },
  { title: "Contact", url: createPageUrl("Contact") },
  { title: "Analytics", url: createPageUrl("AnalyticsDashboard") }, // New item for admin
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <style>{`
        :root {
          --primary-900: #1E3A8A;
          --primary-600: #3B82F6;
          --primary-500: #60A5FA;
          --accent-500: #F59E0B;
          --accent-600: #D97706;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl("Accueil")} className="flex items-center group">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f62e8256237e5074a9c135/f084198a1_Capturedcran2025-10-31135319.png"
                alt="CI GROUP - Votre Stratégie"
                className="h-12 w-auto transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === item.url
                      ? 'text-blue-600'
                      : scrolled ? 'text-gray-900' : 'text-gray-700'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
              <Link to={createPageUrl("Contact")}>
                <Button className="bg-gradient-to-r from-blue-900 to-blue-600 hover:from-blue-800 hover:to-blue-500 shadow-lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Demander un devis
                </Button>
              </Link>
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-6 mt-8">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f62e8256237e5074a9c135/f084198a1_Capturedcran2025-10-31135319.png"
                    alt="CI GROUP"
                    className="h-10 w-auto mb-4"
                  />
                  {navigationItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.url}
                      className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                  <Link to={createPageUrl("Contact")}>
                    <Button className="w-full bg-gradient-to-r from-blue-900 to-blue-600">
                      <Mail className="w-4 h-4 mr-2" />
                      Demander un devis
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12"> {/* Changed to md:grid-cols-4 */}
            <div>
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f62e8256237e5074a9c135/f084198a1_Capturedcran2025-10-31135319.png"
                alt="CI GROUP"
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-300 text-sm leading-relaxed">
                Votre stratégie, notre expertise. 
                Conseil en stratégie marketing et transformation digitale.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Navigation
              </h4>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.url}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Email: contact@cigroup.fr</p>
                <p>Tél: +33 (0)1 XX XX XX XX</p>
                <p>4 rue Cluvier, Nice, France</p>
              </div>
            </div>

            {/* New column for Informations légales */}
            <div>
              <h4 className="font-semibold mb-4">Informations légales</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to={createPageUrl("MentionsLegales")}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link
                    to={createPageUrl("PolitiqueConfidentialite")}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Politique de confidentialité
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} CI GROUP. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
