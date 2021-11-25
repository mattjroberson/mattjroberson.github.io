class NavButton extends HTMLButtonElement{

    constructor(){
      super();
    }

    connectedCallback() {
        this.classList.add('nav-button');
        this.onmouseenter = this.mouseEnter;
        this.onmouseleave = this.mouseLeave;
        this.onclick = this.activate;

        this.name = this.getAttribute('name');
        this.bgColor = this.getAttribute('color');

        this.id = this.name + 'Button';

        this.active = false;
        console.log(this.bgColor);
    }

    activate(){
        this.active = true;
        this.highlight();

        document.getElementById(this.name).scrollToSection();
        this.updateOtherButtons();
    }

    deactivate(){
        this.active = false;
        this.removeHighlight();
    }

    highlight(){
        this.style.color = 'black';
        this.style.backgroundColor = this.bgColor;
    }

    removeHighlight(){
        this.style.color = 'white';
        this.style.backgroundColor = 'black';
    }

    mouseEnter(){
        if(!this.active) this.highlight();
    }

    mouseLeave(){
        if(!this.active) this.removeHighlight();
    }

    updateOtherButtons(){
        let buttons = document.getElementsByTagName('button');
        for (let btn of buttons) {
            if(btn !== this) btn.deactivate();
        }
    }
}