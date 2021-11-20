class CmdLineText extends HTMLElement{
  constructor(){
    super();
    this.printed = false;
    this.i = 0;
 }

  connectedCallback(){
    setTimeout(() => {
      this.id = `${this.parentNode.id}Header`;
      this.classList.add('section-header');
      this.style.color = this.parentNode.style.borderTopColor;
      this.text = this.innerHTML;
      this.innerHTML = '\\> '
    });
  }

  calculateSpeed() {
    return 50 + Math.floor(Math.random()*20);
  }

  checkForPrint(){
    if(this.printed === false){
      this.printed = true;
      setTimeout(() => { this.printToScreen() }, 800);
    }
  }

  printToScreen(){
    this.innerHTML = '\\> ';
    this.i = 0;
    this.printLoop();
  }

  printLoop(){
    if (this.i < this.text.length) {
      //Obsolete multi line code. Decided to go single line from a design standpoint. 
      // const char = this.text.charAt(this.i) === '^' 
      //   ? '<br>&nbsp&nbsp&nbsp' /*'<br>\\> '*/ : this.text.charAt(this.i);

      this.innerHTML += this.text.charAt(this.i);
      this.i++;
      setTimeout(() => {this.printLoop()}, this.calculateSpeed());
    }
  }
}
