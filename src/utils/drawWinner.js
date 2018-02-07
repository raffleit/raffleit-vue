function getWeighedList (participants) {
  return participants
    .map(participant => Array(participant.numberOfTickets).fill(participant))
    .reduce((a, b) => a.concat(b))
}

function drawWinner (participants) {
  const weighedList = getWeighedList(participants)
  const randomNum = Math.floor(Math.random() * weighedList.length)
  return weighedList[randomNum]
}

export default drawWinner
