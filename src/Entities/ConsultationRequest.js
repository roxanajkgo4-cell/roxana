{
  "name": "ConsultationRequest",
  "type": "object",
  "properties": {
    "company_name": {
      "type": "string",
      "description": "Nom de l'entreprise"
    },
    "contact_name": {
      "type": "string",
      "description": "Nom du contact"
    },
    "email": {
      "type": "string",
      "format": "email",
      "description": "Email de contact"
    },
    "phone": {
      "type": "string",
      "description": "Téléphone"
    },
    "pack_selected": {
      "type": "string",
      "enum": [
        "bronze",
        "silver",
        "gold",
        "sur_mesure"
      ],
      "description": "Pack sélectionné"
    },
    "accelerated_delivery": {
      "type": "boolean",
      "default": false,
      "description": "Option délai accéléré"
    },
    "message": {
      "type": "string",
      "description": "Message et besoins spécifiques"
    },
    "selected_timeslot_id": {
      "type": "string",
      "description": "ID du créneau sélectionné"
    },
    "meeting_date": {
      "type": "string",
      "description": "Date et heure du rendez-vous"
    },
    "zoom_link": {
      "type": "string",
      "description": "Lien Zoom du rendez-vous"
    },
    "status": {
      "type": "string",
      "enum": [
        "nouveau",
        "en_cours",
        "traité",
        "archivé"
      ],
      "default": "nouveau",
      "description": "Statut de la demande"
    }
  },
  "required": [
    "company_name",
    "contact_name",
    "email",
    "pack_selected"
  ]
}