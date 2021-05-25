const template = document.createElement("template");
    template.innerHTML = `
    <style>
        .default-btn {
            outline: none;
            border: none;
            background: #028a3d;
            padding: .4rem 1rem;
            border-radius: 4px;
            color: #fff;
            cursor: pointer;
            min-width: 140px;
            height: 40px;
            text-transform: uppercase;
            font-size: 15px;
            font-weight: normal;
            box-shadow: 1px 1px 12px 2px rgba(0, 0, 0, .2);
            transition: all .3s;
        }
        
        .default-btn:hover {
            box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .3);
        }
        
        .default-btn:active {
            box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .3);
            transform: scale(0.95);
        }

        .quiz-details__start-btn-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 2rem;
            position: sticky;
            width: 100%;
            top: 100%;
            left: 0;
        }
        
        .quiz-details__start-btn {
            width: 60%;
            height: 40px;
        }
        
        .quiz-details__start-btn:hover {
            box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .3);
        }
        
        .quiz-details__start-btn:active {
            box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .3);
            transform: scale(0.95);
        }
    </style>

    <div class="quiz-details__start-btn-wrapper">
        <button class="default-btn quiz-details__start-btn">
            Start
        </button>
    </div>
    `;

class StartButton extends HTMLElement {
    constructor() {
        super();

        // create a shadow DOM
        this.attachShadow({ mode:'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    connectedCallback() {
        //Quiz Card Elements
        this.shadowRoot.querySelector(".quiz-details__start-btn").addEventListener('click', () => {

        });
    }
}

window.customElements.define('start-btn', StartButton)