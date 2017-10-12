function produceDrivingRange(blockRange){
  return function(blockA, blockB) {
    let blocks = Math.abs(blockA.substr(0, blockA.length - 2) - blockB.substr(0, blockB.length - 2))
    if (blocks > blockRange) {
      return `${blocks - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - blocks}`
    }
  }
}

function produceTipCalculator(percent) {
  return function(bill) {
    return bill * percent
  }
}

function createDriver() {
  let driverId = 0
  return function (name) {
    this.id = ++driverId
    this.name = name
  }
}
