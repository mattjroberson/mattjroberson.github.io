class InfoSection extends HTMLElement{

  constructor(){
    super();
  }

  connectedCallback() {
    this.classList.add('section-div');

    let title = this.getAttribute('id');
    this.summary = this.getAttribute('summary');
    this.button = document.getElementById(title+'Button');
    
    observer.observe(this);
  }

  //Scrolls to the section
  scrollToSection() {
    this.button.focus();

    this.scrollIntoView({
      behavior: 'auto',
      block: 'start'
    });

    //Start the printing of the header
    this.getElementsByTagName("cmd-line-text").item(0).checkForPrint();
  }

  notifyVisible(){
    this.button.focus();
    this.getElementsByTagName("cmd-line-text").item(0).checkForPrint();
  }
}
