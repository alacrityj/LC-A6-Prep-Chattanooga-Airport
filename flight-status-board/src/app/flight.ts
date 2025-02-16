export class Flight {

    airline: string;
    flightNo: string;
    origin: string;
    departure: string;
    destination: string;
    arrival: string;
    gate: string;
    status: string;

    constructor(airline: string, flightNo: string, origin: string, departure: string, destination: string, arrival: string) {

      this.airline = airline;
      this.flightNo = flightNo;
      this.origin = origin;
      this.departure = departure;
      this.destination = destination;
      this.arrival = arrival;
      this. gate = "";
      this.status = "";
      
    }
isCancelled(): boolean {
    return this.status.toLowerCase() === "cancelled";
}

isDelayed(): boolean {
    return this.status.toLowerCase() === "delayed";
}

getImage(): string {
    let basePath = "/assets/images/";
    if (this.airline === "American") {
        return basePath + "aa-logo.png";
    } else if (this.airline === "Delta") {
        return basePath + "delta-logo.png";
    } else if (this.airline === "United") {
        return basePath + "united-logo.png";
    }
    return "";
}
}
