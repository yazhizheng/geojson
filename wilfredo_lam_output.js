//the result of converting google my maps kml (one spot) into geojson, using https://mapbox.github.io/togeojson/


{
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -82.3520617,
                    23.1411339,
                    0
                ]
            },
            "properties": {
                "name": "Centro Wilfredo Lam",
                "styleUrl": "#icon-1899-0288D1",
                "styleHash": "-21fe3a8d",
                "styleMapHash": {
                    "normal": "#icon-1899-0288D1-normal",
                    "highlight": "#icon-1899-0288D1-highlight"
                },
                "icon": "https://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png",
                "description": "#museum #surrealism"
            }
        }
    ]
}




//Mapbox Note: If you have a large GeoJSON file, you may want to load it as an external source rather than adding it inline. You can do so by linking to its URL, if it's hosted remotely, or by using an AJAX call to load locally or from a third-party API.
