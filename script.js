const player = [
    {name:'Lucas' , wins: 0},
    {name:'Matt' , wins: 0},
    {name: 'Nick', wins: 0},
    {name:'Brett' , wins: 0},
    {name: 'Dylan' , wins: 0},
    {name: 'Lou', wins: 0}
  ];
  
  player.sort((a,b)=> b.wins - a.wins);
  
  const teams = [];
  
  while (player.length >= 2){
    const playerWithMostWins = player.shift();
    const playerWithLeastWins = player.pop();
    const team = [playerWithMostWins, playerWithLeastWins];
    teams.push(team)
  };
  


  teams.forEach((team, index) => {
    console.log(`Team ${index + 1}:`);
    team.forEach(player => {
      console.log(`- ${player.name} (Wins: ${player.wins})`);
    });
  });