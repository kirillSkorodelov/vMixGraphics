//const bc = new BroadcastChannel('test'); //sends to indexOBS.html

var buttons =
{
  "schema": {

  },
  "form": [
    
    {
      "type": "actions",
      "items": [
        {
          "id": "animInBtn",
          "htmlClass": "animInBtn",
          "type": "button",
          "title": "Animate IN",
        },
        {
          "id": "animOutBtn",
          "htmlClass": "animOutBtn",
          "type": "button",
          "title": "Animate OUT"
        }
      ]
    }
  ],

}

var previewButton = 
{
  "schema": {

  },
  "form":
  [
    {
      "type": "actions",    
      "id": "previewBtn",
      "htmlClass": "previewBtn",
      "type": "button",
      "title": "Preview",
    },
    {
      "type": "help",
      "helpvalue": "for preview right click \"GFX_Preview\" layer and select \"Interact\" in Sources",
      "fieldHtmlClass": "prevHelp",
      
    },
    
  ],

}


var autoAnimateOut = 
{
  "schema": {
    "flag": {
      "type": "boolean",
      "title": "Auto Animate out"
    }
  },
  "form": [
    {
      "htmlClass": "autoAnimOut",
      "fieldHtmlClass": "autoAnimOutInput",
      "key": "flag",
      "inlinetitle": "Animate out in 4 secs",
      "notitle": true,
    }
  ]
}


