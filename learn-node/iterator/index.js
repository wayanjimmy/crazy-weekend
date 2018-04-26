const randomNumber = require('random-number')

const randomItem = array => {
  const randomIndex = randomNumber({
    min: 0,
    max: array.length - 1,
    integer: true,
  })
  return array[randomIndex]
}

const makeDragon = () => {
  const dragonSizes = ['big', 'small', 'tiny']
  const dragonAbilities = ['fire', 'ice', 'lightning']
  return (
    randomItem(dragonSizes) + ' ' + randomItem(dragonAbilities) + ' ' + 'dragon'
  )
}

const dragonArmy = {
  [Symbol.iterator]: () => {
    return {
      next: () => {
        const enoughDragonsSpawned = Math.random() > 0.75
        if (!enoughDragonsSpawned)
          return {
            value: makeDragon(),
            done: false,
          }
        return { done: true }
      },
    }
  },
}

for (const dragon of dragonArmy) {
  console.log(dragon)
}
