class Player {
    hand = []
    constructor(deck) {
        this.hand = deck
    }

    DrawCard(deck) {
        //Draws a card from the specified deck
        this.hand.AddCard(deck.DrawTop())
    }

    PlayCard(index) {
        this.hand.DrawIndex(index)
        // TODO put card into play
    }

    DiscardBottom(card, pile) {
        // Adds Card to Discard Pile
        pile.AddCardTop(card)
    }

    DiscardTop(card, pile) {
        // Adds Card to Discard Pile
        pile.AddCardBottom(card)
    }
    
}