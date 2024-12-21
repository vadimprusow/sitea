function createGraticule(step) {
  var graticule = {
    type: "FeatureCollection",
    features: []
  };

  // Create lines of longitude
  for (var lng = -180; lng <= 180; lng += step) {
    graticule.features.push({
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [[lng, -90], [lng, 90]]
      },
      properties: {
        type: "longitude"
      }
    });
  }

  // Create lines of latitude
  for (var lat = -90; lat <= 90; lat += step) {
    graticule.features.push({
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [[-180, lat], [180, lat]]
      },
      properties: {
        type: "latitude"
      }
    });
  }

  return graticule;
}

// Usage
var graticule = createGraticule(10); // Create graticule with 10 degree step
console.log(JSON.stringify(graticule));
