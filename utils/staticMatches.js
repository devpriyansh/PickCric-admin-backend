// backend/utils/staticMatches.js

const staticMatches = [
  {
    id: 101,
    league: "IPL 2026",
    matchDate: "2026-04-20",
    teamA: { name: "Mumbai Indians", shortName: "MI" },
    teamB: { name: "Chennai Super Kings", shortName: "CSK" },
    status: "Upcoming",
    squadA: [
      { id: "mi1", name: "Rohit Sharma", role: "BAT", credits: 10.0 },
      { id: "mi2", name: "Ishan Kishan", role: "WK", credits: 9.0 },
      { id: "mi3", name: "Suryakumar Yadav", role: "BAT", credits: 9.5 },
      { id: "mi4", name: "Hardik Pandya", role: "AR", credits: 9.5 },
      { id: "mi5", name: "Jasprit Bumrah", role: "BOWL", credits: 9.0 },
      { id: "mi6", name: "Bolt", role: "BOWL", credits: 9.0 },
      { id: "mi7", name: "Deepak", role: "BOWL", credits: 9.0 },
      { id: "mi8", name: "Shardul", role: "BOWL", credits: 9.0 },
      { id: "mi9", name: "Rahul", role: "BOWL", credits: 9.0 }
      // (Antigravity can fill the rest of the 11 to save space)
    ],
    squadB: [
      { id: "csk1", name: "Ruturaj Gaikwad", role: "BAT", credits: 9.5 },
      { id: "csk2", name: "MS Dhoni", role: "WK", credits: 8.5 },
      { id: "csk3", name: "Ravindra Jadeja", role: "AR", credits: 9.5 },
      { id: "csk4", name: "Shivam Dube", role: "AR", credits: 8.5 },
      { id: "csk5", name: "Matheesha Pathirana", role: "BOWL", credits: 9.0 },
      { id: "csk6", name: "Kamboj", role: "BOWL", credits: 9.0 },
      { id: "csk7", name: "Rituraj", role: "BOWL", credits: 9.0 },
      { id: "csk8", name: "Badoni", role: "BOWL", credits: 9.0 },
      { id: "csk9", name: "Theekshana", role: "BOWL", credits: 9.0 }
    ]
  },
  {
    id: 102,
    league: "IPL 2026",
    matchDate: "2026-04-15",
    teamA: { name: "Royal Challengers Bengaluru", shortName: "RCB" },
    teamB: { name: "Kolkata Knight Riders", shortName: "KKR" },
    status: "Upcoming",
    squadA: [
      { id: "rcb1", name: "Virat Kohli", role: "BAT", credits: 10.5 },
      { id: "rcb2", name: "Faf du Plessis", role: "BAT", credits: 9.5 },
      { id: "rcb3", name: "Glenn Maxwell", role: "AR", credits: 9.5 },
      { id: "rcb4", name: "Mohammed Siraj", role: "BOWL", credits: 8.5 }
    ],
    squadB: [
      { id: "kkr1", name: "Shreyas Iyer", role: "BAT", credits: 9.0 },
      { id: "kkr2", name: "Andre Russell", role: "AR", credits: 10.0 },
      { id: "kkr3", name: "Sunil Narine", role: "AR", credits: 9.5 },
      { id: "kkr4", name: "Mitchell Starc", role: "BOWL", credits: 9.0 }
    ]
  }
];

module.exports = staticMatches;