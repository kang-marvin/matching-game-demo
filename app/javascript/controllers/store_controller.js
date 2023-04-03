import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="store"
export default class extends Controller {
  connect() {
  }

  /** For testing only. Remove when done */
  test() {
    console.log("A tile has been clicked")
  }
}
