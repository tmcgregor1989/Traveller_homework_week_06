const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map((journey) => {
    return journey.startLocation;
  })
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map((journey) => {
    return journey.endLocation;
  })
  return endLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let filteredJourney = this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
  return filteredJourney;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  let filteredJourney = this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  })
  return filteredJourney;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let totalDistance = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance;
  }, 0);
  return totalDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const uniqueTransport = this.journeys.map((journey) => {
    return journey.transport 
  })
  return uniqueTransport;

};


module.exports = Traveller;
