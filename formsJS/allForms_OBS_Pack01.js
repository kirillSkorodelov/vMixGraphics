var attributionForm_OBS_Pack01 =
{
  "schema": {
    "attributionText": {
      "type": "array",
      "items":{
        "type": "string",
        "title": "Your text for attribution:",
        "name": "input1"
        }
    }
  },
  "form": [
    {
      "type": "tabarray",
      "htmlClass": "AttributionForm",
      "id": "AttributionForm0",  
 
      // "draggable": "true",
      "items": [{
        "type" : "section",
        "title": "Attribution {{idx}}",
        "items":[
          {
          "htmlMetaData":{
            "title": "supportive text",
            // "style":"border: 1px solid blue",
            "data-title":"Something"
          },
          "key": "attributionText[]",
          "title": "Your text",
          "fieldHtmlClass": "attributionLineInput", //adds class to the input field itself
          "placeholder": "Type in your text for an attribution line",
          }
        
        ]
      }]
    },
    
  ]  
}


var speakerForm_OBS_Pack01 = 
{
  "schema": {
    "speakerArr": {
      "type": 'array',
      "title": 'Name and position',
      "items": {
        "type": 'object',
        "title": 'Speaker\'s details',
        "properties": {
          "name": {
            "type": 'string',
            "title": 'Name'
          },
          "position": {
            "type": 'string',
            "title": 'Position'
          }
        }
      }
    }
  },
  "form": [
    {
      "type": 'tabarray',
      "htmlClass": "SpeakerForm",
      "items": [
        {              
          "type": 'section',
          "title": 'Speaker {{idx}}',
          "items": [
            {
              "htmlClass": "SpeakerForm",
              "id": "SpeakerForm0",
              "key": 'speakerArr[].name',
              "title": 'Name',
              "placeholder": "Type a speaker's name",
            },
            {
              "htmlClass": "SpeakerForm",
              "id": "SpeakerForm1",
              "key": 'speakerArr[].position',
              "title": 'Position',
              "placeholder": "Type a speaker's designation",
            }
          ]
        }
      ]
    }
  ]
}

var placeForm_OBS_Pack01 = 
{
  "schema": {
    "placeArr": {
      "type": 'array',
      "title": 'Place',
      "items": {
        "type": 'object',
        "title": 'Place details',
        "properties": {
          "country": {
            "type": 'string',
            "title": 'Country'
          },
          "region": {
            "type": 'string',
            "title": 'Region or city'
          }
        }
      }
    }
  },
  "form": [
    {
      "type": 'tabarray',
      "htmlClass": "PlaceForm",
      "items": [
        {              
          "type": 'section',
          "title": 'Place {{idx}}',
          "items": [
            {
              "htmlClass": "PlaceForm",
              "id": "placeForm0",
              "key": 'placeArr[].country',
              "title": 'Country',
              "placeholder": "Type a country name",
            },
            {
              "htmlClass": "PlaceForm",
              "id": "PlaceForm1",
              "key": 'placeArr[].region',
              "title": 'Region or city',
              "placeholder": "Type a city or a region name",
            }
          ]
        }
      ]
    }
  ]
}

var headerForm_OBS_Pack01 = 
{
  "schema": {
    "headerArr": {
      "type": 'array',
      "title": 'Narration',
      "items": {
        "type": 'object',
        "title": 'Narration',
        "properties": {
          "headerHeadline": {
            "type": 'string',
            "title": 'Title'
          },
          "headerDetails": {
            "type": 'string',
            "title": 'Details of what happened'
          }
        }
      }
    }
  },
  "form": [
    {
      "type": 'tabarray',
      "htmlClass": "HeaderForm",
      "items": [
        {              
          "type": 'section',
          "title": 'Header {{idx}}',
          "items": [
            {
              "htmlClass": "HeaderForm",
              "id": "HeaderForm0",
              "key": 'headerArr[].headerHeadline',
              "title": 'Headline',
              "placeholder": "Short summary of what happened",
            },
            {
              "htmlClass": "HeaderForm",
              "id": "HeaderForm1",
              "key": 'headerArr[].headerDetails',
              "title": 'Details of what happened',
              "type": "textarea",
              "height": "135px",
              
              "placeholder": "More details",
            }
          ]
        }
      ]
    }
  ]
}
