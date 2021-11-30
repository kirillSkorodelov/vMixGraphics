var selectTemplate = {
    "schema": {
      "template": {
        "type": "string",
        "title": "Select your caption type",
        "enum": ["Speaker", "Attribution", "Place","Header"]
      }
    },
    "form": [
      {
        "key": "template",
        "id": "templateSelect",
        "htmlClass": "templateSelect",
      }
    ]
  }