
document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderFooter();
    
    // Mobile Menu Toggle Logic (deferred until navbar is rendered)
    setTimeout(() => {
        const toggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (toggle && navLinks) {
            toggle.addEventListener('click', () => {
                navLinks.classList.toggle('open');
                // Change icon helper
                const icon = toggle.querySelector('i');
                if(navLinks.classList.contains('open')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        }
        
        // Highlight active link
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    }, 100);
});

function renderNavbar() {
    const navbarContainer = document.getElementById('navbar');
    if (!navbarContainer) return;

    navbarContainer.innerHTML = `
        <nav class="navbar">
            <div class="container flex-between">
                <a href="index.html" class="nav-logo">Rismawati<span class="text-primary">.</span></a>
                <div class="nav-toggle">
                    <i class="fas fa-bars"></i>
                </div>
                <ul class="nav-links">
                    <li><a href="index.html" class="nav-link">Beranda</a></li>
                    <li><a href="profile.html" class="nav-link">Profil</a></li>
                    <li><a href="portfolio.html" class="nav-link">Portofolio</a></li>
                    <li><a href="articles.html" class="nav-link">Artikel</a></li>
                    <li><a href="contact.html" class="nav-link">Kontak</a></li>
                </ul>
            </div>
        </nav>
    `;
}

function renderFooter() {
    const footerContainer = document.getElementById('footer');
    if (!footerContainer) return;

    const year = new Date().getFullYear();
    
    footerContainer.innerHTML = `
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div>
                        <h3>Rismawati Appa</h3>
                        <p style="margin-top: 1rem; color: #cbd5e1;">
                            Mahasiswa Teknik Informatika yang berdedikasi menciptakan solusi digital yang bermanfaat.
                        </p>
                    </div>
                    <div>
                        <h3>Navigasi</h3>
                        <ul style="margin-top: 1rem;">
                            <li class="mb-1"><a href="index.html">Beranda</a></li>
                            <li class="mb-1"><a href="portfolio.html">Portofolio</a></li>
                            <li class="mb-1"><a href="contact.html">Kontak</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Hubungi</h3>
                        <ul style="margin-top: 1rem;">
                            <li class="mb-1"><i class="fas fa-envelope"></i> rismawatiappa26@gmail.com</li>
                            <li class="mb-1"><i class="fas fa-university"></i> Universitas Indonesia Timur</li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; ${year} Rismawati Appa. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;
}
