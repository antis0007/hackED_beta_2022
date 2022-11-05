//contains code for generating a "slot" to place cards
//on the game board

export class Board {
    //Board per player
    constructor(slots) {
        this.playedCards = Array(slots);
    }
    
    PlaceCard(card, index) {
        this.played[index] = card
    }

    RemoveCard(index) {
        card = this.played[index]
        this.played[index] = null
    }
}