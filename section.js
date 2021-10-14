class Section{

  constructor(sectionID){
      this.sectionDiv = document.getElementById(sectionID);
      this.header = document.getElementById(sectionID+'Header');
      this.cmdLineText = new CmdLineText(this.header, 'Hello World... Im glad you are here!');

      observer.observe(this.sectionDiv);
  }

  //Scrolls to the section
  scrollToSection() {
    this.sectionDiv.scrollIntoView({
      behavior: 'auto',
      block: 'start'
    });

    //Start the printing of the header
    this.cmdLineText.checkForPrint();
  }
}
