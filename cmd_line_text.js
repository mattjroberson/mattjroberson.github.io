class CmdLineText{
  constructor(element, text){
    this.element = element;
    this.text = text;
    this.printed = false;
    this.i = 0;
  }

  calculateSpeed() {
    return 50 + Math.floor(Math.random()*20);
  }

  wipe(){
    this.element.innerHTML = '\\> ';
  }

  checkForPrint(){
    if(this.printed === false){
      setTimeout(() => { this.printToScreen() }, 800);
    }
  }

  printToScreen(){
    this.printed = true;
    this.element.innerHTML = '\\> ';
    this.i = 0;
    this.printLoop();
  }

  printLoop(){
    if (this.i < this.text.length) {
      const char = this.text.charAt(this.i) === '^' 
        ? '<br>&nbsp&nbsp&nbsp' : this.text.charAt(this.i);

      this.element.innerHTML += char;
      this.i++;
      setTimeout(() => {this.printLoop()}, this.calculateSpeed());
    }
  }
}
