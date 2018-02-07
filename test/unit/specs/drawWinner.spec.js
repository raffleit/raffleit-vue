import drawWinner from '@/utils/drawWinner'
const participantWith10 = participant('1', 10)

it('draws the right winner if only one participant', () => {
  const winner = drawWinner([participantWith10])
  expect(winner.id).toEqual(participantWith10.id)
})

it('not drawing participant without tickets', () => {
  const winner = drawWinner([participant('2', 0)])
  expect(winner).toEqual(undefined)
})

it('draws the one with the biggest chance', () => {
  const winner = drawWinner([participant('2', 1), participant('3', 10000000)])
  expect(winner.id).toEqual('3')
})

function participant (id, numberOfTickets) {
  return {name: 'dummyName', numberOfTickets, id}
}
