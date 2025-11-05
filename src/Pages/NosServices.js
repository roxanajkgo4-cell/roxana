
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target,
  Rocket,
  Palette,
  BarChart3,
  Database,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  Megaphone,
  Globe,
  Mail,
  Search,
  Heart
} from "lucide-react";
import SEO from "../components/SEO";
import { usePageTracking, useServiceTracking, useButtonTracking } from "../components/Analytics";

const services = [
  {
    icon: Target,
    title: "Stratégie Marketing",
    subtitle: "Positionnement & Plan d'action",
    description: "Définissez une stratégie marketing gagnante pour vous démarquer et conquérir votre marché.",
    color: "from-blue-500 to-blue-600",
    features: [
      "Analyse concurrentielle approfondie",
      "Définition du positionnement unique",
      "Identification des segments cibles",
      "Plan marketing opérationnel 12 mois",
      "Budget et ROI prévisionnels",
      "Tableaux de bord de suivi"
    ],
    benefits: "Gagnez en clarté. Concentrez vos efforts. Maximisez votre impact."
  },
  {
    icon: Rocket,
    title: "Transformation Digitale",
    subtitle: "Site web, E-commerce & Automatisation",
    description: "Digitalisez votre activité pour gagner en efficacité et toucher plus de clients.",
    color: "from-purple-500 to-purple-600",
    features: [
      "Audit de maturité digitale",
      "Stratégie de présence en ligne",
      "Refonte ou création de site web",
      "Solution e-commerce adaptée",
      "Automatisation des processus",
      "Formation des équipes"
    ],
    benefits: "Automatisez. Vendez en ligne. Accélérez votre croissance."
  },
  {
    icon: Palette,
    title: "Branding & Communication",
    subtitle: "Identité visuelle & Storytelling",
    description: "Créez une marque forte et cohérente qui résonne avec vos clients.",
    color: "from-pink-500 to-pink-600",
    features: [
      "Création d'identité visuelle complète",
      "Charte graphique et guidelines",
      "Stratégie de communication",
      "Création de contenus (textes, visuels)",
      "Animation des réseaux sociaux",
      "Campagnes publicitaires"
    ],
    benefits: "Démarquez-vous. Créez de l'émotion. Fidélisez vos clients."
  },
  {
    icon: BarChart3,
    title: "Études de Marché",
    subtitle: "Data & Insights consommateurs",
    description: "Prenez des décisions éclairées grâce à une connaissance approfondie de votre marché.",
    color: "from-green-500 to-green-600",
    features: [
      "Études qualitatives (interviews, focus groups)",
      "Études quantitatives (sondages, enquêtes)",
      "Analyse de la concurrence",
      "Segmentation client avancée",
      "Tests de concept et produit",
      "Rapports d'insights actionnables"
    ],
    benefits: "Comprenez vos clients. Anticipez les tendances. Innovez sereinement."
  },
  {
    icon: Database,
    title: "CRM & Gestion de Données",
    subtitle: "Centralisation & Pilotage commercial",
    description: "Optimisez votre relation client avec des outils performants et une data exploitable.",
    color: "from-amber-500 to-amber-600",
    features: [
      "Choix et déploiement CRM adapté",
      "Migration et nettoyage de données",
      "Automatisation du marketing (email, SMS)",
      "Parcours client personnalisés",
      "Reporting et dashboards commerciaux",
      "Formation utilisateurs"
    ],
    benefits: "Centralisez vos données. Personnalisez vos actions. Boostez vos ventes."
  },
  {
    icon: GraduationCap,
    title: "Formation & Coaching",
    subtitle: "Montée en compétences de vos équipes",
    description: "Formez vos collaborateurs aux meilleures pratiques marketing et commerciales.",
    color: "from-indigo-500 to-indigo-600",
    features: [
      "Formations sur-mesure (marketing, vente, digital)",
      "Coaching individuel dirigeants",
      "Ateliers pratiques et opérationnels",
      "Programmes de certification",
      "Suivi post-formation et accompagnement",
      "Supports et ressources en ligne"
    ],
    benefits: "Autonomisez vos équipes. Diffusez les bonnes pratiques. Pérennisez les résultats."
  }
];

export default function NosServices() {
  usePageTracking('Nos Services');
  const trackService = useServiceTracking();
  const trackButton = useButtonTracking();

  React.useEffect(() => {
    // Track service page views for each visible service
    services.forEach(service => {
      trackService(service.title);
    });
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="min-h-screen py-16">
      <SEO
        title="Nos Services - Stratégie, Digital, Branding | CI GROUP Nice"
        description="Services complets : Stratégie Marketing, Transformation Digitale, Branding, Études de Marché, CRM, Formation. Solutions sur-mesure pour PME."
        keywords="services conseil, stratégie marketing, transformation digitale, branding, études marché, CRM, formation entreprise, Nice"
        canonicalUrl={typeof window !== 'undefined' ? window.location.href : 'https://www.cigroup.fr/services'}
      />

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-900 border-blue-200 text-sm px-4 py-1">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Nos Solutions
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Des expertises complètes pour votre réussite
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stratégie, marketing, digital, branding : découvrez nos services pensés pour faire grandir votre entreprise.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="space-y-16">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className={`bg-gradient-to-br ${service.color} p-12 text-white flex flex-col justify-center`}>
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <Badge className="mb-4 bg-white/20 text-white border-white/30 w-fit">
                    {service.subtitle}
                  </Badge>
                  <h2 className="text-4xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-white/90 mb-6">
                    {service.description}
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-white font-medium">
                      {service.benefits}
                    </p>
                  </div>
                </div>

                <div className="p-12 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Ce que nous faisons pour vous
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={createPageUrl("Contact") + `?service=${service.title.toLowerCase().replace(/ /g, '_')}`}>
                    <Button 
                      className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 shadow-lg`} 
                      size="lg"
                      onClick={() => trackButton('En savoir plus - Service', { 
                        service: service.title,
                        location: 'services_grid' 
                      })}
                    >
                      En savoir plus
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-slate-50 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Et aussi...
            </h2>
            <p className="text-lg text-gray-600">
              D'autres services pour compléter votre stratégie
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Search, title: "SEO & Référencement", desc: "Améliorez votre visibilité" },
              { icon: Megaphone, title: "Publicité en ligne", desc: "Google Ads, Facebook Ads" },
              { icon: Mail, title: "Email Marketing", desc: "Campagnes automatisées" },
              { icon: Heart, title: "Relation Client", desc: "Satisfaction & fidélisation" }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: TrendingUp,
                title: "Résultats mesurables",
                description: "Des KPIs clairs. Un suivi rigoureux. Des résultats concrets."
              },
              {
                icon: Zap,
                title: "Réactivité",
                description: "Réponse sous 24h. Déploiement rapide. Agilité maximale."
              },
              {
                icon: Users,
                title: "Accompagnement humain",
                description: "Un interlocuteur dédié. Proximité. Disponibilité."
              }
            ].map((item, index) => (
              <div key={index}>
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Card className="border-none shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Un projet ? Une question ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Discutons de vos enjeux et trouvons ensemble la meilleure solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Contact")}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg w-full sm:w-auto"
                  onClick={() => trackButton('Contactez-nous', { location: 'services_cta' })}
                >
                  Contactez-nous
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl("NotreApproche")}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto"
                  onClick={() => trackButton('Notre méthode de travail', { location: 'services_cta' })}
                >
                  Notre méthode de travail
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
