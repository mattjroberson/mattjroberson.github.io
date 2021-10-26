class Section{

  constructor(title, summary, color){
      this.sectionID = title;
      this.title = title;
      this.summary = summary;
      this.color = color;

      this.button = this.createNavButton();
      this.section = this.createSection();

      this.header = document.getElementById(this.sectionID+'Header');
      this.header.innerHTML = '\\> ';
      this.header.style.color = colorList[this.color];

      this.cmdLineText = new CmdLineText(this.header, summary);
      
      observer.observe(this.section);
  }

  createNavButton(){
    const btn = document.createElement('button');
    const topBar = document.getElementById('TopBar');

    btn.innerHTML = this.title;
    btn.id = this.title+'Button';
    btn.onclick = () => { this.scrollToSection() };

    btn.classList.add(`button-${this.color}`);
    topBar.appendChild(btn);

    return btn;
  }

  createSection(){
      const sectionDiv = document.getElementById('sections');
      const section = document.createElement('section');
      const h1 = document.createElement('h1');
      const gridContainer = document.createElement('div');

      section.id = this.sectionID;
      section.classList.add('section-div');
      section.style.borderTop =`3px ${colorList[this.color]} solid`;

      gridContainer.classList.add('content-grid-div');

      const x = document.createElement('div');
      x.classList.add('item');
      const y = document.createElement('div');
      y.classList.add('item');
      const z = document.createElement('div');
      z.classList.add('item');
      const d = document.createElement('div');
      d.classList.add('item');
      const h = document.createElement('div');
      h.classList.add('item');
      gridContainer.appendChild(x);
      gridContainer.appendChild(y);
      gridContainer.appendChild(d);
      gridContainer.appendChild(z);
      gridContainer.appendChild(h);

      h1.id = this.sectionID+'Header';
      h1.classList.add('section-header');

      section.appendChild(h1);
      section.appendChild(gridContainer);
      sectionDiv.appendChild(section);

      return section;
  }

  //Scrolls to the section
  scrollToSection() {
    this.section.scrollIntoView({
      behavior: 'auto',
      block: 'start'
    });

    //Start the printing of the header
    this.cmdLineText.checkForPrint();
  }

  notifyVisible(){
    this.button.focus();
    this.cmdLineText.checkForPrint();
  }
}
