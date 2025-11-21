Analysiere dieses Bild. Erkenne Lebensmittel.
Gib nur Zutaten zurück, die in meinen Ingredients-Listen existieren.
Gib die Daten als Json zurück. Die Parameter amount und unit bleiben leer - setze nur die id.
Wenn eine Zutat nicht in der Liste vorhanden ist, erzeuge das entsprechende JSON Output dazu.

#####
Output-Format:
{
  "items": [
    {
      "id": "BUTTER",
      "amount": "",
      "unit": ""
    },
    {
      "id": "MILCH",
      "amount": "",
      "unit": ""
    }
  ]
}

#####
Ingredients-Liste Backen:
{
  "items": [
    {
      "id": "DINKEL_T630",
      "name": "Dinkelmehl Typ 630",
      "category": "Backen",
      "defaultUnit": "g",
      "locationId": "PANTRY"
    },
    {
      "id": "DINKEL_T1050",
      "name": "Dinkelmehl Typ 1050",
      "category": "Backen",
      "defaultUnit": "g",
      "locationId": "PANTRY"
    },
    {
      "id": "ROGGEN_T1150",
      "name": "Roggenmehl Typ 1150",
      "category": "Backen",
      "defaultUnit": "g",
      "locationId": "PANTRY"
    },
    {
      "id": "BACKPULVER",
      "name": "Backpulver",
      "category": "Backen",
      "defaultUnit": "Pck.",
      "locationId": "PANTRY"
    }
  ]
}

Ingredients-Liste Getränke:
{
  "items": [
    {
      "id": "MALZBIER",
      "name": "Malzbier",
      "category": "Getränke",
      "defaultUnit": "Fl.",
      "locationId": "PANTRY"
    },
    {
      "id": "MILCH",
      "name": "Milch",
      "category": "Getränke",
      "defaultUnit": "l",
      "locationId": "FRIDGE"
    }
  ]
}

Ingredients-Liste Milchprodukte:
{
  "items": [
    {
      "id": "GERIEBENER_KAESE",
      "name": "geriebener Käse",
      "category": "Milchprodukte",
      "defaultUnit": "g",
      "locationId": "FRIDGE"
    }
  ]
}

Ingredients-Liste Standards:
{
  "items": [
    {
      "id": "SALZ",
      "name": "Salz",
      "category": "Default",
      "defaultUnit": "g",
      "locationId": "PANTRY"
    },
    {
      "id": "ZUCKER",
      "name": "Zucker",
      "category": "Default",
      "defaultUnit": "g",
      "locationId": "PANTRY"
    },
    {
      "id": "WASSER",
      "name": "Wasser",
      "category": "Default",
      "defaultUnit": "g",
      "locationId": "UNKNOW"
    },
    {
      "id": "EI",
      "name": "Ei",
      "category": "Default",
      "defaultUnit": "Stk.",
      "locationId": "FRIDGE"
    },
    {
      "id": "OEL",
      "name": "Öl",
      "category": "Default",
      "defaultUnit": "nB",
      "locationId": "PANTRY"
    },
    {
      "id": "BUTTER",
      "name": "Butter",
      "category": "Default",
      "defaultUnit": "Stk.",
      "locationId": "FRIDGE"
    },
    {
      "id": "SAUERTEIG",
      "name": "Sauerteig",
      "category": "Default",
      "defaultUnit": "g",
      "locationId": "UNKNOW"
    },
    {
      "id": "SEMMELBROESEL",
      "name": "Semmelbrösel",
      "category": "Default",
      "defaultUnit": "g",
      "locationId": "PANTRY"
    },
    {
      "id": "SENF",
      "name": "Senf",
      "category": "Default",
      "defaultUnit": "EL",
      "locationId": "PANTRY"
    },
    {
      "id": "KETCHUP",
      "name": "Ketchup",
      "category": "Default",
      "defaultUnit": "EL",
      "locationId": "PANTRY"
    }
  ]
}

Ingredients-Liste Fisch:
{
  "items": [
    {
      "id": "FISCHSTÄBCHEN",
      "name": "Fischstäbchen",
      "category": "Fisch",
      "defaultUnit": "Pck.",
      "locationId": "FREEZER"
    }
  ]
}

