{
  "name": "Analytics",
  "type": "object",
  "properties": {
    "event_type": {
      "type": "string",
      "enum": [
        "page_view",
        "button_click",
        "form_submission",
        "service_view",
        "pack_selection",
        "timeslot_selection"
      ],
      "description": "Type d'événement"
    },
    "page": {
      "type": "string",
      "description": "Page où l'événement s'est produit"
    },
    "service_name": {
      "type": "string",
      "description": "Nom du service consulté"
    },
    "pack_name": {
      "type": "string",
      "description": "Nom du pack sélectionné"
    },
    "button_label": {
      "type": "string",
      "description": "Libellé du bouton cliqué"
    },
    "user_email": {
      "type": "string",
      "description": "Email de l'utilisateur (si disponible)"
    },
    "session_id": {
      "type": "string",
      "description": "ID de session unique"
    },
    "referrer": {
      "type": "string",
      "description": "Source de trafic"
    },
    "device_type": {
      "type": "string",
      "enum": [
        "mobile",
        "tablet",
        "desktop"
      ],
      "description": "Type d'appareil"
    },
    "metadata": {
      "type": "object",
      "description": "Données supplémentaires en JSON"
    }
  },
  "required": [
    "event_type",
    "page"
  ]
}