// JavaScript específico para a página de palestras

// Função para renderizar palestras na página dedicada
function renderTalksPage() {
    const container = document.getElementById('talks-container');
    if (!container) return;

    container.innerHTML = talks.map(talk => {
        const placeholderClass = talk.isPlaceholder ? 'placeholder-talk' : '';
        const speakerLink = `<a href="palestrantes.html?speaker=${encodeURIComponent(talk.speaker)}" class="speaker-link">${talk.speaker}</a>`;
        
        return `
        <div class="talk-card-detailed fade-in ${placeholderClass}" 
             data-block="${talk.block}" 
             data-category="${getCategoryFromTags(talk.tags)}"
             data-time="${talk.time}">
            <div class="talk-header-detailed">
                <div class="talk-time-badge ${talk.block}">
                    <i class="fas fa-clock"></i>
                    ${talk.time}
                </div>
                <div class="talk-block-badge ${talk.block}">
                    ${talk.block === 'morning' ? '🌅 Manhã' : '🌇 Tarde'}
                </div>
            </div>
            
            <div class="talk-content-detailed">
                <h3 class="talk-title-detailed">${talk.title}</h3>
                <div class="talk-speaker-info">
                    <i class="fas fa-user-circle"></i>
                    <span class="speaker-name">${speakerLink}</span>
                </div>
                
                <div class="talk-description-detailed">
                    <p>${talk.description}</p>
                </div>
                
                <div class="talk-tags-detailed">
                    ${talk.tags.map(tag => `<span class="tag-detailed ${getTagClass(tag)} ${talk.isPlaceholder ? 'tag-placeholder' : ''}">${tag}</span>`).join('')}
                </div>
                
                ${talk.isPlaceholder ? `
                <div class="placeholder-notice-detailed">
                    <i class="fas fa-edit"></i>
                    <span>Esta palestra será personalizada pela palestrante</span>
                    <a href="GUIA-CONTRIBUICAO.md" class="edit-guide-link">Ver guia de edição</a>
                </div>
                ` : ''}
            </div>
            
            <div class="talk-actions">
                <button class="btn-icon" onclick="viewSpeakerProfile('${talk.speaker}')" title="Ver perfil da palestrante">
                    <i class="fas fa-user"></i>
                </button>
                ${!talk.isPlaceholder ? `
                <button class="btn-icon" onclick="shareTalk(${talk.id})" title="Compartilhar palestra">
                    <i class="fas fa-share-alt"></i>
                </button>
                <button class="btn-icon" onclick="addToFavorites(${talk.id})" title="Adicionar aos favoritos">
                    <i class="far fa-heart"></i>
                </button>
                <button class="btn-icon" onclick="addToCalendar(${talk.id})" title="Adicionar ao calendário">
                    <i class="fas fa-calendar-plus"></i>
                </button>
                ` : `
                <button class="btn-icon disabled" title="Disponível após personalização">
                    <i class="fas fa-share-alt"></i>
                </button>
                <button class="btn-icon disabled" title="Disponível após personalização">
                    <i class="far fa-heart"></i>
                </button>
                <button class="btn-icon disabled" title="Disponível após personalização">
                    <i class="fas fa-calendar-plus"></i>
                </button>
                `}
            </div>
        </div>
    `;
    }).join('');
}

// Função para determinar categoria baseada nas tags
function getCategoryFromTags(tags) {
    const categoryMap = {
        'IA': 'tech',
        'Machine Learning': 'tech',
        'Frontend': 'development',
        'React': 'development',
        'Vue.js': 'development',
        'JavaScript': 'development',
        'Python': 'development',
        'Segurança': 'tech',
        'DevOps': 'development',
        'Cloud': 'tech',
        'Data Science': 'data',
        'ML': 'data',
        'UX': 'design',
        'UI': 'design',
        'Design': 'design',
        'Blockchain': 'tech',
        'Mobile': 'development',
        'IoT': 'tech',
        'Arquitetura': 'development',
        'Quantum': 'innovation',
        'VR': 'innovation',
        'AR': 'innovation',
        'Agile': 'career',
        'Scrum': 'career',
        'Big Data': 'data',
        'Analytics': 'data',
        'Liderança': 'career',
        'Carreira': 'career',
        'Empreendedorismo': 'career'
    };
    
    for (const tag of tags) {
        if (categoryMap[tag]) {
            return categoryMap[tag];
        }
    }
    return 'tech'; // default
}

// Função para aplicar classes CSS baseadas nas tags
function getTagClass(tag) {
    const tagClasses = {
        'IA': 'tag-ai',
        'Machine Learning': 'tag-ai',
        'Frontend': 'tag-dev',
        'React': 'tag-dev',
        'Vue.js': 'tag-dev',
        'JavaScript': 'tag-dev',
        'Python': 'tag-dev',
        'Segurança': 'tag-security',
        'DevOps': 'tag-devops',
        'Cloud': 'tag-cloud',
        'Data Science': 'tag-data',
        'ML': 'tag-data',
        'UX': 'tag-design',
        'UI': 'tag-design',
        'Design': 'tag-design',
        'Blockchain': 'tag-blockchain',
        'Mobile': 'tag-mobile',
        'IoT': 'tag-iot',
        'Liderança': 'tag-leadership',
        'Carreira': 'tag-career'
    };
    
    return tagClasses[tag] || 'tag-default';
}

