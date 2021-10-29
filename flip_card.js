class FlipCard{
    constructor(title, content, card_img){

        //Main Card
        this.card = document.createElement('div');
        this.card.classList.add('grid-item', 'flip-card');

        //Card Content
        this.inner = document.createElement('div');
        this.inner.classList.add('flip-card-inner');
        this.card.appendChild(this.inner);

        //Front of Card
        this.front = document.createElement('div');
        this.front.classList.add('flip-card-front');
        this.inner.appendChild(this.front);

        //Front Card Image
        this.image = document.createElement('img');
        this.image.src = `${card_img}.png`;
        this.front.appendChild(this.image);

        //Back of Card
        this.back = document.createElement('div');
        this.back.classList.add('flip-card-back');
        this.inner.appendChild(this.back);

        //Back Card Header
        this.header = document.createElement('h1');
        this.header.classList.add('flip-card-header');
        this.header.innerText = title;
        this.back.appendChild(this.header);

        //Back Card Content
        this.content = document.createElement('p');
        this.content.classList.add('flip-card-content');
        this.content.innerText = content;
        this.back.appendChild(this.content);
    }
}