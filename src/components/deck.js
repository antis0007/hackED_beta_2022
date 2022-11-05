//contains code for generating a dynamic deck of cards
//these decks are usable by other objects

class Deck {
    cards = []
    constructor(cards) {
        this.cards = cards
    }

    AddCardTop(card) {
        this.cards.push(card)
    }

    AddCardBottom(card) {
        this.cards.unshift(card)
    }

    DrawRandom(){
        let index = Math.floor(Math.random()*this.cards.length)
        return this.DrawIndex(index)
    }

    DrawIndex(index) {
        let card = this.cards[index]
        this.cards.splice(index, 1)
        return card;
    }

    DrawTop() {
        return this.cards.pop()
    }

    Shuffle() {
        // Shuffle method taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        let currentIndex = this.cards.length, randomIndex;
        
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
        
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            // And swap it with the current element.
            [this.cards[currentIndex], this.cards[randomIndex]] = [
            this.cards[randomIndex], this.cards[currentIndex]];
        } 
    }
}