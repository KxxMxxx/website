const template = document.createElement('template');

template.innerHTML = `
<link rel="stylesheet" type="text/css" href="./css/terminal.css">
<div class="terminal-header">
    <div class="header-button red"></div>
    <div class="header-button yellow"></div>
    <div class="header-button green"></div>
</div>
<div class="terminal-tabs-container">
    <button id="toggle-about" class="terminal-tabs">About Me</button>
    <button id="toggle-proj" class="terminal-tabs">Projects</button>
    <button id="toggle-exp" class="terminal-tabs">Experiences</button>
</div>
<div class="terminal-window">
    <div class="about">
        <div class="terminal-text">> Name</div>
        <div class="terminal-subtext">"Lew Kai Ming"</div>
        <div class="terminal-text">> Year_Of_Study</div>
        <div class="terminal-subtext">"Year 3"</div>
        <div class="terminal-text">> School</div>
        <div class="terminal-subtext">"National University of Singapore"</div>
        <div class="terminal-text">> Field_Of_Study</div>
        <div class="terminal-subtext">"Computer Science (Software Engineering focus area)"</div>
        <div class="terminal-text">> Skills</div>
        <div style="padding: 5px 0 5px 0;">
            <span class="text-text">[</span>
            <span class="text-subtext">"Java"</span>
            <span class="text-text">,</span>
            <span class="text-subtext">"Python"</span>
            <span class="text-text">,</span>
            <span class="text-subtext">"C"</span>
            <span class="text-text">,</span>
            <span class="text-subtext">"React"</span>
            <span class="text-text">]</span>
        </div>
        <div class="terminal-text">> ContactMe</div>
        <div style="padding:5px 0 5px 0;">
            <span class="text-text">[</span>
            <a href="https://github.com/KxxMxxx" target="_blank"><span class="text-hyperlink">GitHub</span></a>
            <span class="text-text">,</span>
            <a href="https://www.linkedin.com/in/kai-ming-lew/" target="_blank"><span class="text-hyperlink">LinkedIn</span></a>
            <span class="text-text">,</span>
            <a href="mailto:kaiminglew@u.nus.edu" target="_blank"><span class="text-hyperlink">kaiminglew@u.nus.edu</span></a>
            <span class="text-text">]</span>
        </div>
    </div>
    <div class="proj">
        <div class="terminal-text">> ls</div>
        <div style="padding: 5px 0 5px 0;">
            <span class="text-text">>&nbsp</span>
            <a href="https://github.com/KxxMxxx/Split-It" target="_blank"><span class="text-hyperlink">Split-It</span></a>
        </div>
        <div class="terminal-subtext">"A bill-splitting application made using React Native and Google Vision. 
        Users can scan receipts and split the bill according to items in the receipt."</div>
        <div style="padding: 5px 0 5px 0;">
            <span class="text-text">>&nbsp</span>
            <a href="https://github.com/KxxMxxx/main" target="_blank"><span class="text-hyperlink">Plan2Travel</span></a>
        </div>
        <div class="terminal-subtext">"A CLI based trip-planning application built for CS2103T (Software Engineering module).
            Designed and implemented a feature to de-conflict activities in the schedule, helping users to maximise their time."</div>
        <div class="terminal-text">> HawkAI</div>
        <div class="terminal-subtext">"A telegram bot, built for HackNTU 2019, that locates hawker centers based on the user's 
        geolocation"</div>
    </div>
    <div class="exp">
        <div class="terminal-text">> ls</div>
        <div class="terminal-text">> CS2030_Teaching_Assistant</div>
        <div class="terminal-subtext">"Teaching assistant for CS2030 (Programming Methodology II), taught in Java, during AY19/20. 
        Conducted programming lab sessions for a class of 21 weekly throughout the semester."</div>
        <div class="terminal-text">> DBS_WoWtech_Intern</div>
        <div class="terminal-subtext">"Software engineering intern at DBS. Worked in a team of 4 to reinvent the travel insurance
        customer journey Built a prototype with React and pitched it to the DBS Innovation Group management team."</div>
    </div>
</div>
`;

class TerminalWindow extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector('.about').style.display = 'block';
        this.shadowRoot.querySelector('.proj').style.display = 'none';
        this.shadowRoot.querySelector('.exp').style.display = 'none';

        this.shadowRoot.querySelector('#toggle-about').className = 'terminal-tabs active';
        this.shadowRoot.querySelector('#toggle-proj').className = 'terminal-tabs';
        this.shadowRoot.querySelector('#toggle-exp').className = 'terminal-tabs';
    }

    toggleShowAbout() {
        this.shadowRoot.querySelector('.about').style.display = 'block';
        this.shadowRoot.querySelector('.proj').style.display = 'none';
        this.shadowRoot.querySelector('.exp').style.display = 'none';

        this.shadowRoot.querySelector('#toggle-about').className = 'terminal-tabs active';
        this.shadowRoot.querySelector('#toggle-proj').className = 'terminal-tabs';
        this.shadowRoot.querySelector('#toggle-exp').className = 'terminal-tabs';
    }

    toggleShowProj() {
        this.shadowRoot.querySelector('.about').style.display = 'none';
        this.shadowRoot.querySelector('.proj').style.display = 'block';
        this.shadowRoot.querySelector('.exp').style.display = 'none';

        this.shadowRoot.querySelector('#toggle-about').className = 'terminal-tabs';
        this.shadowRoot.querySelector('#toggle-proj').className = 'terminal-tabs active';
        this.shadowRoot.querySelector('#toggle-exp').className = 'terminal-tabs';
    }

    toggleShowExp() {
        this.shadowRoot.querySelector('.about').style.display = 'none';
        this.shadowRoot.querySelector('.proj').style.display = 'none';
        this.shadowRoot.querySelector('.exp').style.display = 'block';

        this.shadowRoot.querySelector('#toggle-about').className = 'terminal-tabs';
        this.shadowRoot.querySelector('#toggle-proj').className = 'terminal-tabs';
        this.shadowRoot.querySelector('#toggle-exp').className = 'terminal-tabs active';
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#toggle-about')
        .addEventListener('click', () => this.toggleShowAbout());

        this.shadowRoot.querySelector('#toggle-proj')
        .addEventListener('click', () => this.toggleShowProj());

        this.shadowRoot.querySelector('#toggle-exp')
        .addEventListener('click', () => this.toggleShowExp());
    }
  }
  
  customElements.define('terminal-window', TerminalWindow);