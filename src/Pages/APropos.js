
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Target,
  Heart,
  Award,
  Lightbulb,
  TrendingUp,
  Shield,
  Sparkles,
  ArrowRight,
  Linkedin
} from "lucide-react";

export default function APropos() {
  return (
    <div className="min-h-screen py-16">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-900 border-blue-200">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Qui sommes-nous
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            L'humain au cœur de
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              votre transformation
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CI GROUP accompagne les entreprises dans leur croissance stratégique. 
            Notre mission : transformer vos ambitions en résultats concrets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
            alt="Équipe CI GROUP"
            className="rounded-2xl shadow-2xl"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Notre histoire
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                CI GROUP est né d'une conviction simple : chaque entreprise mérite 
                d'avoir accès à une expertise stratégique de qualité, quel que soit sa taille.
              </p>
              <p>
                Notre parcours nous a appris la rigueur dans des environnements exigeants. 
                Aujourd'hui, nous mettons cette exigence au service de PME de tous secteurs.
              </p>
              <p>
                Plus de 150 entreprises nous ont fait confiance. Leurs succès sont notre fierté.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-slate-50 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Engagement",
                description: "Nous nous investissons à 100% dans votre réussite. Vos résultats sont notre obsession."
              },
              {
                icon: Shield,
                title: "Excellence",
                description: "Nous visons l'excellence dans chaque projet. Rigueur, qualité et dépassement de soi."
              },
              {
                icon: Users,
                title: "Proximité",
                description: "Nous croyons en la relation humaine. Écoute, disponibilité et transparence totale."
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Nous challengeons le statu quo. Créativité et pragmatisme pour des solutions efficaces."
              },
              {
                icon: TrendingUp,
                title: "Performance",
                description: "Nous pilotons par les résultats. Chaque action doit avoir un impact mesurable."
              },
              {
                icon: Target,
                title: "Pragmatisme",
                description: "Nous privilégions l'action. Des solutions concrètes, pas de jargon ni de théorie."
              }
            ].map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Notre équipe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des experts passionnés à votre service
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              name: "Fondateur & CEO",
              role: "Direction stratégique",
              description: "Expert en conseil stratégique. Passionné par la transformation des organisations.",
              linkedin: "https://www.linkedin.com/company/cigroup"
            },
            {
              name: "Directeur Conseil",
              role: "Accompagnement opérationnel",
              description: "Expert en marketing digital et transformation commerciale. Orienté résultats et data-driven.",
              linkedin: "https://www.linkedin.com/company/cigroup"
            }
          ].map((member, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {member.description}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Linkedin className="w-4 h-4" />
                  Voir le profil LinkedIn
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              En quelques chiffres
            </h2>
            <p className="text-xl text-blue-100">
              L'impact de nos actions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "150+", label: "Clients accompagnés", icon: Users },
              { value: "500+", label: "Projets réalisés", icon: Target },
              { value: "+35%", label: "Croissance moyenne", icon: TrendingUp },
              { value: "98%", label: "Taux de satisfaction", icon: Heart }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <stat.icon className="w-10 h-10 text-white mx-auto mb-4" />
                <p className="text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-blue-200">{stat.label}</p>
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
              Travaillons ensemble
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Vous avez un projet ? Une question ? Contactez-nous pour en discuter.
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
