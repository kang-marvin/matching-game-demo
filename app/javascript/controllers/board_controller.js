import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="board"
export default class extends Controller {

  /** Name should match the controller name */
  static outlets = [ "store" ]

  static values = {
    finishedResult: { type: Object, default: {} }
  }

  flip(event) {
    const tile = event.target
    const tileIndex = Number(tile.dataset.tileIndex)
    const tileIsOpen = String(tile.dataset.tileIsOpen)

    if (tileIsOpen === "false") {
      const currentTileContent =
        this.#extractTileContentsFromFinishedResult(
          tileIndex,
          this.finishedResultValue
        )

      this.#showContent(tile, currentTileContent)
      this.storeOutlet.addToSuccessiveTilesCollection(tile)

      if (this.storeOutlet.successiveTilesCollectionCount === 2) {
        setTimeout(() => {
          if (this.storeOutlet.tile.matchingIndex !== tileIndex) {
            this.storeOutlet.successiveTilesCollection.forEach(tile => {
              this.#hideContent(tile)
            });
          }
          this.storeOutlet.resetSuccessiveTilesCollection()
          this.storeOutlet.resetPreviousTile()
        }, 1000)
      } else {
        this.storeOutlet.updatePreviouslyClickedTile(
          tileIndex,
          currentTileContent['indexes']
        )
      }
    }
  }

  #showContent = (tile, data) => {
    tile.dataset.tileIsOpen = "true"
    tile.textContent = data.label
    tile.style.backgroundColor = data.color
    tile.classList.remove('bg-black')
  }

  #hideContent(tile) {
    tile.textContent = null
    tile.style.backgroundColor = null
    tile.classList.add("bg-black")
    tile.dataset.tileIsOpen = "false"
  }

  #extractTileContentsFromFinishedResult = (tileIndex, finishedResultValue) => {
    const tileKeyInBoard =
      Object
        .keys(finishedResultValue)
        .filter(key => {
          return finishedResultValue[key].includes(tileIndex)
        })

    if (tileKeyInBoard.length < 1) {
      return {color: null, label: null, indexes: [] }
    }

    const result = tileKeyInBoard[0].split("--")
    return {
      color: result[0],
      label: result[1],
      indexes: finishedResultValue[tileKeyInBoard[0]]
    }
  }
}
