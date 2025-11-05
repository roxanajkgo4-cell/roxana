
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Zap, 
  Crown,
  ArrowRight,
  Clock,
  Target,
  Users,
  TrendingUp,
  Shield,
  Sparkles
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const packs = [
  {
    name: "Pack Bronze",
    subtitle: "Essentiel",
    price: "2 500",
    acceleratedPrice: "3 250",
    icon: Target,
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    features: [
      "Audit stratégique initial",
      "Analyse SWOT détaillée",
      "Plan d'action 90 jours",
      "2 sessions de suivi",
      "Rapport final complet",
      "Accès support email"
    ],
    deliveryTime: "4 semaines",
    acceleratedTime: "2 semaines",
    ideal: "PME en phase de structuration"
  },
  {
    name: "Pack Silver",
    subtitle: "Performance",
    price: "5 500",
    acceleratedPrice: "7 150",
    icon: TrendingUp,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    popular: true,
    features: [
      "Tout le Pack Bronze +",
      "Analyse concurrentielle approfondie",
      "Optimisation processus métiers",
      "Tableau de bord KPIs personnalisé",
      "4 sessions de suivi mensuelles",
      "Support prioritaire email & téléphone",
      "Atelier équipe dirigeante (1 jour)"
    ],
    deliveryTime: "6 semaines",
    acceleratedTime: "3 semaines",
    ideal: "PME en croissance avec équipe établie"
  },
  {
    name: "Pack Gold",
    subtitle: "Excellence",
    price: "12 000",
    acceleratedPrice: "15 600",
    icon: Crown,
    color: "from-purple-600 to-indigo-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    features: [
      "Tout le Pack Silver +",
      "Accompagnement stratégique sur 6 mois",
      "Plan de transformation digitale", // This was previously "Méthodologie nucléaire complète" + "Plan de transformation digitale"
      "Coaching équipe dirigeante",
      "8 sessions de suivi (bi-mensuel)",
      "Support dédié 24/7",
      "Formation équipe interne (2 jours)",
      "Revue trimestrielle des résultats"
    ],
    deliveryTime: "12 semaines",
    acceleratedTime: "6 semaines",
    ideal: "PME ambitieuses visant l'excellence opérationnelle"
  }
];

const comparisonFeatures = [
  {
    category: "Diagnostic & Analyse",
    features: [
      { name: "Audit stratégique initial", bronze: true, silver: true, gold: true },
      { name: "Analyse SWOT", bronze: true, silver: true, gold: true },
      { name: "Analyse concurrentielle", bronze: false, silver: true, gold: true },
      { name: "Audit processus métiers", bronze: false, silver: true, gold: true },
      { name: "Analyse transformation digitale", bronze: false, silver: false, gold: true }
    ]
  },
  {
    category: "Livrables & Outils",
    features: [
      { name: "Plan d'action détaillé", bronze: true, silver: true, gold: true },
      { name: "Rapport final complet", bronze: true, silver: true, gold: true },
      { name: "Tableau de bord KPIs", bronze: false, silver: true, gold: true },
      { name: "Outils de pilotage personnalisés", bronze: false, silver: false, gold: true },
      { name: "Documentation méthodologique", bronze: false, silver: false, gold: true }
    ]
  },
  {
    category: "Accompagnement",
    features: [
      { name: "Sessions de suivi", bronze: "2", silver: "4", gold: "8" },
      { name: "Support email", bronze: true, silver: true, gold: true },
      { name: "Support téléphone", bronze: false, silver: true, gold: true },
      { name: "Support dédié 24/7", bronze: false, silver: false, gold: true },
      { name: "Coaching équipe dirigeante", bronze: false, silver: false, gold: true }
    ]
  },
  {
    category: "Formation",
    features: [
      { name: "Atelier équipe (1 jour)", bronze: false, silver: true, gold: true },
      { name: "Formation interne (2 jours)", bronze: false, silver: false, gold: true },
      { name: "Accès ressources en ligne", bronze: false, silver: true, gold: true }
    ]
  }
];

