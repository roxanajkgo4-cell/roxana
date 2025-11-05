{
  "name": "TimeSlot",
  "type": "object",
  "properties": {
    "date": {
      "type": "string",
      "format": "date",
      "description": "Date du créneau"
    },
    "start_time": {
      "type": "string",
      "description": "Heure de début (format HH:mm)"
    },
    "end_time": {
      "type": "string",
      "description": "Heure de fin (format HH:mm)"
    },
    "is_available": {
      "type": "boolean",
      "default": true,
      "description": "Disponibilité du créneau"
    },
    "zoom_link": {
      "type": "string",
      "description": "Lien Zoom pour le rendez-vous"
    },
    "booked_by_email": {
      "type": "string",
      "description": "Email du client qui a réservé"
    },
    "booked_by_name": {
      "type": "string",
      "description": "Nom du client qui a réservé"
    },
    "consultation_request_id": {
      "type": "string",
      "description": "ID de la demande de consultation associée"
    }
  },
  "required": [
    "date",
    "start_time",
    "end_time"
  ]
}