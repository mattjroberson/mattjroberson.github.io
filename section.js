class Section{

  constructor(title, summary, color){
      this.sectionID = title;
      this.title = title;
      this.summary = summary;
      this.color = color;

      this.createNavButton();
      this.section = this.createSection();

      this.header = document.getElementById(this.sectionID+'Header');
      this.cmdLineText = new CmdLineText(this.header, summary);
      
      observer.observe(this.section);
  }

  createNavButton(){
    const ul = document.getElementById('NavBar');
    const li = document.createElement('li');
    const btn = document.createElement('button');

    btn.innerHTML = this.title;
    btn.id = this.title+'Button';
    btn.onclick = () => { this.scrollToSection() };

    btn.classList.add('button-'+this.color);

    li.appendChild(btn);
    ul.appendChild(li);
  }

  createSection(){
      const sectionDiv = document.getElementById('sections');
      const section = document.createElement('section');
      const h1 = document.createElement('h1');

      section.id = this.sectionID;
      section.classList.add('section-div');

      h1.id = this.sectionID+'Header';
      h1.classList.add('section-header');

      section.appendChild(h1);
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
}
