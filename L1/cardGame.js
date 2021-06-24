function getCard(){
    cards= [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'A',
        'K',
        'Q',
        'J',
    ];
    const cardIndex = Math.floor(Math.random() * cards.length);
    const card = cards[cardIndex];
    const suits = ['Club','Spades','Hearts','Diamonds'];
    const suitIndex = Math.floor(Math.random() * suits.length);
    const suit = suits[suitIndex];

    // return {
    //     Suit:suit,
    //     Card:card
    // }

    console.log({Suit:suit,
        Card:card});

}

getCard();