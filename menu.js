class CapCordesMenu extends HTMLElement {
    connectedCallback() {
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

        // On attend un micro-instant pour s'assurer que le DOM est prêt pour les clics
        setTimeout(() => {
            const burger = this.querySelector('#burgerBtn');
            const sidebar = this.querySelector('#sidebar');
            
            if (burger) {
                burger.onclick = () => sidebar.classList.toggle('open');
            }

            const links = this.querySelectorAll('nav a');
            links.forEach(link => {
                link.onclick = () => sidebar.classList.remove('open');
            });
        }, 0);
    }
}

if (!customElements.get('cap-cordes-menu')) {
    customElements.define('cap-cordes-menu', CapCordesMenu);
}