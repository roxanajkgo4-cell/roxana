import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Zap,
  Target,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
  TrendingUp,
  FileCheck,
  AlertTriangle,
  Atom
} from "lucide-react";

export default function NotreExpertise() {
  return (
    <div className="min-h-screen py-16">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-900 border-blue-200">
            <Atom className="w-4 h-4 mr-2 inline" />
            Notre différence
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            La rigueur des industries critiques
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              au service de votre business
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre fondateur a forgé son expertise dans le consulting nucléaire, 
            où l'erreur n'est pas une option. Cette exigence absolue, nous la mettons aujourd'hui 
            au service de la performance de votre entreprise.
          </p>
        </div>
      </div>

      {/* Nuclear to Business Bridge */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Du nucléaire au business : une expertise unique
              </h2>
              <div className="space-y-4 text-blue-100">
                <p className="leading-relaxed">
                  Dans l'industrie nucléaire, chaque processus est documenté, tracé, vérifié. 
                  Chaque décision s'appuie sur des données factuelles. La culture du zéro défaut n'est pas un slogan, 
                  c'est une nécessité vitale.
                </p>
                <p className="leading-relaxed">
                  Cette rigueur méthodologique, cette discipline opérationnelle, ce souci du détail — 
                  nous les avons transposés au monde du conseil en stratégie. Le résultat ? 
                  Des diagnostics d'une précision chirurgicale. Des plans d'action sans angle mort. 
                  Des résultats mesurables et reproductibles.
                </p>
                <p className="leading-relaxed font-semibold text-white">
                  Votre entreprise n'a peut-être pas le budget d'une centrale nucléaire, 
                  mais elle mérite la même excellence méthodologique.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Shield, title: "Zéro approximation", desc: "Chaque recommandation est documentée et justifiée" },
                { icon: FileCheck, title: "Traçabilité totale", desc: "Vous savez toujours d'où viennent nos analyses" },
                { icon: AlertTriangle, title: "Gestion des risques", desc: "Identification et mitigation systématique" },
                { icon: BarChart3, title: "Pilotage par la data", desc: "Décisions basées sur des faits, pas des opinions" }
              ].map((item, index) => (
                <Card key={index} className="border-none bg-white/10 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
                    <p className="text-xs text-blue-200">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Methodological Principles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Notre méthodologie en 5 principes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Les standards qui ont fait leurs preuves dans les environnements les plus exigeants
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              number: "01",
              title: "Approche systémique",
              description: "Nous analysons votre entreprise comme un système complexe où chaque élément interagit. Pas de solution simpliste, une vision holistique.",
              icon: Target,
              color: "from-blue-500 to-blue-600"
            },
            {
              number: "02",
              title: "Evidence-based",
              description: "Chaque diagnostic s'appuie sur des données vérifiables. Chaque recommandation est étayée par des faits. Fini les présentations PowerPoint creuses.",
              icon: BarChart3,
              color: "from-purple-500 to-purple-600"
            },
            {
              number: "03",
              title: "Analyse de risques",
              description: "Avant chaque décision stratégique, nous cartographions les risques. Identification, évaluation, mitigation. Comme dans le nucléaire, on anticipe.",
              icon: AlertTriangle,
              color: "from-amber-500 to-amber-600"
            },
            {
              number: "04",
              title: "Documentation rigoureuse",
              description: "Tous nos livrables suivent une structure éprouvée. Traçabilité, reproductibilité, clarté. Vous aurez des rapports dignes de ce nom.",
              icon: FileCheck,
              color: "from-green-500 to-green-600"
            },
            {
              number: "05",
              title: "Amélioration continue",
              description: "Après chaque mission, nous mesurons les écarts entre objectifs et résultats. Puis nous ajustons. Le cycle PDCA n'est pas qu'une théorie pour nous.",
              icon: TrendingUp,
              color: "from-indigo-500 to-indigo-600"
            },
            {
              number: "06",
              title: "Culture du résultat",
              description: "Dans le nucléaire, un processus qui ne marche pas est immédiatement corrigé. Nous appliquons la même intransigeance à vos projets business.",
              icon: Award,
              color: "from-pink-500 to-pink-600"
            }
          ].map((principle, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${principle.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-2 bg-gray-100 text-gray-900 border-gray-200">
                      Principe {principle.number}
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {principle.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-slate-50 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Consulting classique vs CI GROUP
            </h2>
            <p className="text-xl text-gray-600">
              Ce qui nous distingue concrètement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-red-200 bg-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">❌</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Consulting classique</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Slides PowerPoint génériques recyclées",
                    "Recommandations vagues et peu actionnables",
                    "Pas de suivi post-mission",
                    "Facturation à la journée sans engagement de résultats",
                    "Consultants juniors sur votre dossier",
                    "Délais élastiques, budgets qui explosent"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✗</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">CI GROUP</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Analyses sur-mesure basées sur VOS données",
                    "Plans d'action détaillés avec responsables et deadlines",
                    "Sessions de suivi incluses dans tous les packs",
                    "Prix fixe connu à l'avance, garantie de résultats",
                    "Consultants seniors dédiés à votre projet",
                    "Délais contractuels tenus (ou option accélérée)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Concrete Examples */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Concrètement, qu'est-ce que ça change ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exemples réels de notre différence d'approche
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              situation: "Diagnostic stratégique",
              classic: "2-3 interviews, analyse SWOT classique, recommandations génériques en 15 slides",
              cigroup: "12 interviews structurées, analyse quantitative de vos données, cartographie des risques, plan d'action avec 47 actions priorisées et chiffrées"
            },
            {
              situation: "Optimisation processus",
              classic: "Observation terrain 2 jours, recommandations 'quick wins' non chiffrées",
              cigroup: "Cartographie complète des flux (VSM), mesure des temps, identification de 12 points de friction avec calcul ROI précis pour chaque amélioration"
            },
            {
              situation: "Stratégie marketing",
              classic: "Benchmark concurrence, personas clients, recommandations canaux",
              cigroup: "Étude de marché quantitative, segmentation statistique, test A/B de 3 messages, plan marketing 12 mois avec budget détaillé par action et ROI prévisionnel"
            },
            {
              situation: "Accompagnement post-mission",
              classic: "Mail de remerciement, puis silence radio",
              cigroup: "4 à 8 sessions de suivi selon votre pack, reporting mensuel des KPIs, ajustements en temps réel, hotline dédiée"
            }
          ].map((example, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-blue-100 text-blue-900">
                  {example.situation}
                </Badge>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-300 pl-4 py-2 bg-red-50 rounded-r">
                    <p className="text-sm font-medium text-red-900 mb-1">Approche classique :</p>
                    <p className="text-sm text-red-800">{example.classic}</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r">
                    <p className="text-sm font-medium text-green-900 mb-1">Approche CI GROUP :</p>
                    <p className="text-sm text-green-800 font-medium">{example.cigroup}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why It Matters */}
      <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20 mb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pourquoi cette rigueur est cruciale pour vous
          </h2>
          <div className="space-y-6 text-lg text-blue-100">
            <p>
              Dans le nucléaire, une erreur méthodologique peut avoir des conséquences catastrophiques. 
              Dans votre entreprise, elle peut coûter des mois de retard, des centaines de milliers d'euros, 
              voire la survie de votre business.
            </p>
            <p>
              Un mauvais diagnostic = une mauvaise stratégie = des ressources gaspillées = des opportunités manquées.
            </p>
            <p className="text-xl font-bold text-white">
              Vous n'avez pas le temps ni le budget pour l'à-peu-près. Nous non plus.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Card className="border-none shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50">
          <CardContent className="p-12">
            <Atom className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prêt pour l'excellence méthodologique ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Découvrez nos packs de consulting ou contactez-nous pour un échange sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("NosPacks")}>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg w-full sm:w-auto">
                  Découvrir nos packs
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Demander un audit gratuit
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}