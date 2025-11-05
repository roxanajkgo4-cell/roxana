
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  TrendingUp,
  Users,
  CheckCircle2,
  Award,
  BarChart3,
  Lightbulb,
  Rocket,
  Shield,
  Zap,
  ArrowRight,
  Clock
} from "lucide-react";

export default function NotreApproche() {
  return (
    <div className="min-h-screen py-16">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-6 bg-blue-100 text-blue-900 border-blue-200">
              Notre méthode
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Une approche
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                rigoureuse et efficace
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Chez CI GROUP, nous croyons que chaque entreprise est unique. 
              Notre méthodologie allie rigueur analytique et créativité opérationnelle.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Des diagnostics factuels. Des stratégies sur-mesure. Des résultats mesurables.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Équipe en réunion stratégique"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-2xl max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Excellence</p>
                  <p className="text-lg font-bold text-gray-900">Méthodologie éprouvée</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Methodology Steps */}
      <div className="bg-slate-50 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre processus en 4 étapes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une démarche structurée pour des transformations réussies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                phase: "01",
                title: "Diagnostic & Analyse",
                description: "Nous commençons par comprendre. Audit approfondi de votre situation, analyse de vos enjeux et opportunités de marché.",
                icon: Target,
                color: "from-blue-500 to-blue-600",
                details: [
                  "Entretiens avec les parties prenantes",
                  "Analyse de vos données existantes",
                  "Audit concurrentiel et sectoriel",
                  "Identification des quick wins",
                  "Diagnostic complet sous 2 semaines"
                ]
              },
              {
                phase: "02",
                title: "Stratégie & Planification",
                description: "Nous concevons ensemble. Élaboration d'une feuille de route sur-mesure avec objectifs, KPIs et budget détaillé.",
                icon: Lightbulb,
                color: "from-purple-500 to-purple-600",
                details: [
                  "Définition des objectifs SMART",
                  "Plan d'action priorisé",
                  "Allocation budgétaire optimisée",
                  "Roadmap sur 6 à 12 mois",
                  "Validation en comité de pilotage"
                ]
              },
              {
                phase: "03",
                title: "Mise en œuvre",
                description: "Nous passons à l'action. Déploiement opérationnel avec accompagnement rapproché de vos équipes.",
                icon: Rocket,
                color: "from-green-500 to-green-600",
                details: [
                  "Lancement des chantiers prioritaires",
                  "Formation et montée en compétences",
                  "Gestion de projet agile",
                  "Points d'avancement hebdomadaires",
                  "Ajustements en temps réel"
                ]
              },
              {
                phase: "04",
                title: "Suivi & Optimisation",
                description: "Nous mesurons l'impact. Pilotage de la performance avec dashboards temps réel et optimisations continues.",
                icon: TrendingUp,
                color: "from-amber-500 to-amber-600",
                details: [
                  "Tableaux de bord KPIs automatisés",
                  "Reporting mensuel détaillé",
                  "Analyse des écarts et recommandations",
                  "Optimisation continue des actions",
                  "Bilan trimestriel et recalibrage"
                ]
              }
            ].map((phase, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${phase.color}`} />
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <phase.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <Badge className="mb-2 bg-gray-100 text-gray-900 border-gray-200">
                        Phase {phase.phase}
                      </Badge>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-gray-600">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <ul className="space-y-2">
                      {phase.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Differentiators */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ce qui fait notre différence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un niveau d'exigence au service de vos résultats
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Rigueur méthodologique",
              description: "Processus éprouvés inspirés des industries critiques. Traçabilité complète. Zéro approximation."
            },
            {
              icon: Zap,
              title: "Agilité opérationnelle",
              description: "Réactivité maximale. Adaptation continue. Résultats rapides dès les premières semaines."
            },
            {
              icon: BarChart3,
              title: "Pilotage par la data",
              description: "Décisions basées sur des faits. KPIs mesurables. Reporting transparent en temps réel."
            }
          ].map((item, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Commitments */}
      <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Nos engagements
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ce que vous pouvez attendre de notre collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Réponse sous 24h", desc: "Réactivité garantie" },
              { icon: Users, title: "Interlocuteur dédié", desc: "Proximité et disponibilité" },
              { icon: CheckCircle2, title: "Résultats mesurables", desc: "KPIs à chaque étape" },
              { icon: Award, title: "Satisfaction client", desc: "98% de taux de satisfaction" }
            ].map((item, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-blue-200 text-sm">{item.desc}</p>
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
              Prêt à démarrer ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Discutons de votre projet et de la meilleure façon de travailler ensemble.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg w-full sm:w-auto">
                  Contactez-nous
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl("NosServices")}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Découvrir nos services
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
