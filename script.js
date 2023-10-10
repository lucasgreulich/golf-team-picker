const player = [
    {name:'Lucas' , wins: 4},
    {name:'Matt' , wins: 4},
    {name: 'Nick', wins: 2},
    {name:'Brett' , wins: 4},
    {name: 'Dylan' , wins: 4},
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