export default function NosPacks() {
  const [showAcceleratedPrices, setShowAcceleratedPrices] = React.useState(false);

  return (
    <div className="min-h-screen py-16">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-900 border-blue-200 text-sm px-4 py-1">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Solutions pour votre croissance
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Nos Packs de Consulting
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Trois niveaux d'accompagnement pour la stratégie, l'organisation et la performance de votre PME.
          </p>

          {/* Accelerated Toggle */}
          <div className="inline-flex items-center gap-4 bg-white rounded-full p-2 shadow-lg border border-gray-200">
            <button
              onClick={() => setShowAcceleratedPrices(false)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                !showAcceleratedPrices 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Délai standard
            </button>
            <button
              onClick={() => setShowAcceleratedPrices(true)}
              className={`px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                showAcceleratedPrices 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Zap className="w-4 h-4" />
              Délai accéléré
            </button>
          </div>

          {showAcceleratedPrices && (
            <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 text-amber-900 px-4 py-2 rounded-full border border-amber-200">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Livraison 2x plus rapide • +30% de majoration</span>
            </div>
          )}
        </div>
      </div>

      {/* Packs Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {packs.map((pack, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden border-2 ${pack.borderColor} ${
                pack.popular ? 'shadow-2xl scale-105' : 'shadow-lg'
              } hover:shadow-xl transition-all`}
            >
              {pack.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1 text-xs font-bold">
                  LE PLUS POPULAIRE
                </div>
              )}
              
              <CardHeader className={`${pack.bgColor} border-b ${pack.borderColor} pb-8`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${pack.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                  <pack.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {pack.name}
                </CardTitle>
                <p className="text-gray-600">{pack.subtitle}</p>
                
                <div className="mt-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {showAcceleratedPrices ? pack.acceleratedPrice : pack.price}
                    </span>
                    <span className="text-gray-600">€ HT</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>
                      Livraison : {showAcceleratedPrices ? pack.acceleratedTime : pack.deliveryTime}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Idéal pour :
                  </p>
                  <p className="text-sm text-gray-600">{pack.ideal}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pack.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={createPageUrl("Contact") + `?pack=${pack.name.toLowerCase().replace(' ', '_')}`}>
                  <Button 
                    className={`w-full bg-gradient-to-r ${pack.color} hover:opacity-90 shadow-lg`}
                    size="lg"
                  >
                    Choisir ce pack
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Value Proposition */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Garantie résultats",
                description: "Méthodologie éprouvée avec KPIs mesurables à chaque étape"
              },
              {
                icon: Zap,
                title: "Délai accéléré",
                description: "Besoin urgent ? Option express disponible sur tous les packs"
              },
              {
                icon: Crown,
                title: "Excellence certifiée",
                description: "Standards des industries critiques appliqués à votre business"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comparaison détaillée
          </h2>
          <p className="text-xl text-gray-600">
            Tous les détails pour choisir le pack adapté à vos besoins
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-1/3 font-bold text-gray-900">Prestations</TableHead>
                <TableHead className="text-center font-bold text-gray-900">Bronze</TableHead>
                <TableHead className="text-center font-bold text-gray-900 bg-blue-50">Silver</TableHead>
                <TableHead className="text-center font-bold text-gray-900">Gold</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonFeatures.map((category, catIndex) => (
                <React.Fragment key={catIndex}>
                  <TableRow className="bg-gray-100">
                    <TableCell colSpan={4} className="font-bold text-gray-900 py-3">
                      {category.category}
                    </TableCell>
                  </TableRow>
                  {category.features.map((feature, featIndex) => (
                    <TableRow key={featIndex} className="hover:bg-gray-50">
                      <TableCell className="text-gray-700">{feature.name}</TableCell>
                      <TableCell className="text-center">
                        {typeof feature.bronze === 'boolean' ? (
                          feature.bronze ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )
                        ) : (
                          <span className="font-medium text-gray-900">{feature.bronze}</span>
                        )}
                      </TableCell>
                      <TableCell className="text-center bg-blue-50/50">
                        {typeof feature.silver === 'boolean' ? (
                          feature.silver ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )
                        ) : (
                          <span className="font-medium text-gray-900">{feature.silver}</span>
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {typeof feature.gold === 'boolean' ? (
                          feature.gold ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )
                        ) : (
                          <span className="font-medium text-gray-900">{feature.gold}</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Card className="border-none shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Besoin d'une solution sur mesure ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Nos experts peuvent créer un pack personnalisé adapté à vos besoins spécifiques.
            </p>
            <Link to={createPageUrl("Contact") + "?pack=sur_mesure"}>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                Demander un devis personnalisé
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
