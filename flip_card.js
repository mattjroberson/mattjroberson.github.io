class FlipCard{
    constructor(){
        this.card = document.createElement('div');
        this.card.classList.add('grid-item', 'flip-card');

        this.cardInner = document.createElement('div');
        this.cardInner.classList.add('flip-card-inner');
        this.card.appendChild(this.cardInner);

        this.cardFront = document.createElement('div');
        this.cardFront.classList.add('flip-card-front');
        this.cardInner.appendChild(this.cardFront);

        this.cardBack = document.createElement('div');
        this.cardBack.classList.add('flip-card-back');
        this.cardInner.appendChild(this.cardBack);
    }
}