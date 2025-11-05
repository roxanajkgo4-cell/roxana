
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-900 border-blue-200">
            <Shield className="w-4 h-4 mr-2 inline" />
            RGPD
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Politique de confidentialité
          </h1>
          <p className="text-lg text-gray-600">
            Protection de vos données personnelles (RGPD)
          </p>
        </div>

        <Card className="border-none shadow-lg">
          <CardContent className="p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Responsable du traitement
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le responsable du traitement des données personnelles collectées sur ce site est CI GROUP, 
                dont le siège social est situé au 4 rue Cluvier, 06000 Nice, France.
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Contact :</strong> contact@cigroup.fr
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Données collectées
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dans le cadre de l'utilisation de notre site et de nos services, nous sommes susceptibles de collecter les données personnelles suivantes :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Nom et prénom</li>
                <li>Adresse email professionnelle</li>
                <li>Numéro de téléphone</li>
                <li>Nom de l'entreprise</li>
                <li>Informations relatives à votre projet et vos besoins</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Finalités du traitement
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vos données personnelles sont collectées pour les finalités suivantes :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Répondre à vos demandes de contact et de devis</li>
                <li>Gérer votre dossier client et nos relations commerciales</li>
                <li>Vous adresser des communications marketing (avec votre consentement)</li>
                <li>Améliorer nos services et notre site web</li>
                <li>Respecter nos obligations légales et réglementaires</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Base légale du traitement
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Les bases légales du traitement de vos données personnelles sont :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
                <li>L'exécution du contrat pour la gestion de votre dossier client</li>
                <li>Votre consentement pour les communications marketing</li>
                <li>Notre intérêt légitime pour l'amélioration de nos services</li>
                <li>Les obligations légales auxquelles nous sommes soumis</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Durée de conservation
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Vos données personnelles sont conservées pour la durée nécessaire aux finalités pour lesquelles elles sont collectées :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
                <li>Données clients : pendant la durée de la relation contractuelle et 3 ans après</li>
                <li>Données prospects : 3 ans à compter du dernier contact</li>
                <li>Données comptables : 10 ans conformément aux obligations légales</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Destinataires des données
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Vos données personnelles sont destinées aux services internes de CI GROUP. 
                Elles peuvent également être transmises à nos sous-traitants techniques 
                (hébergement, outils de gestion) qui agissent sur nos instructions.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Nous ne vendons ni ne louons vos données personnelles à des tiers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Vos droits
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Pour exercer vos droits, contactez-us à : <strong>contact@cigroup.fr</strong>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Notre site utilise des cookies techniques nécessaires au bon fonctionnement du site. 
                Aucun cookie de tracking ou publicitaire n'est utilisé sans votre consentement préalable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Sécurité
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour assurer 
                la sécurité de vos données personnelles et empêcher qu'elles ne soient déformées, 
                endommagées ou communiquées à des tiers non autorisés.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Réclamation
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Si vous estimez que le traitement de vos données personnelles constitue une violation de la réglementation, 
                vous avez le droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : 
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                  www.cnil.fr
                </a>
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-sm text-gray-600">
                <strong>Date de dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
