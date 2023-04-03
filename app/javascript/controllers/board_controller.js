import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="board"
export default class extends Controller {

  /** Name should match the controller name */
  static outlets = [ "store" ]

  flip(event) {
    const tile = event.target
    const tileIndex = Number(tile.dataset.tileIndex)
    const tileIsOpen = String(tile.dataset.tileIsOpen)

    if (tileIsOpen === "false") {
      this.#showContent(tile, tileIndex)
      this.storeOutlet.addToSuccessiveTilesCollection(tile)

      if (this.storeOutlet.successiveTilesCollectionCount === 2) {
        setTimeout(() => {
          this.storeOutlet.successiveTilesCollection.forEach(tile => {
            this.#hideContent(tile)
          })
          this.storeOutlet.resetSuccessiveTilesCollection()
        }, 1000)
      }
    }
  }

  #showContent(tile, tileIndex) {
    tile.dataset.tileIsOpen = "true"
    tile.textContent = tileIndex
    tile.style.backgroundColor = "red"
    tile.classList.remove("bg-black")
  }

  #hideContent(tile) {
    tile.textContent = null
    tile.style.backgroundColor = null
    tile.classList.add("bg-black")
    tile.dataset.tileIsOpen = "false"
  }
}
