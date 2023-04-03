import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="store"
export default class extends Controller {
  connect() {
    this.successiveTilesCollection = []
  }

  addToSuccessiveTilesCollection(tile){
    this.successiveTilesCollection.push(tile)
  }

  resetSuccessiveTilesCollection() {
    this.successiveTilesCollection = []
  }

  get successiveTilesCollectionCount() {
    return this.successiveTilesCollection.length
  }
}