// Função para renderizar timeline do cronograma
function renderScheduleTimeline() {
    const container = document.getElementById('timeline-container');
    if (!container) return;

    const morningTalks = talks.filter(talk => talk.block === 'morning');
    const afternoonTalks = talks.filter(talk => talk.block === 'afternoon');

    container.innerHTML = `
        <div class="timeline-block">
            <div class="timeline-header morning">
                <h3><i class="fas fa-sun"></i> Bloco 1 - Manhã</h3>
                <span class="block-time">10:10 - 12:40</span>
            </div>
            <div class="timeline-talks">
                ${morningTalks.map(talk => `
                    <div class="timeline-talk" data-talk-id="${talk.id}">
                        <div class="timeline-time">${talk.time.split(' - ')[0]}</div>
                        <div class="timeline-content">
                            <h4>${talk.title}</h4>
                            <span class="timeline-speaker">${talk.speaker}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="timeline-break">
            <div class="break-info">
                <i class="fas fa-utensils"></i>
                <div>
                    <h4>Intervalo para Almoço</h4>
                    <span>12:40 - 14:00 (1h 20min)</span>
                </div>
            </div>
        </div>

        <div class="timeline-block">
            <div class="timeline-header afternoon">
                <h3><i class="fas fa-moon"></i> Bloco 2 - Tarde</h3>
                <span class="block-time">14:00 - 16:30</span>
            </div>
            <div class="timeline-talks">
                ${afternoonTalks.map(talk => `
                    <div class="timeline-talk" data-talk-id="${talk.id}">
                        <div class="timeline-time">${talk.time.split(' - ')[0]}</div>
                        <div class="timeline-content">
                            <h4>${talk.title}</h4>
                            <span class="timeline-speaker">${talk.speaker}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Função de busca de palestras
function setupTalkSearch() {
    const searchInput = document.getElementById('search-talks');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        filterTalks(searchTerm);
    });
}

// Função para filtrar palestras
function filterTalks(searchTerm = '', category = 'all', block = 'all') {
    const talkCards = document.querySelectorAll('.talk-card-detailed');
    let visibleCount = 0;
    
    talkCards.forEach(card => {
        const title = card.querySelector('.talk-title-detailed').textContent.toLowerCase();
        const speaker = card.querySelector('.speaker-name').textContent.toLowerCase();
        const description = card.querySelector('.talk-description-detailed').textContent.toLowerCase();
        const tags = Array.from(card.querySelectorAll('.tag-detailed')).map(tag => tag.textContent.toLowerCase());
        
        const matchesSearch = searchTerm === '' || 
            title.includes(searchTerm) ||
            speaker.includes(searchTerm) ||
            description.includes(searchTerm) ||
            tags.some(tag => tag.includes(searchTerm));
        
        const matchesCategory = category === 'all' || card.dataset.category === category;
        const matchesBlock = block === 'all' || card.dataset.block === block;
        
        if (matchesSearch && matchesCategory && matchesBlock) {
            card.style.display = 'block';
            card.classList.add('fade-in');
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Mostrar mensagem se não houver resultados
    const noResults = document.getElementById('no-results');
    if (visibleCount === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
    
    updateTalksCount(visibleCount);
}

// Função para configurar filtros por categoria
function setupCategoryFilters() {
    const categoryTags = document.querySelectorAll('.category-tag');
    
    categoryTags.forEach(tag => {
        tag.addEventListener('click', function() {
            categoryTags.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            const searchTerm = document.getElementById('search-talks').value.toLowerCase();
            const activeBlock = document.querySelector('.block-nav-btn.active').dataset.block;
            
            filterTalks(searchTerm, category, activeBlock);
        });
    });
}

// Função para configurar navegação de blocos
function setupBlockNavigation() {
    const blockBtns = document.querySelectorAll('.block-nav-btn');
    
    blockBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            blockBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const block = this.dataset.block;
            const searchTerm = document.getElementById('search-talks').value.toLowerCase();
            const activeCategory = document.querySelector('.category-tag.active').dataset.category;
            
            filterTalks(searchTerm, activeCategory, block);
        });
    });
}

// Função para atualizar contador de palestras
function updateTalksCount(count) {
    let counter = document.querySelector('.talks-counter');
    if (!counter) {
        counter = document.createElement('div');
        counter.className = 'talks-counter';
        const filtersSection = document.querySelector('.talks-filters .container');
        filtersSection.appendChild(counter);
    }
    
    const total = talks.length;
    counter.innerHTML = `Mostrando ${count} de ${total} palestras`;
}

// Função para ver perfil da palestrante
function viewSpeakerProfile(speakerName) {
    window.location.href = `palestrantes.html?speaker=${encodeURIComponent(speakerName)}`;
}

// Função para compartilhar palestra
function shareTalk(talkId) {
    const talk = talks.find(t => t.id === talkId);
    if (!talk) return;
    
    const shareData = {
        title: `${talk.title} - O Palco é Delas`,
        text: `"${talk.title}" por ${talk.speaker} - ${talk.description}`,
        url: `${window.location.origin}/palestras.html#talk-${talkId}`
    };
    
    if (navigator.share) {
        navigator.share(shareData);
    } else {
        const text = `${shareData.text} - ${shareData.url}`;
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Link copiado para a área de transferência!');
        });
    }
}

