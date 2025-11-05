
import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  Zap,
  Clock,
  Linkedin,
  User,
  Building2,
  MessageSquare,
  UsersIcon,
  Video // Added Video icon
} from "lucide-react";
import TimeSlotPicker from "../components/TimeSlotPicker"; // New import
import { format, parseISO } from "date-fns"; // New import
import { fr } from "date-fns/locale"; // New import
import SEO, { getOrganizationSchema } from "../components/SEO";
import { usePageTracking, useFormTracking, useButtonTracking } from "../components/Analytics";

export default function Contact() {
  usePageTracking('Contact');
  const trackForm = useFormTracking();
  const trackButton = useButtonTracking();

  const urlParams = new URLSearchParams(window.location.search);
  const preselectedPack = urlParams.get('pack');

  const [formData, setFormData] = useState({
    company_name: "",
    contact_name: "",
    email: "",
    phone: "",
    pack_selected: preselectedPack || "",
    accelerated_delivery: false,
    message: "",
    selected_timeslot_id: "", // New field
    meeting_date: "",         // New field
    zoom_link: ""             // New field
  });

  const [success, setSuccess] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null); // New state

  const createRequestMutation = useMutation({
    mutationFn: async (data) => {
      const request = await base44.entities.ConsultationRequest.create(data);

      // Update timeslot to mark it as booked
      if (data.selected_timeslot_id) {
        await base44.entities.TimeSlot.update(data.selected_timeslot_id, {
          is_available: false,
          booked_by_email: data.email,
          booked_by_name: data.contact_name,
          consultation_request_id: request.id
        });
      }

      // Track form submission
      trackForm('Contact Form', {
        pack: data.pack_selected,
        accelerated: data.accelerated_delivery,
        has_timeslot: !!data.selected_timeslot_id
      });

      return request;
    },
    onSuccess: () => {
      setSuccess(true);
      setFormData({
        company_name: "",
        contact_name: "",
        email: "",
        phone: "",
        pack_selected: "",
        accelerated_delivery: false,
        message: "",
        selected_timeslot_id: "",
        meeting_date: "",
        zoom_link: ""
      });
      setSelectedTimeSlot(null); // Reset selected timeslot on success
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createRequestMutation.mutate({
      ...formData,
      status: "nouveau"
    });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSelectTimeSlot = (slot) => {
    setSelectedTimeSlot(slot);
    setFormData(prev => ({
      ...prev,
      selected_timeslot_id: slot.id,
      meeting_date: `${slot.date} ${slot.start_time}`,
      zoom_link: slot.zoom_link || ""
    }));
    
    // Track timeslot selection
    trackButton('Timeslot Selected', { 
      date: slot.date, 
      time: slot.start_time 
    });
  };

  const getButtonText = () => {
    if (createRequestMutation.isPending) {
      return "Envoi en cours...";
    }
    if (formData.pack_selected) {
      return "Envoyer ma demande";
    }
    return "Sélectionnez un pack pour continuer";
  };

  const packPrices = {
    bronze: { standard: "2 500€", accelerated: "3 250€" },
    silver: { standard: "5 500€", accelerated: "7 150€" },
    gold: { standard: "12 000€", accelerated: "15 600€" },
    sur_mesure: { standard: "Sur devis", accelerated: "Sur devis" }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center py-16 px-4">
        <Card className="max-w-2xl w-full border-none shadow-2xl">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Demande envoyée avec succès !
            </h2>
            {selectedTimeSlot && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center gap-2 text-blue-900 mb-2">
                  <Video className="w-5 h-5" />
                  <p className="font-semibold">Rendez-vous Zoom confirmé</p>
                </div>
                <p className="text-blue-800">
                  Le {format(parseISO(selectedTimeSlot.date), "EEEE d MMMM yyyy", { locale: fr })} à {selectedTimeSlot.start_time}
                </p>
                {selectedTimeSlot.zoom_link && (
                  <p className="text-blue-800 mt-2">
                    <a href={selectedTimeSlot.zoom_link} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                      Rejoindre le meeting Zoom
                    </a>
                  </p>
                )}
              </div>
            )}
            <p className="text-lg text-gray-600 mb-8">
              Notre équipe va étudier votre demande et vous recontacter sous 24h ouvrées
              pour échanger sur vos besoins et vous proposer une solution adaptée.
              {selectedTimeSlot && " Vous recevrez également un email de confirmation avec le lien Zoom."}
            </p>
            <Button
              onClick={() => setSuccess(false)}
              className="bg-gradient-to-r from-blue-600 to-purple-600"
              size="lg"
            >
              Envoyer une nouvelle demande
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <SEO
        title="Contact CI GROUP - Demande de Devis Gratuit | Conseil Stratégique Nice"
        description="Contactez CI GROUP pour un audit gratuit et un devis personnalisé. Réponse garantie sous 24h. Expertise en stratégie marketing et transformation digitale."
        keywords="contact consultant stratégie, devis consulting, audit gratuit PME, conseil marketing Nice, transformation digitale devis"
        canonicalUrl={window.location.href}
        jsonLd={getOrganizationSchema()}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-900 border-blue-200">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Parlons de votre projet
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transformons vos ambitions en résultats
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Remplissez le formulaire ci-dessous. Notre équipe vous recontactera
            sous 24h pour un premier échange sans engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-2xl">
              <CardHeader className="border-b bg-gradient-to-r from-blue-50 to-purple-50 pb-6">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                  Demande de consultation
                </CardTitle>
                <p className="text-gray-600 text-sm mt-2">
                  * Tous les champs marqués d'un astérisque sont obligatoires
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Step 1: Company Info */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        1
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Votre entreprise</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 pl-10">
                      <div>
                        <Label htmlFor="company_name" className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-gray-500" />
                          Nom de l'entreprise *
                        </Label>
                        <Input
                          id="company_name"
                          value={formData.company_name}
                          onChange={(e) => handleChange('company_name', e.target.value)}
                          placeholder="Votre entreprise"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact_name" className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-500" />
                          Nom du contact *
                        </Label>
                        <Input
                          id="contact_name"
                          value={formData.contact_name}
                          onChange={(e) => handleChange('contact_name', e.target.value)}
                          placeholder="Prénom Nom"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-500" />
                          Email professionnel *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="contact@entreprise.fr"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gray-500" />
                          Téléphone
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="+33 6 XX XX XX XX"
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Pack Selection */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        2
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Votre pack</h3>
                    </div>
                    <div className="pl-10 space-y-4">
                      <div>
                        <Label htmlFor="pack_selected">Pack souhaité *</Label>
                        <Select
                          value={formData.pack_selected}
                          onValueChange={(value) => handleChange('pack_selected', value)}
                          required
                        >
                          <SelectTrigger className="mt-2 h-12">
                            <SelectValue placeholder="Sélectionnez le pack qui vous intéresse" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bronze">
                              <div className="flex items-center justify-between w-full py-2">
                                <span className="font-medium">Pack Bronze - Essentiel</span>
                                <span className="text-gray-500 ml-4">2 500€</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="silver">
                              <div className="flex items-center justify-between w-full py-2">
                                <span className="font-medium">Pack Silver - Performance</span>
                                <span className="text-gray-500 ml-4">5 500€</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="gold">
                              <div className="flex items-center justify-between w-full py-2">
                                <span className="font-medium">Pack Gold - Excellence</span>
                                <span className="text-gray-500 ml-4">12 000€</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="sur_mesure">
                              <div className="flex items-center justify-between w-full py-2">
                                <span className="font-medium">Solution sur mesure</span>
                                <span className="text-gray-500 ml-4">Sur devis</span>
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {formData.pack_selected && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <Checkbox
                              id="accelerated_delivery"
                              checked={formData.accelerated_delivery}
                              onCheckedChange={(checked) => handleChange('accelerated_delivery', checked)}
                            />
                            <div className="flex-1">
                              <Label htmlFor="accelerated_delivery" className="flex items-center gap-2 cursor-pointer font-medium">
                                <Zap className="w-4 h-4 text-amber-600" />
                                <span>Option délai accéléré</span>
                                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-300">
                                  +30%
                                </Badge>
                              </Label>
                              <p className="text-sm text-gray-600 mt-1">
                                Livraison 2x plus rapide : {
                                  formData.pack_selected === 'sur_mesure'
                                    ? 'À définir selon votre projet'
                                    : packPrices[formData.pack_selected]?.accelerated
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {formData.pack_selected && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-900">Prix estimé</p>
                              <p className="text-sm text-gray-600 mt-1">HT - Devis détaillé sur demande</p>
                            </div>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-green-700">
                                {formData.accelerated_delivery
                                  ? packPrices[formData.pack_selected]?.accelerated
                                  : packPrices[formData.pack_selected]?.standard}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Step 3: Message */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        3
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Vos besoins</h3>
                    </div>
                    <div className="pl-10">
                      <Label htmlFor="message">Parlez-nous de votre projet</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Décrivez vos enjeux, vos objectifs, vos attentes... Plus vous serez précis, mieux nous pourrons vous accompagner."
                        rows={6}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  {/* Step 4: Appointment Selection */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        4
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Choisir un créneau (optionnel)</h3>
                    </div>
                    <div className="pl-10">
                      <p className="text-sm text-gray-600 mb-4">
                        Sélectionnez un créneau pour un premier échange Zoom de 30 minutes avec notre équipe
                      </p>

                      {selectedTimeSlot && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <Video className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-gray-900">Rendez-vous sélectionné</p>
                              <p className="text-sm text-gray-600">
                                Le {format(parseISO(selectedTimeSlot.date), "EEEE d MMMM yyyy", { locale: fr })} à {selectedTimeSlot.start_time}
                              </p>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                setSelectedTimeSlot(null);
                                setFormData(prev => ({
                                  ...prev,
                                  selected_timeslot_id: "",
                                  meeting_date: "",
                                  zoom_link: ""
                                }));
                              }}
                            >
                              Changer
                            </Button>
                          </div>
                        </div>
                      )}

                      <TimeSlotPicker
                        onSelectTimeSlot={handleSelectTimeSlot}
                        selectedTimeSlotId={formData.selected_timeslot_id}
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg h-14 text-lg"
                    disabled={createRequestMutation.isPending || !formData.pack_selected}
                  >
                    {createRequestMutation.isPending ? (
                      <>
                        <Clock className="w-5 h-5 mr-2 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {getButtonText()}
                      </>
                    )}
                  </Button>

                  {createRequestMutation.isError && (
                    <Alert variant="destructive">
                      <AlertDescription>
                        Une erreur s'est produite. Veuillez réessayer.
                      </AlertDescription>
                    </Alert>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  Nos coordonnées
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:contact@cigroup.fr" className="text-blue-600 hover:underline">
                        contact@cigroup.fr
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Téléphone</p>
                      <a href="tel:+33100000000" className="text-blue-600 hover:underline">
                        +33 (0)1 XX XX XX XX
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Adresse</p>
                      <p className="text-gray-600">4 rue Cluvier, Nice, France</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team LinkedIn */}
            <Card className="border-none shadow-lg bg-gradient-to-br from-blue-900 to-blue-800 text-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <UsersIcon className="w-5 h-5" />
                  Rencontrez notre équipe
                </h3>
                <p className="text-blue-100 mb-6 text-sm">
                  Découvrez les experts qui vous accompagneront dans votre transformation
                </p>
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/company/cigroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Fondateur & CEO</p>
                      <p className="text-sm text-blue-200">Voir le profil LinkedIn</p>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/cigroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                  >
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Directeur Conseil</p>
                      <p className="text-sm text-blue-200">Voir le profil LinkedIn</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="border-none shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Réponse garantie</h3>
                    <p className="text-sm text-green-700">sous 24h ouvrées</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Notre équipe s'engage à vous répondre rapidement pour analyser vos besoins
                  et vous proposer la meilleure solution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Venez nous rencontrer
          </h2>
          <Card className="border-none shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.8449!2d7.2619!3d43.7034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd01b1c3b1111%3A0x1111111111111111!2s4%20Rue%20Cluvier%2C%2006000%20Nice!5e0!3m2!1sfr!2sfr!4v1234567890123"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