Ingredients-Liste Getreide:
{
  "items": [
    {
      "id": "BULGUR",
      "name": "Bulgur",
      "category": "Getreide",
      "defaultUnit": "g",
      "locationId": "PANTRY"
    },
    {
      "id": "COUSCOUS",
      "name": "Couscous",
      "category": "Getreide",
      "defaultUnit": "g",
      "locationId": "PANTRY"
    },
    {
      "id": "REIS",
      "name": "Reis",
      "category": "Getreide",
      "defaultUnit": "Pck.",
      "locationId": "PANTRY"
    },
    {
      "id": "NUDELN",
      "name": "Nudeln",
      "category": "Getreide",
      "defaultUnit": "Pck.",
      "locationId": "PANTRY"
    },
    {
      "id": "HAFERFLOCKEN",
      "name": "Haferflocken zart",
      "category": "Getreide",
      "defaultUnit": "Pck.",
      "locationId": "PANTRY"
    },
    {
      "id": "HAFERFLOCKEN_KERNIG",
      "name": "Haferflocken kernig",
      "category": "Getreide",
      "defaultUnit": "Pck.",
      "locationId": "PANTRY"
    }
  ]
}

Ingredients-Liste Kräuter:
{
  "items": [
    {
      "id": "PETERSILIE",
      "name": "Petersilie",
      "category": "Kräuter",
      "defaultUnit": "nB",
      "locationId": "GARDEN"
    },
    {
      "id": "THYMIAN",
      "name": "Thymian",
      "category": "Kräuter",
      "defaultUnit": "nB",
      "locationId": "PANTRY"
    },
    {
      "id": "OREGANO",
      "name": "Oregano",
      "category": "Kräuter",
      "defaultUnit": "nB",
      "locationId": "PANTRY"
    }
  ]
}

Ingredients-Liste Gewürze:
{
  "items": [
    {
      "id": "PFEFFER",
      "name": "Pfeffer",
      "category": "Gewürze",
      "defaultUnit": "nB",
      "locationId": "PANTRY"
    },
    {
      "id": "KURKUMA",
      "name": "Kurkuma",
      "category": "Gewürze",
      "defaultUnit": "nB",
      "locationId": "PANTRY"
    },
    {
      "id": "KREUZKUEMMEL",
      "name": "Kreuzkümmel",
      "category": "Gewürze",
      "defaultUnit": "nB",
      "locationId": "PANTRY"
    },
    {
      "id": "PAPRIKA_EDELSUESS",
      "name": "Paprikapulver edelsüß",
      "category": "Gewürze",
      "defaultUnit": "nB",
      "locationId": "PANTRY"
    },
    {
      "id": "MUSKAT",
      "name": "Muskat",
      "category": "Gewürze",
      "defaultUnit": "nB",
      "locationId": "PANTRY"
    }
  ]
}

Ingredients-Liste Gemüse:
{
  "items": [
    {
      "id": "TK_GEMUESE",
      "name": "Tiefkühlgemüse",
      "category": "Gemüse",
      "defaultUnit": "Pck.",
      "locationId": "FREEZER"
    },
    {
      "id": "FRUEHLINGSZWIEBEL",
      "name": "Frühlingszwiebel",
      "category": "Gemüse",
      "defaultUnit": "Stk.",
      "locationId": "FRIDGE"
    },
    {
      "id": "TOMATEN_STUECKIG",
      "name": "Tomaten stückig",
      "category": "Gemüse",
      "defaultUnit": "Dose",
      "locationId": "PANTRY"
    },
    {
      "id": "GEMUESEBRUEHE",
      "name": "Gemüsebrühe",
      "category": "Gemüse",
      "defaultUnit": "ml",
      "locationId": "FRIDGE"
    },
    {
      "id": "KNOBLAUCH",
      "name": "Knoblauch",
      "category": "Gemüse",
      "defaultUnit": "Stk.",
      "locationId": "PANTRY"
    },
    {
      "id": "CHILISCHOTE",
      "name": "Chilischote",
      "category": "Gemüse",
      "defaultUnit": "Stk.",
      "locationId": "PANTRY"
    },
    {
      "id": "MAIS",
      "name": "Mais",
      "category": "Gemüse",
      "defaultUnit": "Dose",
      "locationId": "PANTRY"
    },
    {
      "id": "KIDNEYBOHNEN",
      "name": "Kidneybohnen",
      "category": "Gemüse",
      "defaultUnit": "Dose",
      "locationId": "PANTRY"
    },
    {
      "id": "KARTOFFELN",
      "name": "Kartoffeln",
      "category": "Gemüse",
      "defaultUnit": "kg",
      "locationId": "PANTRY"
    },
    {
      "id": "ROTKOHL",
      "name": "Rotkohl",
      "category": "Gemüse",
      "defaultUnit": "Glas",
      "locationId": "PANTRY"
    },
    {
      "id": "ZWIEBEL",
      "name": "Zwiebel",
      "category": "Gemüse",
      "defaultUnit": "Stk.",
      "locationId": "PANTRY"
    }
  ]
}
