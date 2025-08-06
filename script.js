// Dados das palestrantes
const speakers = [
    {
        id: 1,
        name: "Midian Brandão",
        role: "Tech Lead",
        company: "A definir",
        bio: "Informações serão atualizadas pela própria palestrante. Este é um placeholder para o projeto open source.",
        expertise: ["IA", "Machine Learning", "Python"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        talks: ["Inteligência Artificial e o Futuro do Trabalho"]
    },
    {
        id: 2,
        name: "Camila Marques de Oliveira",
        role: "Frontend Developer",
        company: "A definir",
        bio: "Informações serão atualizadas pela própria palestrante. Este é um placeholder para o projeto open source.",
        expertise: ["React", "Vue.js", "JavaScript"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        talks: ["Desenvolvimento Frontend Moderno"]
    },
    {
        id: 3,
        name: "Gabriela Milet Matias",
        role: "Security Engineer",
        company: "A definir",
        bio: "Informações serão atualizadas pela própria palestrante. Este é um placeholder para o projeto open source.",
        expertise: ["Segurança", "Cloud", "DevSecOps"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        talks: ["Segurança Cibernética: Protegendo o Futuro Digital"]
    },
    {
        id: 4,
        name: "Laryssa Viana Rocha",
        role: "DevOps Engineer",
        company: "A definir",
        bio: "Informações serão atualizadas pela própria palestrante. Este é um placeholder para o projeto open source.",
        expertise: ["DevOps", "Kubernetes", "AWS"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        talks: ["DevOps e Cloud Computing"]
    },
    {
        id: 5,
        name: "Elizabeth Cristina de Souza",
        role: "Data Scientist",
        company: "A definir",
        bio: "Informações serão atualizadas pela própria palestrante. Este é um placeholder para o projeto open source.",
        expertise: ["Data Science", "Python", "ML"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        talks: ["Data Science e Machine Learning"]
    },
    {
        id: 6,
        name: "Bianca Pinto Cardoso",
        role: "UX Designer",
        company: "A definir",
        bio: "Informações serão atualizadas pela própria palestrante. Este é um placeholder para o projeto open source.",
        expertise: ["UX", "Design", "Research"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        talks: ["UX/UI Design: Criando Experiências Incríveis"]
    },
    {
        id: 7,
        name: "Juliana de Jesus de Oliveira",
        role: "Blockchain Developer",
        company: "A definir",
        bio: "Informações serão atualizadas pela própria palestrante. Este é um placeholder para o projeto open source.",
        expertise: ["Blockchain", "Solidity", "DeFi"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        talks: ["Blockchain e Criptomoedas"]
    },
    {
        id: 8,
        name: "Marília Melo Favalesso",
        role: "Mobile Developer",
        company: "A definir",
        bio: "Informações serão atualizadas pela própria palestrante. Este é um placeholder para o projeto open source.",
        expertise: ["iOS", "Android", "React Native"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        talks: ["Mobile Development: iOS e Android"]
    },
    {
        id: 9,
        name: "Ana Hashimoto",
        role: "IoT Engineer",
        company: "A definir",
        bio: "Informações serão atualizadas pela própria palestrante. Este é um placeholder para o projeto open source.",
        expertise: ["IoT", "Hardware", "Embedded"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        talks: ["Internet das Coisas (IoT)"]
    },
    {
        id: 10,
        name: "Andrea Simone",
        role: "Software Architect",
        company: "A definir",
        bio: "Informações serão atualizadas pela própria palestrante. Este é um placeholder para o projeto open source.",
        expertise: ["Arquitetura", "Microservices", "Java"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        talks: ["Arquitetura de Software Escalável"]
    },
    {
        id: 11,
        name: "Bruna Valentim",
        role: "Quantum Researcher",
        company: "A definir",
        bio: "Informações serão atualizadas pela própria palestrante. Este é um placeholder para o projeto open source.",
        expertise: ["Quantum", "Physics", "Research"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        talks: ["Quantum Computing: A Nova Fronteira"]
    },
    {
        id: 12,
        name: "Cecilia Silva",
        role: "VR/AR Developer",
        company: "A definir",
        bio: "Informações serão atualizadas pela própria palestrante. Este é um placeholder para o projeto open source.",
        expertise: ["VR", "AR", "Unity"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        talks: ["Realidade Virtual e Aumentada"]
    },
    {
        id: 13,
        name: "Jessica Alexandra",
        role: "Agile Coach",
        company: "A definir",
        bio: "Informações serão atualizadas pela própria palestrante. Este é um placeholder para o projeto open source.",
        expertise: ["Agile", "Scrum", "Leadership"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        talks: ["Metodologias Ágeis e Scrum"]
    },
    {
        id: 14,
        name: "Jessica Borges",
        role: "Big Data Engineer",
        company: "A definir",
        bio: "Informações serão atualizadas pela própria palestrante. Este é um placeholder para o projeto open source.",
        expertise: ["Big Data", "Spark", "Hadoop"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        talks: ["Big Data e Analytics"]
    },
    {
        id: 15,
        name: "Karina Kaori",
        role: "Robotics Engineer",
        company: "A definir",
        bio: "Informações serão atualizadas pela própria palestrante. Este é um placeholder para o projeto open source.",
        expertise: ["Robotics", "Automation", "AI"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        talks: ["Automação e Robótica"]
    },
    {
        id: 16,
        name: "Keline",
        role: "Tech Lead",
        company: "A definir",
        bio: "Informações serão atualizadas pela própria palestrante. Este é um placeholder para o projeto open source.",
        expertise: ["Leadership", "Management", "Strategy"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        talks: ["Liderança Técnica Feminina"]
    },
    {
        id: 17,
        name: "Luciana Damasceno",
        role: "Open Source Advocate",
        company: "A definir",
        bio: "Informações serão atualizadas pela própria palestrante. Este é um placeholder para o projeto open source.",
        expertise: ["Open Source", "Community", "Python"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        talks: ["Open Source e Comunidades Tech"]
    },
    {
        id: 18,
        name: "Rhaissa Barbosa",
        role: "Green Tech Specialist",
        company: "A definir",
        bio: "Informações serão atualizadas pela própria palestrante. Este é um placeholder para o projeto open source.",
        expertise: ["GreenTech", "Sustainability", "Energy"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        talks: ["Sustentabilidade na Tecnologia"]
    },
    {
        id: 19,
        name: "Helena",
        role: "Entrepreneur",
        company: "A definir",
        bio: "Informações serão atualizadas pela própria palestrante. Este é um placeholder para o projeto open source.",
        expertise: ["Entrepreneurship", "Startups", "Business"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        talks: ["Empreendedorismo Tech Feminino"]
    },
    {
        id: 20,
        name: "Juliana Lisboa",
        role: "Tech Evangelist",
        company: "A definir",
        bio: "Informações serão atualizadas pela própria palestrante. Este é um placeholder para o projeto open source.",
        expertise: ["Diversity", "Inclusion", "Future"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        talks: ["O Futuro das Mulheres na Tecnologia"]
    }
];

// Dados das palestras reorganizadas em 2 blocos
const talks = [
    // BLOCO 1 - MANHÃ (10:10 - 13:00)
    {
        id: 1,
        time: "10:10 - 10:25",
        title: "Inteligência Artificial e o Futuro do Trabalho",
        speaker: "Midian Brandão",
        description: "Como a IA está transformando o mercado de trabalho e criando novas oportunidades para mulheres na tecnologia.",
        tags: ["IA", "Carreira", "Futuro"],
        block: "morning"
    },
    {
        id: 2,
        time: "10:25 - 10:40",
        title: "Desenvolvimento Frontend Moderno",
        speaker: "Camila Marques de Oliveira",
        description: "Explorando as últimas tendências em React, Vue.js e as melhores práticas para desenvolvimento frontend.",
        tags: ["Frontend", "React", "Vue.js"],
        block: "morning"
    },
    {
        id: 3,
        time: "10:40 - 10:55",
        title: "Segurança Cibernética: Protegendo o Futuro Digital",
        speaker: "Gabriela Milet Matias",
        description: "Estratégias essenciais de segurança cibernética e como as mulheres estão liderando essa área crítica.",
        tags: ["Segurança", "Cibersegurança", "Proteção"],
        block: "morning"
    },
    {
        id: 4,
        time: "10:55 - 11:10",
        title: "DevOps e Cloud Computing",
        speaker: "Laryssa Viana Rocha",
        description: "Implementando práticas DevOps eficientes e aproveitando o poder da computação em nuvem.",
        tags: ["DevOps", "Cloud", "AWS"],
        block: "morning"
    },
    {
        id: 5,
        time: "11:10 - 11:25",
        title: "Data Science e Machine Learning",
        speaker: "Elizabeth Cristina de Souza",
        description: "Descobrindo insights valiosos através da ciência de dados e algoritmos de aprendizado de máquina.",
        tags: ["Data Science", "ML", "Python"],
        block: "morning"
    },
    {
        id: 6,
        time: "11:25 - 11:40",
        title: "UX/UI Design: Criando Experiências Incríveis",
        speaker: "Bianca Pinto Cardoso",
        description: "Princípios fundamentais de design de experiência do usuário e interface que fazem a diferença.",
        tags: ["UX", "UI", "Design"],
        block: "morning"
    },
    {
        id: 7,
        time: "11:40 - 11:55",
        title: "Blockchain e Criptomoedas",
        speaker: "Juliana de Jesus de Oliveira",
        description: "Entendendo a tecnologia blockchain e seu impacto revolucionário nos sistemas financeiros.",
        tags: ["Blockchain", "Crypto", "Fintech"],
        block: "morning"
    },
    {
        id: 8,
        time: "11:55 - 12:10",
        title: "Mobile Development: iOS e Android",
        speaker: "Marília Melo Favalesso",
        description: "Desenvolvimento de aplicativos móveis nativos e cross-platform para iOS e Android.",
        tags: ["Mobile", "iOS", "Android"],
        block: "morning"
    },
    {
        id: 9,
        time: "12:10 - 12:25",
        title: "Internet das Coisas (IoT)",
        speaker: "Ana Hashimoto",
        description: "Conectando o mundo físico ao digital através de dispositivos IoT inteligentes.",
        tags: ["IoT", "Hardware", "Sensores"],
        block: "morning"
    },
    {
        id: 10,
        time: "12:25 - 12:40",
        title: "Arquitetura de Software Escalável",
        speaker: "Andrea Simone",
        description: "Projetando sistemas robustos e escaláveis que suportam milhões de usuários.",
        tags: ["Arquitetura", "Escalabilidade", "Sistema"],
        block: "morning"
    },
    
    // BLOCO 2 - TARDE (14:00 - 16:30)
    {
        id: 11,
        time: "14:00 - 14:15",
        title: "Quantum Computing: A Nova Fronteira",
        speaker: "Bruna Valentim",
        description: "Explorando os conceitos fundamentais da computação quântica e suas aplicações futuras.",
        tags: ["Quantum", "Computação", "Física"],
        block: "afternoon"
    },
    {
        id: 12,
        time: "14:15 - 14:30",
        title: "Realidade Virtual e Aumentada",
        speaker: "Cecilia Silva",
        description: "Criando experiências imersivas através de tecnologias de VR e AR.",
        tags: ["VR", "AR", "Imersão"],
        block: "afternoon"
    },
    {
        id: 13,
        time: "14:30 - 14:45",
        title: "Metodologias Ágeis e Scrum",
        speaker: "Jessica Alexandra",
        description: "Implementando metodologias ágeis para aumentar a produtividade e qualidade do software.",
        tags: ["Agile", "Scrum", "Gestão"],
        block: "afternoon"
    },
    {
        id: 14,
        time: "14:45 - 15:00",
        title: "Big Data e Analytics",
        speaker: "Jessica Borges",
        description: "Processando e analisando grandes volumes de dados para insights estratégicos.",
        tags: ["Big Data", "Analytics", "Hadoop"],
        block: "afternoon"
    },
    {
        id: 15,
        time: "15:00 - 15:15",
        title: "Automação e Robótica",
        speaker: "Karina Kaori",
        description: "Como a automação e robótica estão revolucionando indústrias inteiras.",
        tags: ["Automação", "Robótica", "Indústria 4.0"],
        block: "afternoon"
    },
    {
        id: 16,
        time: "15:15 - 15:30",
        title: "Liderança Técnica Feminina",
        speaker: "Keline",
        description: "Desenvolvendo habilidades de liderança e quebrando barreiras na área técnica.",
        tags: ["Liderança", "Carreira", "Empoderamento"],
        block: "afternoon"
    },
    {
        id: 17,
        time: "15:30 - 15:45",
        title: "Open Source e Comunidades Tech",
        speaker: "Luciana Damasceno",
        description: "A importância do código aberto e como contribuir para comunidades tecnológicas.",
        tags: ["Open Source", "Comunidade", "Colaboração"],
        block: "afternoon"
    },
    {
        id: 18,
        time: "15:45 - 16:00",
        title: "Sustentabilidade na Tecnologia",
        speaker: "Rhaissa Barbosa",
        description: "Como a tecnologia pode ser uma ferramenta poderosa para a sustentabilidade ambiental.",
        tags: ["Sustentabilidade", "Green Tech", "Meio Ambiente"],
        block: "afternoon"
    },
    {
        id: 19,
        time: "16:00 - 16:15",
        title: "Empreendedorismo Tech Feminino",
        speaker: "Helena",
        description: "Construindo startups de sucesso e superando desafios no ecossistema empreendedor.",
        tags: ["Empreendedorismo", "Startup", "Inovação"],
        block: "afternoon"
    },
    {
        id: 20,
        time: "16:15 - 16:30",
        title: "O Futuro das Mulheres na Tecnologia",
        speaker: "Juliana Lisboa",
        description: "Reflexões sobre conquistas, desafios e o futuro promissor das mulheres no setor tech.",
        tags: ["Futuro", "Mulheres", "Tecnologia"],
        block: "afternoon"
    }
];

// Dados da agenda atualizada para 2 blocos
const scheduleItems = [
    { time: "09:00", title: "Credenciamento", description: "Recepção e entrega de materiais" },
    { time: "10:00", title: "Abertura", description: "Cerimônia de abertura e boas-vindas (10 minutos)" },
    { time: "10:10", title: "Bloco 1 - Manhã", description: "10 palestras técnicas (15 min cada)" },
    { time: "12:40", title: "Encerramento Bloco 1", description: "Encerramento do bloco da manhã" },
    { time: "13:00", title: "Almoço", description: "Intervalo para almoço e networking (1 hora)" },
    { time: "14:00", title: "Bloco 2 - Tarde", description: "10 palestras técnicas (15 min cada)" },
    { time: "16:30", title: "Encerramento", description: "Cerimônia de formatura e networking final" }
];

// Função para renderizar palestrantes
function renderSpeakers() {
    const container = document.getElementById('speakers-container');
    if (!container) return;

    container.innerHTML = speakers.map(speaker => `
        <div class="speaker-card fade-in">
            <div class="speaker-image">
                <i class="fas fa-user"></i>
            </div>
            <div class="speaker-info">
                <div class="speaker-name">${speaker.name}</div>
                <div class="speaker-role">${speaker.role}</div>
                <div class="speaker-company">${speaker.company}</div>
                <div class="speaker-bio">${speaker.bio}</div>
                <div class="speaker-expertise">
                    ${speaker.expertise.map(exp => `<span class="expertise-tag">${exp}</span>`).join('')}
                </div>
                <div class="speaker-social">
                    <a href="${speaker.social.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="${speaker.social.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="${speaker.social.github}" target="_blank"><i class="fab fa-github"></i></a>
                </div>
            </div>
        </div>
    `).join('');
}

// Função para renderizar palestras
function renderTalks() {
    const container = document.getElementById('talks-container');
    if (!container) return;

    container.innerHTML = talks.map(talk => `
        <div class="talk-card fade-in">
            <div class="talk-header">
                <div class="talk-time">${talk.time}</div>
                <div class="talk-title">${talk.title}</div>
                <div class="talk-speaker">por ${talk.speaker}</div>
            </div>
            <div class="talk-content">
                <div class="talk-description">${talk.description}</div>
                <div class="talk-tags">
                    ${talk.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Função para renderizar agenda
function renderSchedule() {
    const container = document.getElementById('schedule-container');
    if (!container) return;

    const morningTalks = talks.filter(talk => talk.block === 'morning');
    const afternoonTalks = talks.filter(talk => talk.block === 'afternoon');

    container.innerHTML = `
        <div class="schedule-blocks">
            <div class="schedule-block">
                <div class="block-header">
                    <div class="block-title">Bloco 1 - Manhã</div>
                    <div class="block-time">10:10 - 12:40</div>
                </div>
                <div class="block-talks">
                    ${morningTalks.map(talk => `
                        <div class="block-talk">
                            <div class="talk-time-small">${talk.time.split(' - ')[0]}</div>
                            <div class="talk-details">
                                <div class="talk-title-small">${talk.title}</div>
                                <div class="talk-speaker-small">${talk.speaker}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="schedule-block">
                <div class="block-header">
                    <div class="block-title">Bloco 2 - Tarde</div>
                    <div class="block-time">14:00 - 16:30</div>
                </div>
                <div class="block-talks">
                    ${afternoonTalks.map(talk => `
                        <div class="block-talk">
                            <div class="talk-time-small">${talk.time.split(' - ')[0]}</div>
                            <div class="talk-details">
                                <div class="talk-title-small">${talk.title}</div>
                                <div class="talk-speaker-small">${talk.speaker}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <div class="timeline">
            ${scheduleItems.map(item => `
                <div class="timeline-item fade-in">
                    <div class="timeline-time">${item.time}</div>
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                </div>
            `).join('')}
        </div>
    `;
}

// Função para smooth scroll
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Função para animação de fade-in
function fadeInAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Menu mobile toggle
function mobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Header scroll effect
function headerScrollEffect() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
}

// Função para adicionar interatividade aos cards
function addCardInteractions() {
    // Efeito hover nos cards de palestra
    document.querySelectorAll('.talk-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        });
    });

    // Efeito hover nos cards de feature
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        });
    });
}

// Função para contagem regressiva (opcional)
function addCountdown() {
    // Aqui você pode adicionar uma data específica do evento
    const eventDate = new Date('2025-12-15T09:00:00');
    
    function updateCountdown() {
        const now = new Date();
        const diff = eventDate - now;
        
        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            
            // Você pode adicionar um elemento no HTML para mostrar a contagem
            const countdownEl = document.getElementById('countdown');
            if (countdownEl) {
                countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m`;
            }
        }
    }
    
    // Atualizar a cada minuto
    setInterval(updateCountdown, 60000);
    updateCountdown();
}

// Função para busca de palestras
function addSearchFunction() {
    const searchInput = document.getElementById('search-talks');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredTalks = talks.filter(talk => 
            talk.title.toLowerCase().includes(searchTerm) ||
            talk.speaker.toLowerCase().includes(searchTerm) ||
            talk.description.toLowerCase().includes(searchTerm) ||
            talk.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        
        renderFilteredTalks(filteredTalks);
    });
}

function renderFilteredTalks(filteredTalks) {
    const container = document.getElementById('talks-container');
    if (!container) return;

    container.innerHTML = filteredTalks.map(talk => `
        <div class="talk-card fade-in visible">
            <div class="talk-header">
                <div class="talk-time">${talk.time}</div>
                <div class="talk-title">${talk.title}</div>
                <div class="talk-speaker">por ${talk.speaker}</div>
            </div>
            <div class="talk-content">
                <div class="talk-description">${talk.description}</div>
                <div class="talk-tags">
                    ${talk.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    addCardInteractions();
}

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    renderTalks();
    renderSchedule();
    smoothScroll();
    mobileMenu();
    headerScrollEffect();
    
    // Pequeno delay para animações
    setTimeout(() => {
        fadeInAnimation();
        addCardInteractions();
        addCountdown();
        addSearchFunction();
    }, 100);
});

// Função para compartilhar nas redes sociais
function shareOnSocial(platform, text, url) {
    const shareText = encodeURIComponent(text);
    const shareUrl = encodeURIComponent(url);
    let shareLink = '';
    
    switch(platform) {
        case 'twitter':
            shareLink = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;
            break;
        case 'linkedin':
            shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
            break;
        case 'facebook':
            shareLink = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
            break;
    }
    
    if (shareLink) {
        window.open(shareLink, '_blank', 'width=600,height=400');
    }
}

// Adicionar botões de compartilhamento (opcional)
function addSocialSharing() {
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const platform = this.dataset.platform;
            const text = 'Confira o evento "O Palco é Delas" - Empoderando mulheres na tecnologia!';
            const url = window.location.href;
            shareOnSocial(platform, text, url);
        });
    });
}

// Função para mostrar detalhes da palestra em modal (opcional)
function showTalkDetails(talkId) {
    const talk = talks.find(t => t.id === talkId);
    if (!talk) return;
    
    // Criar modal (você precisará adicionar o CSS correspondente)
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>${talk.title}</h2>
            <p><strong>Palestrante:</strong> ${talk.speaker}</p>
            <p><strong>Horário:</strong> ${talk.time}</p>
            <p><strong>Descrição:</strong> ${talk.description}</p>
            <div class="talk-tags">
                ${talk.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Fechar modal
    modal.querySelector('.close').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Adicionar função de impressão da agenda
function printSchedule() {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>Agenda - O Palco é Delas</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    h1 { color: #6b46c1; }
                    .schedule-item { margin-bottom: 15px; padding: 10px; border-left: 4px solid #e11d48; }
                    .time { font-weight: bold; color: #6b46c1; }
                </style>
            </head>
            <body>
                <h1>O Palco é Delas - Agenda do Evento</h1>
                ${scheduleItems.map(item => `
                    <div class="schedule-item">
                        <div class="time">${item.time}</div>
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                `).join('')}
            </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}
