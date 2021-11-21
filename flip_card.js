class FlipCard extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback() {
        setTimeout(() => {
            let innerText = this.innerHTML;
            this.innerHTML = '';


            this.classList.add('grid-item', 'flip-card');
            //Card Content
            this.inner = document.createElement('div');
            this.inner.classList.add('flip-card-inner');
            this.appendChild(this.inner);

            //Front of Card
            this.front = document.createElement('div');
            this.front.classList.add('flip-card-front');
            this.front.style.backgroundColor = this.parentNode.parentNode.style.borderTopColor;
            this.inner.appendChild(this.front);

            //Front Card Image
            this.image = document.createElement('img');
            this.image.src = `${this.getAttribute('img')}.png`;
            this.front.appendChild(this.image);

            //Back of Card
            this.back = document.createElement('div');
            this.back.classList.add('flip-card-back');
            this.back.style.backgroundColor = '#BEBEBE';
            this.inner.appendChild(this.back);

            //Back Card Header
            this.header = document.createElement('h1');
            this.header.classList.add('flip-card-header');
            this.header.innerText = this.getAttribute('header');
            this.back.appendChild(this.header);

            //Back Card Content
            this.content = document.createElement('p');
            this.content.classList.add('flip-card-content');
            this.content.innerHTML = innerText;
            this.back.appendChild(this.content);
        });
    }
}