import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="board"
export default class extends Controller {
  connect() {
    // console.log('Board controller connected')
  }

  flip(event) {
    const tile = event.target
    const tileIndex = Number(tile.dataset.tileIndex)

    this.#showContent(tile, tileIndex)
    setTimeout(() => {
      this.#hideContent(tile)
    }, 1000)
  }

  #showContent(tile, tileIndex) {
    tile.textContent = tileIndex
    tile.style.backgroundColor = "red"
    tile.classList.remove("bg-black")
  }

  #hideContent(tile) {
    tile.textContent = null
    tile.style.backgroundColor = null
    tile.classList.add("bg-black")
  }
}
