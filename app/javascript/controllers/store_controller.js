import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="store"
export default class extends Controller {
  connect() {
    this.successiveTilesCollection = [];
    /** matchingIndex is the index of the tile with same contents */
    this.lastClickedTile = { matchingIndex: null };
  }

  addToSuccessiveTilesCollection(tile) {
    this.successiveTilesCollection.push(tile);
  }

  resetSuccessiveTilesCollection() {
    this.successiveTilesCollection = [];
  }

  get successiveTilesCollectionCount() {
    return this.successiveTilesCollection.length;
  }

  updatePreviouslyClickedTile(currentTileIndex, indexes) {
    this.lastClickedTile = {
      matchingIndex: indexes.filter((i) => i != currentTileIndex)[0],
    };
  }

  resetPreviousTile() {
    this.lastClickedTile = { matchingIndex: null };
  }

  get tile() {
    return this.lastClickedTile;
  }
}
