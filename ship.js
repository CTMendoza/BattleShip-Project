class Ship {
  constructor(length) {
    this.length = length
  }

   hit(hits) {
    hits ++
    return hits
  }

  isSunk() {
    if(length === this.hit()) {
      return true
    }
    else return false
  }
}

export {Ship}
