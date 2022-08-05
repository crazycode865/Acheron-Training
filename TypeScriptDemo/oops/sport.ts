abstract class Sports {
  constructor(
    public name: string,
    public noOfPlayers: number,
    public tournaments: string
  ) {
    this.name = name;
    this.noOfPlayers = noOfPlayers;
    this.tournaments = tournaments;
  }
  printDetails = () => {
    console.log(`Name: ${this.name}`);
    console.log(`Number of players: ${this.noOfPlayers}`);
    console.log(`Tournaments: ${this.tournaments}`);
  };
  abstract groundType(): void;
}
class Cricket extends Sports {
  constructor(
    public name: string,
    public noOfPlayers: number,
    public coach: string,
    public tournaments: string,
    public origin?: string
  ) {
    super(name, noOfPlayers, tournaments);
  }
  groundType(): void {
    console.log(`Cricket Ground: Oval`);
  }
}
class Football extends Sports {
  constructor(
    public name: string,
    public noOfPlayers: number,
    public tournaments: string,
    public sponser: string,
    public matchName: string,
    public origin?: string
  ) {
    super(name, noOfPlayers, tournaments);
  }
  groundType(): void {
    console.log(`Football Ground: Rectangular`);
  }
}

var cricket: Cricket = new Cricket("Cricket", 11, "Garry Castern", "IPL");
cricket.printDetails();
cricket.groundType();
var football: Football = new Football(
  "Football",
  11,
  "FIFA",
  "Byjus",
  "England"
);
football.printDetails();
football.groundType();
