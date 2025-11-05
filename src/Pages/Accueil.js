
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Target,
  TrendingUp,
  Megaphone,
  Palette,
  Users,
  Database,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Award,
  BarChart3,
  Lightbulb,
  Rocket
} from "lucide-react";
import SEO, { getOrganizationSchema } from "../components/SEO";
import { usePageTracking, useButtonTracking, usePackTracking } from "../components/Analytics";

export default function Accueil() {
  usePageTracking('Accueil');
  const trackButton = useButtonTracking();
  const trackPack = usePackTracking();

  return (
    <div className="min-h-screen">
      <SEO
        title="CI GROUP - Conseil en Stratégie Marketing & Transformation Digitale | Nice"
        description="Expert en stratégie marketing et transformation digitale pour PME. Méthodologie éprouvée, résultats mesurables. Accompagnement personnalisé à Nice et en France."
        keywords="conseil stratégie, marketing digital, transformation digitale, consultant PME, stratégie marketing, Nice, France, croissance entreprise, accompagnement PME"
        canonicalUrl={window.location.href}
        jsonLd={getOrganizationSchema()}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-blue-500/20 text-blue-200 border-blue-400/30 text-sm px-4 py-1">
                <Sparkles className="w-4 h-4 mr-2 inline" />
                Votre partenaire stratégique
              </Badge>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Votre stratégie,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                  Notre expertise
                </span>
              </h1>

              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Accélérez votre croissance avec des stratégies marketing, digitales et commerciales sur-mesure.
                Des solutions concrètes pour transformer vos ambitions en résultats.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={createPageUrl("Contact")}>
                  <Button
                    size="lg"
                    className="bg-white text-blue-900 hover:bg-blue-50 shadow-xl w-full sm:w-auto"
                    onClick={() => trackButton('Hero CTA - Contactez-nous', { location: 'hero' })}
                  >
                    Contactez-nous
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to={createPageUrl("NosServices")}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                    onClick={() => trackButton('Hero CTA - Découvrir solutions', { location: 'hero' })}
                  >
                    Découvrir nos solutions
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="float-animation">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                  alt="Stratégie d'entreprise"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-2xl max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">+35%</p>
                    <p className="text-sm text-gray-600">Croissance moyenne</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(248 250 252)" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "150+", label: "Clients accompagnés" },
              { icon: Award, value: "98%", label: "Taux de satisfaction" },
              { icon: TrendingUp, value: "+35%", label: "Croissance moyenne" },
              { icon: Lightbulb, value: "500+", label: "Projets réalisés" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-900 border-blue-200">
              Nos expertises
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Des solutions concrètes pour votre croissance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stratégie, marketing, digital : nous transformons vos défis en opportunités.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Stratégie Marketing",
                description: "Définissez votre positionnement. Identifiez vos cibles. Maximisez votre impact.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Rocket,
                title: "Transformation Digitale",
                description: "Digitalisez vos processus. Optimisez votre présence en ligne. Gagnez en efficacité.",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: Palette,
                title: "Branding & Communication",
                description: "Créez votre identité. Racontez votre histoire. Démarquez-vous.",
                color: "from-pink-500 to-pink-600"
              },
              {
                icon: BarChart3,
                title: "Études de Marché",
                description: "Comprenez votre marché. Analysez la concurrence. Prenez les bonnes décisions.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: Database,
                title: "CRM & Données",
                description: "Centralisez vos données clients. Automatisez vos actions. Pilotez votre performance.",
                color: "from-amber-500 to-amber-600"
              },
              {
                icon: GraduationCap,
                title: "Formation & Coaching",
                description: "Montez en compétences. Formez vos équipes. Accélérez l'adoption.",
                color: "from-indigo-500 to-indigo-600"
              }
            ].map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow group">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to={createPageUrl("NosServices")}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => trackButton('Découvrir tous nos services', { location: 'services_section' })}
              >
                Découvrir tous nos services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-900 border-purple-200">
              Notre approche
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Une méthodologie éprouvée
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rigueur, expertise et résultats mesurables à chaque étape.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Diagnostic",
                description: "Audit complet. Analyse de vos enjeux. Identification des opportunités."
              },
              {
                number: "02",
                title: "Stratégie",
                description: "Recommandations sur-mesure. Plan d'action détaillé. KPIs définis."
              },
              {
                number: "03",
                title: "Mise en œuvre",
                description: "Déploiement accompagné. Formation des équipes. Suivi rapproché."
              },
              {
                number: "04",
                title: "Optimisation",
                description: "Mesure des résultats. Ajustements continus. Performance maximale."
              }
            ].map((step, index) => (
              <Card key={index} className="border-none shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 text-8xl font-bold text-blue-50">
                  {step.number}
                </div>
                <CardContent className="p-6 relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to={createPageUrl("NotreApproche")}>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => trackButton('En savoir plus sur notre méthode', { location: 'methodology_section' })}
              >
                En savoir plus sur notre méthode
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Packs Section - NEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-900 border-purple-200">
              Nos offres
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Des packs adaptés à vos ambitions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trois niveaux d'accompagnement pour répondre à tous vos besoins stratégiques.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Pack Bronze",
                subtitle: "Essentiel",
                price: "2 500€",
                color: "from-orange-500 to-amber-600",
                features: [
                  "Audit stratégique initial",
                  "Analyse SWOT détaillée",
                  "Plan d'action 90 jours",
                  "2 sessions de suivi",
                  "Rapport final complet"
                ],
                ideal: "PME en phase de structuration",
                deliveryTime: "4 semaines"
              },
              {
                name: "Pack Silver",
                subtitle: "Performance",
                price: "5 500€",
                color: "from-blue-500 to-blue-600",
                popular: true,
                features: [
                  "Tout le Pack Bronze +",
                  "Analyse concurrentielle approfondie",
                  "Tableau de bord KPIs personnalisé",
                  "4 sessions de suivi mensuelles",
                  "Atelier équipe dirigeante (1 jour)"
                ],
                ideal: "PME en croissance",
                deliveryTime: "6 semaines"
              },
              {
                name: "Pack Gold",
                subtitle: "Excellence",
                price: "12 000€",
                color: "from-purple-600 to-indigo-600",
                features: [
                  "Tout le Pack Silver +",
                  "Accompagnement 6 mois",
                  "Plan de transformation digitale",
                  "8 sessions de suivi",
                  "Formation équipe (2 jours)"
                ],
                ideal: "PME visant l'excellence",
                deliveryTime: "12 semaines"
              }
            ].map((pack, index) => (
              <Card 
                key={index} 
                className={`border-none shadow-lg hover:shadow-xl transition-all ${
                  pack.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                {pack.popular && (
                  <div className="bg-blue-600 text-white text-xs font-bold text-center py-2">
                    LE PLUS POPULAIRE
                  </div>
                )}
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${pack.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pack.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{pack.subtitle}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {pack.price}
                    </span>
                    <span className="text-gray-600 ml-2">HT</span>
                    <p className="text-sm text-gray-500 mt-2">
                      Livraison : {pack.deliveryTime}
                    </p>
                  </div>

                  <div className="mb-6 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-900 mb-1">Idéal pour :</p>
                    <p className="text-sm text-gray-700">{pack.ideal}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pack.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={createPageUrl("Contact") + `?pack=${pack.name.toLowerCase().replace(/ /g, '_')}`}>
                    <Button
                      className={`w-full bg-gradient-to-r ${pack.color} hover:opacity-90 shadow-lg`}
                      onClick={() => {
                        trackPack(pack.name, pack.price);
                        trackButton('Choisir pack', { pack: pack.name, location: 'home_packs' });
                      }}
                    >
                      Choisir ce pack
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Vous avez besoin d'une solution personnalisée ?
            </p>
            <Link to={createPageUrl("NosPacks")}>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-600 text-purple-600 hover:bg-purple-50"
                onClick={() => trackButton('Voir tous les packs', { location: 'home_packs_cta' })}
              >
                Voir tous les détails et comparatifs
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à accélérer votre croissance ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Parlons de votre projet. Nos experts vous répondent sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 shadow-xl w-full sm:w-auto"
                onClick={() => trackButton('CTA Final - Contactez-nous', { location: 'final_cta' })}
              >
                Contactez-nous
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to={createPageUrl("NosServices")}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                onClick={() => trackButton('CTA Final - Découvrir solutions', { location: 'final_cta' })}
              >
                Découvrir nos solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