// Função para adicionar aos favoritos
function addToFavorites(talkId) {
    const favorites = JSON.parse(localStorage.getItem('favoriteTalks') || '[]');
    
    if (!favorites.includes(talkId)) {
        favorites.push(talkId);
        localStorage.setItem('favoriteTalks', JSON.stringify(favorites));
        showNotification('Palestra adicionada aos favoritos!');
        updateFavoriteButtons();
    } else {
        showNotification('Esta palestra já está nos seus favoritos!');
    }
}

// Função para adicionar ao calendário
function addToCalendar(talkId) {
    const talk = talks.find(t => t.id === talkId);
    if (!talk) return;
    
    const eventDate = '2025-12-15'; // Data do evento
    const startTime = talk.time.split(' - ')[0].replace(':', '');
    const endTime = talk.time.split(' - ')[1].replace(':', '');
    
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(talk.title)}&dates=${eventDate}T${startTime}00/${eventDate}T${endTime}00&details=${encodeURIComponent(talk.description)}&location=Evento O Palco é Delas`;
    
    window.open(calendarUrl, '_blank');
}

// Função para mostrar notificações
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
}

// Função para atualizar botões de favoritos
function updateFavoriteButtons() {
    const favorites = JSON.parse(localStorage.getItem('favoriteTalks') || '[]');
    
    document.querySelectorAll('[onclick*="addToFavorites"]').forEach(btn => {
        const talkId = parseInt(btn.getAttribute('onclick').match(/\d+/)[0]);
        const icon = btn.querySelector('i');
        
        if (favorites.includes(talkId)) {
            icon.className = 'fas fa-heart';
            btn.style.color = '#e74c3c';
        } else {
            icon.className = 'far fa-heart';
            btn.style.color = '';
        }
    });
}

// Função para animação dos cards
function animateTalkCards() {
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

    document.querySelectorAll('.talk-card-detailed').forEach(card => {
        observer.observe(card);
    });
}

// Função para efeitos hover nos cards
function addTalkCardEffects() {
    document.querySelectorAll('.talk-card-detailed').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });
}

// Função para smooth scroll nos links da timeline
function setupTimelineLinks() {
    document.querySelectorAll('.timeline-talk').forEach(item => {
        item.addEventListener('click', function() {
            const talkId = this.dataset.talkId;
            const talkCard = document.querySelector(`[data-talk-id="${talkId}"]`);
            
            if (talkCard) {
                talkCard.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                
                // Highlight effect
                talkCard.style.background = '#fff9f3';
                setTimeout(() => {
                    talkCard.style.background = '';
                }, 2000);
            }
        });
    });
}

// Inicialização da página de palestras
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se estamos na página de palestras
    if (document.querySelector('.talks-page')) {
        renderTalksPage();
        renderScheduleTimeline();
        setupTalkSearch();
        setupCategoryFilters();
        setupBlockNavigation();
        
        // Pequeno delay para animações
        setTimeout(() => {
            animateTalkCards();
            addTalkCardEffects();
            updateFavoriteButtons();
            setupTimelineLinks();
            updateTalksCount(talks.length);
        }, 100);
        
        // Verificar se há um palestrante específico na URL
        const urlParams = new URLSearchParams(window.location.search);
        const speakerParam = urlParams.get('speaker');
        if (speakerParam) {
            document.getElementById('search-talks').value = speakerParam;
            filterTalks(speakerParam.toLowerCase());
        }
    }
});

// Função para exportar agenda
function exportSchedule() {
    const scheduleData = talks.map(talk => ({
        horario: talk.time,
        titulo: talk.title,
        palestrante: talk.speaker,
        descricao: talk.description,
        tags: talk.tags.join(', '),
        bloco: talk.block === 'morning' ? 'Manhã' : 'Tarde'
    }));
    
    const csv = [
        Object.keys(scheduleData[0]).join(','),
        ...scheduleData.map(row => Object.values(row).map(val => `"${val}"`).join(','))
    ].join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'agenda-o-palco-e-delas.csv';
    link.click();
}
