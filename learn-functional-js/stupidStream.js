const stupidNumberStream = {
  each: callback => {
    setTimeout(() => callback(1), 1000)
    setTimeout(() => callback(2), 2000)
    setTimeout(() => callback(3), 3000)
  }
}

stupidNumberStream.each(console.log)
