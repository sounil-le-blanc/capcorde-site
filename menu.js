class CapCordesMenu extends HTMLElement {
    constructor() {
        super();
        // On pré-construit le HTML dès l'instanciation
        this.innerHTML = `
            <div class="burger-btn" id="burgerBtn">
                <span></span><span></span><span></span>
            </div>

            <aside id="sidebar">
                <div class="logo-container">
                    <img src="logo.png" 
                         alt="Cap Cordes" 
                         class="logo-img" 
                         width="220" 
                         height="80" 
                         fetchpriority="high">
                </div>
                <nav>
                    <ul>
                        <li><a href="index.html">Forfait inspection toiture</a></li>
                        <li><a href="restauration.html">Restauration de pierre</a></li>
                        <li><a href="infiltration.html">Recherche d'infiltration</a></li>
                        <li><a href="entretien.html">Entretien</a></li>
                        <li><a href="courettes.html">Rénovation de courettes</a></li>
                        <li><a href="travaux-speciaux.html">Travaux spéciaux</a></li>
                        <li><a href="equipe.html">Qui sommes nous ?</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
            </aside>
        `;
    }

    connectedCallback() {
        const burger = this.querySelector('#burgerBtn');
        const sidebar = this.querySelector('#sidebar');
        
        // Gestion du menu burger
        if (burger && sidebar) {
            burger.onclick = () => {
                if (window.innerWidth <= 1024) {
                    sidebar.classList.toggle('open');
                }
            };
        }

        // Fermeture automatique sur mobile
        const links = this.querySelectorAll('nav a');
        links.forEach(link => {
            link.onclick = () => {
                if (window.innerWidth <= 1024) {
                    sidebar.classList.remove('open');
                }
            };
        });
    }
}

// On définit l'élément le plus tôt possible
customElements.define('cap-cordes-menu', CapCordesMenu);