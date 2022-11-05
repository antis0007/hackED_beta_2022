class Player {
    hand = []
    constructor(deck) {
        this.hand = deck
    }

    DrawCard(deck) {
        //Draws a card from the specified deck
        this.hand.AddCard(deck.DrawTop())
    }

    PlayCard() {
        // 
    }

    Discard() {
        // Adds Card to Discard Pile
    }
    
}