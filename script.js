document.addEventListener("DOMContentLoaded", () => {
  // ==================== VARIÁVEIS GLOBAIS ====================
  const backToTopButton = document.querySelector(".back-to-top")
  const scrollProgress = document.querySelector(".scroll-progress")
  const rightSidebar = document.querySelector(".right-sidebar")
  const leftSidebar = document.querySelector(".sidebar")
  const scrollIndicator = document.querySelector(".scroll-indicator")
  const posts = document.querySelector(".posts")
  const postInput = document.querySelector(".post-input input")
  const postBtn = document.querySelector(".post-btn")
  const searchInput = document.querySelector(".search-container input")

  let isLoading = false
  let postCounter = 5 // Começamos com 5 posts já existentes

  // ==================== DADOS MOCK COM IMAGENS CONFIÁVEIS ====================
  const mockPosts = [
    {
      title: "Como otimizar consultas SQL para melhor performance?",
      tags: ["SQL", "Banco de dados", "Performance"],
      author: "Marina Silva",
      content: "Dicas essenciais para melhorar a performance das suas consultas SQL...",
      image: "https://picsum.photos/400/300?random=100",
      authorImg: "https://i.pravatar.cc/32?img=5",
    },
    {
      title: "Introdução ao Docker: Como containerizar suas aplicações",
      tags: ["Docker", "DevOps", "Containers"],
      author: "Carlos Mendes",
      content: "Aprenda os conceitos básicos do Docker e como usar containers...",
      image: "https://picsum.photos/400/300?random=101",
      authorImg: "https://i.pravatar.cc/32?img=11",
    },
    {
      title: "Melhores práticas de segurança para aplicações web",
      tags: ["Segurança", "Web", "OWASP"],
      author: "Julia Almeida",
      content: "Proteja suas aplicações web seguindo as melhores práticas...",
      image: "https://picsum.photos/400/300?random=102",
      authorImg: "https://i.pravatar.cc/32?img=20",
    },
    {
      title: "Como implementar autenticação JWT em APIs REST",
      tags: ["API", "JWT", "Autenticação"],
      author: "Rafael Costa",
      content: "Guia completo para implementar JWT em suas APIs...",
      image: "https://picsum.photos/400/300?random=103",
      authorImg: "https://i.pravatar.cc/32?img=30",
    },
    {
      title: "Introdução ao Machine Learning com Python",
      tags: ["Python", "ML", "IA"],
      author: "Ana Santos",
      content: "Primeiros passos no mundo do aprendizado de máquina...",
      image: "https://picsum.photos/400/300?random=104",
      authorImg: "https://i.pravatar.cc/32?img=40",
    },
    {
      title: "Desenvolvimento Frontend com React e TypeScript",
      tags: ["React", "TypeScript", "Frontend"],
      author: "Pedro Lima",
      content: "Como criar aplicações robustas com React e TypeScript...",
      image: "https://picsum.photos/400/300?random=105",
      authorImg: "https://i.pravatar.cc/32?img=50",
    },
    {
      title: "Microserviços: Arquitetura e implementação",
      tags: ["Microserviços", "Arquitetura", "Backend"],
      author: "Fernanda Rocha",
      content: "Entenda como projetar e implementar microserviços...",
      image: "https://picsum.photos/400/300?random=106",
      authorImg: "https://i.pravatar.cc/32?img=60",
    },
    {
      title: "CI/CD com GitHub Actions: Automatizando deploys",
      tags: ["CI/CD", "GitHub", "DevOps"],
      author: "Lucas Oliveira",
      content: "Automatize seus deploys com GitHub Actions...",
      image: "https://picsum.photos/400/300?random=107",
      authorImg: "https://i.pravatar.cc/32?img=70",
    },
    {
      title: "Desenvolvimento Mobile com Flutter",
      tags: ["Flutter", "Mobile", "Dart"],
      author: "Carla Santos",
      content: "Criando apps multiplataforma com Flutter...",
      image: "https://picsum.photos/400/300?random=108",
      authorImg: "https://i.pravatar.cc/32?img=25",
    },
    {
      title: "Inteligência Artificial: Tendências para 2024",
      tags: ["IA", "Machine Learning", "Futuro"],
      author: "Roberto Tech",
      content: "As principais tendências em IA para o próximo ano...",
      image: "https://picsum.photos/400/300?random=109",
      authorImg: "https://i.pravatar.cc/32?img=35",
    },
    {
      title: "Blockchain e Criptomoedas: Guia para iniciantes",
      tags: ["Blockchain", "Crypto", "Web3"],
      author: "Amanda Crypto",
      content: "Entenda os fundamentos da tecnologia blockchain...",
      image: "https://picsum.photos/400/300?random=110",
      authorImg: "https://i.pravatar.cc/32?img=15",
    },
    {
      title: "Cloud Computing: AWS vs Azure vs Google Cloud",
      tags: ["Cloud", "AWS", "Azure"],
      author: "Felipe Cloud",
      content: "Comparativo entre as principais plataformas de nuvem...",
      image: "https://picsum.photos/400/300?random=111",
      authorImg: "https://i.pravatar.cc/32?img=55",
    },
  ]

  const mockTechnologies = [
    { name: "Next.js", trend: "+25%", icon: "fab fa-react", color: "#ff6b35" },
    { name: "TypeScript", trend: "+18%", icon: "fab fa-js-square", color: "#4299e1" },
    { name: "Kubernetes", trend: "+30%", icon: "fas fa-server", color: "#48bb78" },
    { name: "GraphQL", trend: "+12%", icon: "fas fa-project-diagram", color: "#ed8936" },
    { name: "Rust", trend: "+45%", icon: "fas fa-cog", color: "#e53e3e" },
  ]

  const mockCommunities = [
    { name: "Vue.js Brasil", members: "15.2k", online: "312", avatar: "https://picsum.photos/40/40?random=30" },
    { name: "Angular Community", members: "11.8k", online: "198", avatar: "https://picsum.photos/40/40?random=31" },
    { name: "Node.js Developers", members: "18.5k", online: "445", avatar: "https://picsum.photos/40/40?random=32" },
    { name: "Flutter Brasil", members: "9.3k", online: "167", avatar: "https://picsum.photos/40/40?random=33" },
    { name: "Data Science", members: "9.1k", online: "198", avatar: "https://picsum.photos/40/40?random=34" },
    { name: "React Native", members: "7.3k", online: "145", avatar: "https://picsum.photos/40/40?random=35" },
    { name: "AWS Users", members: "12.7k", online: "267", avatar: "https://picsum.photos/40/40?random=36" },
    { name: "DevSecOps", members: "5.9k", online: "98", avatar: "https://picsum.photos/40/40?random=37" },
  ]

  const mockMeetups = [
    { title: "Workshop de Kubernetes", description: "Aprenda a orquestrar containers...", time: "há 5 min" },
    { title: "Palestra sobre GraphQL", description: "APIs modernas com GraphQL...", time: "há 8 min" },
    { title: "Hackathon de IA", description: "48h criando soluções com IA...", time: "há 12 min" },
    { title: "Meetup de Blockchain", description: "Tecnologias descentralizadas...", time: "há 18 min" },
  ]

  const mockPodcasts = [
    {
      title: "O futuro do desenvolvimento web em 2024",
      time: "há 3 min",
      image: "https://picsum.photos/60/60?random=40",
    },
    {
      title: "Carreira em tecnologia: dicas para iniciantes",
      time: "há 7 min",
      image: "https://picsum.photos/60/60?random=41",
    },
    {
      title: "Inteligência Artificial e ética na programação",
      time: "há 11 min",
      image: "https://picsum.photos/60/60?random=42",
    },
    {
      title: "DevOps na prática: ferramentas e metodologias",
      time: "há 16 min",
      image: "https://picsum.photos/60/60?random=43",
    },
  ]

  // ==================== FUNÇÕES DE UTILIDADE ====================
  function generateRandomStats() {
    return {
      views: Math.floor(Math.random() * 500000) + 10000,
      likes: Math.floor(Math.random() * 50000) + 100,
      comments: Math.floor(Math.random() * 1000) + 10,
    }
  }

  function formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k"
    }
    return num.toString()
  }

  function getTimeAgo() {
    const times = ["há 2 min", "há 5 min", "há 8 min", "há 12 min", "há 15 min", "há 20 min"]
    return times[Math.floor(Math.random() * times.length)]
  }

  // ==================== FUNÇÕES DE SCROLL ====================
  function toggleBackToTopButton() {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("visible")
    } else {
      backToTopButton.classList.remove("visible")
    }
  }

  function updateScrollProgress() {
    const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = (window.scrollY / scrollTotal) * 100
    scrollProgress.style.width = Math.min(scrolled, 100) + "%"
  }

  function checkSidebarScroll(sidebar, indicator) {
    if (sidebar && indicator) {
      const hasMoreContent = sidebar.scrollHeight > sidebar.clientHeight
      const isAtTop = sidebar.scrollTop < 10

      if (hasMoreContent && isAtTop) {
        indicator.classList.add("visible")
      } else {
        indicator.classList.remove("visible")
      }
    }
  }

  // ==================== FUNÇÕES DE CRIAÇÃO DE ELEMENTOS ====================
  function createPost(postData, number) {
    const stats = generateRandomStats()
    const post = document.createElement("article")
    post.className = "post fade-in"

    post.innerHTML = `
            <div class="post-image">
                <img src="${postData.image}" alt="${postData.title}" onerror="this.src='https://via.placeholder.com/400x300/2d3748/ffffff?text=Imagem+Indisponível'">
                <div class="post-stats">
                    <span class="views">${formatNumber(stats.views)}</span>
                </div>
            </div>
            <div class="post-content">
                <h3>${postData.title}</h3>
                <div class="post-tags">
                    ${postData.tags.map((tag) => `<span>${tag}</span>`).join("")}
                </div>
                <div class="post-footer">
                    <div class="author">
                        <img src="${postData.authorImg}" alt="${postData.author}">
                        <span>${postData.author}</span>
                    </div>
                    <div class="post-meta">
                        <span>${formatNumber(stats.views)} Visualizações</span>
                        <span>${formatNumber(stats.likes)} Curtidas</span>
                        <span>${stats.comments} Comentários</span>
                    </div>
                </div>
            </div>
            <div class="post-actions">
                <span class="out-badge">OUT</span>
                <span class="post-number">${number}</span>
            </div>
        `

    return post
  }

  function createUserPost(content) {
    postCounter++
    const post = document.createElement("article")
    post.className = "post fade-in user-post"

    post.innerHTML = `
            <div class="post-image">
                <img src="https://picsum.photos/400/300?random=${Date.now()}" alt="Novo Post" onerror="this.src='https://via.placeholder.com/400x300/2d3748/ffffff?text=Novo+Post'">
                <div class="post-stats">
                    <span class="views">0</span>
                </div>
            </div>
            <div class="post-content">
                <h3>${content}</h3>
                <div class="post-tags">
                    <span>Discussão</span>
                    <span>Novo</span>
                </div>
                <div class="post-footer">
                    <div class="author">
                        <img src="https://i.pravatar.cc/32?img=68" alt="J.A.R.V.I.S.">
                        <span>J.A.R.V.I.S.</span>
                    </div>
                    <div class="post-meta">
                        <span>0 Visualizações</span>
                        <span>0 Curtidas</span>
                        <span>0 Comentários</span>
                    </div>
                </div>
            </div>
            <div class="post-actions">
                <span class="out-badge">NEW</span>
                <span class="post-number">${postCounter}</span>
            </div>
        `

    return post
  }

  function createLoadingIndicator() {
    const loadingIndicator = document.createElement("div")
    loadingIndicator.className = "loading-indicator"
    loadingIndicator.innerHTML = `
            <div class="loader-content">
                <div class="spinner"></div>
                <span>Carregando mais posts...</span>
            </div>
        `
    return loadingIndicator
  }

  function createTechItem(tech) {
    return `
            <div class="tech-item" data-tech="${tech.name}">
                <div class="tech-icon">
                    <i class="${tech.icon}" style="color: ${tech.color}"></i>
                </div>
                <div class="tech-info">
                    <span class="tech-name">${tech.name}</span>
                    <span class="tech-trend">${tech.trend} esta semana</span>
                </div>
                <div class="tech-arrow">
                    <i class="fas fa-arrow-up"></i>
                </div>
            </div>
        `
  }

  function createCommunityItem(community) {
    return `
            <div class="community-item" data-community="${community.name}">
                <div class="community-avatar">
                    <img src="${community.avatar}" alt="${community.name}" onerror="this.src='https://via.placeholder.com/40x40/4a5568/ffffff?text=${community.name.charAt(0)}'">
                </div>
                <div class="community-info">
                    <span class="community-name">${community.name}</span>
                    <span class="community-members">${community.members} membros</span>
                </div>
                <div class="community-status">
                    <div class="status-dot active"></div>
                    <span class="status-text">${community.online} online</span>
                </div>
            </div>
        `
  }

  // ==================== FUNÇÕES DE CARREGAMENTO DE CONTEÚDO ====================
  function loadMorePosts() {
    if (isLoading) return
    isLoading = true

    const sentinel = document.querySelector(".scroll-sentinel")
    const loadingIndicator = createLoadingIndicator()
    posts.insertBefore(loadingIndicator, sentinel)

    setTimeout(() => {
      loadingIndicator.remove()

      // Adicionar 2-3 novos posts
      const numNewPosts = Math.floor(Math.random() * 2) + 2
      for (let i = 0; i < numNewPosts; i++) {
        const randomPost = mockPosts[Math.floor(Math.random() * mockPosts.length)]
        postCounter++
        const newPost = createPost(randomPost, postCounter)
        posts.insertBefore(newPost, sentinel)

        // Animar entrada do novo post
        setTimeout(() => {
          newPost.classList.add("visible")
        }, i * 200)
      }

      isLoading = false
    }, 1500)
  }

  function updateTrendingTech() {
    const trendingTechContainer = document.querySelector(".trending-tech")
    if (!trendingTechContainer) return

    // Misturar tecnologias existentes com novas
    const allTechs = [...mockTechnologies]
    const randomTechs = allTechs.sort(() => 0.5 - Math.random()).slice(0, 5)

    const techItemsContainer =
      trendingTechContainer.querySelector(".tech-items") ||
      (() => {
        const container = document.createElement("div")
        container.className = "tech-items"
        trendingTechContainer.appendChild(container)
        return container
      })()

    techItemsContainer.innerHTML = randomTechs.map(createTechItem).join("")
  }

  function updateActiveCommunities() {
    const activeCommunitiesContainer = document.querySelector(".active-communities")
    if (!activeCommunitiesContainer) return

    const randomCommunities = mockCommunities.sort(() => 0.5 - Math.random()).slice(0, 4)

    const communityItemsContainer =
      activeCommunitiesContainer.querySelector(".community-items") ||
      (() => {
        const container = document.createElement("div")
        container.className = "community-items"
        activeCommunitiesContainer.appendChild(container)
        return container
      })()

    communityItemsContainer.innerHTML = randomCommunities.map(createCommunityItem).join("")
  }

  function addMoreMeetups() {
    const encontrosSection = document.querySelector(".encontros-section")
    if (!encontrosSection) return

    const randomMeetups = mockMeetups.sort(() => 0.5 - Math.random()).slice(0, 2)

    randomMeetups.forEach((meetup, index) => {
      const meetupNumber = document.querySelectorAll(".encontro-item").length + 1
      const meetupElement = document.createElement("div")
      meetupElement.className = "encontro-item"
      meetupElement.innerHTML = `
                <div class="encontro-info">
                    <span class="out-badge">OUT</span>
                    <span class="encontro-number">${meetupNumber}</span>
                </div>
                <div class="encontro-content">
                    <h4>${meetup.title}</h4>
                    <p>${meetup.description}</p>
                    <span class="encontro-time">${meetup.time}</span>
                </div>
            `

      encontrosSection.appendChild(meetupElement)

      // Animar entrada
      setTimeout(() => {
        meetupElement.style.opacity = "0"
        meetupElement.style.transform = "translateX(-20px)"
        meetupElement.style.transition = "all 0.3s ease"

        setTimeout(() => {
          meetupElement.style.opacity = "1"
          meetupElement.style.transform = "translateX(0)"
        }, 100)
      }, index * 200)
    })
  }

  function addMorePodcasts() {
    const podcastsSection = document.querySelector(".podcasts-section")
    if (!podcastsSection) return

    const randomPodcasts = mockPodcasts.sort(() => 0.5 - Math.random()).slice(0, 2)

    randomPodcasts.forEach((podcast, index) => {
      const podcastElement = document.createElement("div")
      podcastElement.className = "podcast-item"
      podcastElement.innerHTML = `
                <img src="${podcast.image}" alt="Podcast" onerror="this.src='https://via.placeholder.com/60x60/4a5568/ffffff?text=🎧'">
                <div class="podcast-content">
                    <h4>${podcast.title}</h4>
                    <span class="podcast-time">${podcast.time}</span>
                </div>
            `

      podcastsSection.appendChild(podcastElement)

      // Animar entrada
      setTimeout(() => {
        podcastElement.style.opacity = "0"
        podcastElement.style.transform = "translateX(-20px)"
        podcastElement.style.transition = "all 0.3s ease"

        setTimeout(() => {
          podcastElement.style.opacity = "1"
          podcastElement.style.transform = "translateX(0)"
        }, 100)
      }, index * 200)
    })
  }

  // ==================== FUNÇÕES DE BUSCA E FILTROS ====================
  function searchPosts(query) {
    const allPosts = document.querySelectorAll(".post")
    const searchTerm = query.toLowerCase().trim()

    if (!searchTerm) {
      allPosts.forEach((post) => {
        post.style.display = "flex"
        post.classList.remove("search-hidden")
      })
      return
    }

    allPosts.forEach((post) => {
      const title = post.querySelector("h3").textContent.toLowerCase()
      const tags = Array.from(post.querySelectorAll(".post-tags span")).map((tag) => tag.textContent.toLowerCase())
      const author = post.querySelector(".author span").textContent.toLowerCase()

      const matches =
        title.includes(searchTerm) || tags.some((tag) => tag.includes(searchTerm)) || author.includes(searchTerm)

      if (matches) {
        post.style.display = "flex"
        post.classList.remove("search-hidden")
        post.classList.add("search-match")
      } else {
        post.style.display = "none"
        post.classList.add("search-hidden")
        post.classList.remove("search-match")
      }
    })

    // Mostrar mensagem se nenhum resultado for encontrado
    const visiblePosts = document.querySelectorAll(".post:not(.search-hidden)")
    let noResultsMessage = document.querySelector(".no-results-message")

    if (visiblePosts.length === 0) {
      if (!noResultsMessage) {
        noResultsMessage = document.createElement("div")
        noResultsMessage.className = "no-results-message"
        noResultsMessage.innerHTML = `
                    <div style="text-align: center; padding: 40px; color: #a0aec0;">
                        <i class="fas fa-search" style="font-size: 48px; margin-bottom: 16px; opacity: 0.5;"></i>
                        <h3>Nenhum resultado encontrado</h3>
                        <p>Tente usar termos diferentes ou verifique a ortografia.</p>
                    </div>
                `
        posts.appendChild(noResultsMessage)
      }
    } else if (noResultsMessage) {
      noResultsMessage.remove()
    }
  }

  function filterByTechnology(techName) {
    const allPosts = document.querySelectorAll(".post")

    allPosts.forEach((post) => {
      const tags = Array.from(post.querySelectorAll(".post-tags span")).map((tag) => tag.textContent.toLowerCase())

      if (tags.some((tag) => tag.includes(techName.toLowerCase()))) {
        post.style.display = "flex"
        post.classList.add("tech-filtered")
      } else {
        post.style.display = "none"
        post.classList.remove("tech-filtered")
      }
    })

    // Adicionar indicador de filtro ativo
    const filterIndicator =
      document.querySelector(".filter-indicator") ||
      (() => {
        const indicator = document.createElement("div")
        indicator.className = "filter-indicator"
        indicator.style.cssText = `
                    position: fixed;
                    top: 80px;
                    right: 20px;
                    background: #ff6b35;
                    color: white;
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-size: 12px;
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                `
        document.body.appendChild(indicator)
        return indicator
      })()

    filterIndicator.innerHTML = `
            <span>Filtrado por: ${techName}</span>
            <button onclick="clearFilters()" style="background: none; border: none; color: white; cursor: pointer;">
                <i class="fas fa-times"></i>
            </button>
        `
  }

  function clearFilters() {
    const allPosts = document.querySelectorAll(".post")
    allPosts.forEach((post) => {
      post.style.display = "flex"
      post.classList.remove("tech-filtered", "search-hidden", "search-match")
    })

    const filterIndicator = document.querySelector(".filter-indicator")
    if (filterIndicator) {
      filterIndicator.remove()
    }

    const noResultsMessage = document.querySelector(".no-results-message")
    if (noResultsMessage) {
      noResultsMessage.remove()
    }

    if (searchInput) {
      searchInput.value = ""
    }
  }

  // Tornar clearFilters global para o botão de fechar filtro
  window.clearFilters = clearFilters

  // ==================== FUNÇÕES DE INTERAÇÃO ====================
  function handlePostCreation() {
    const content = postInput.value.trim()
    if (!content) {
      showNotification("Por favor, digite algo para postar!", "warning")
      return
    }

    if (content.length < 10) {
      showNotification("O post deve ter pelo menos 10 caracteres!", "warning")
      return
    }

    const newPost = createUserPost(content)
    const firstPost = posts.querySelector(".post")

    if (firstPost) {
      posts.insertBefore(newPost, firstPost)
    } else {
      posts.appendChild(newPost)
    }

    // Animar entrada
    setTimeout(() => {
      newPost.classList.add("visible")
    }, 100)

    // Limpar input
    postInput.value = ""

    // Mostrar notificação de sucesso
    showNotification("Post criado com sucesso!", "success")

    // Scroll suave para o novo post
    setTimeout(() => {
      newPost.scrollIntoView({ behavior: "smooth", block: "center" })
    }, 300)
  }

  function showNotification(message, type = "info") {
    // Remover notificação existente
    const existingNotification = document.querySelector(".notification")
    if (existingNotification) {
      existingNotification.remove()
    }

    const notification = document.createElement("div")
    notification.className = `notification notification-${type}`
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        `

    // Cores baseadas no tipo
    const colors = {
      success: "#48bb78",
      warning: "#ed8936",
      error: "#e53e3e",
      info: "#4299e1",
    }

    notification.style.backgroundColor = colors[type] || colors.info
    notification.textContent = message

    document.body.appendChild(notification)

    // Animar entrada
    setTimeout(() => {
      notification.style.transform = "translateX(0)"
    }, 100)

    // Remover após 3 segundos
    setTimeout(() => {
      notification.style.transform = "translateX(100%)"
      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove()
        }
      }, 300)
    }, 3000)
  }

  function handleSidebarItemClick(item) {
    // Remover classe active de todos os itens
    document.querySelectorAll(".sidebar-item").forEach((i) => i.classList.remove("active"))

    // Adicionar classe active ao item clicado
    item.classList.add("active")

    // Simular carregamento de conteúdo baseado na seleção
    const title = item.querySelector(".item-title").textContent
    showNotification(`Carregando: ${title}`, "info")

    // Aqui você poderia implementar lógica para filtrar posts
    // baseado na seleção da sidebar
  }

  // ==================== CONFIGURAÇÃO DE EVENTOS ====================
  function setupEventListeners() {
    // Evento de scroll na página
    window.addEventListener("scroll", () => {
      toggleBackToTopButton()
      updateScrollProgress()
    })

    // Evento de clique no botão "Voltar ao Topo"
    if (backToTopButton) {
      backToTopButton.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      })
    }

    // Evento de scroll na sidebar direita
    if (rightSidebar) {
      rightSidebar.addEventListener("scroll", () => {
        if (rightSidebar.scrollTop > 10 && scrollIndicator) {
          scrollIndicator.classList.remove("visible")
        }
      })
    }

    // Evento de criação de post
    if (postBtn) {
      postBtn.addEventListener("click", handlePostCreation)
    }

    if (postInput) {
      postInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          handlePostCreation()
        }
      })
    }

    // Evento de busca
    if (searchInput) {
      let searchTimeout
      searchInput.addEventListener("input", (e) => {
        clearTimeout(searchTimeout)
        searchTimeout = setTimeout(() => {
          searchPosts(e.target.value)
        }, 300)
      })
    }

    // Eventos de clique na sidebar
    document.addEventListener("click", (e) => {
      // Clique em itens da sidebar
      if (e.target.closest(".sidebar-item")) {
        handleSidebarItemClick(e.target.closest(".sidebar-item"))
      }

      // Clique em tecnologias
      if (e.target.closest(".tech-item")) {
        const techName = e.target.closest(".tech-item").dataset.tech
        filterByTechnology(techName)
      }

      // Clique em comunidades
      if (e.target.closest(".community-item")) {
        const communityName = e.target.closest(".community-item").dataset.community
        showNotification(`Abrindo: ${communityName}`, "info")
      }

      // Clique em posts
      if (e.target.closest(".post")) {
        const post = e.target.closest(".post")
        const title = post.querySelector("h3").textContent
        showNotification(`Abrindo: ${title.substring(0, 30)}...`, "info")
      }
    })

    // Evento de redimensionamento da janela
    window.addEventListener("resize", () => {
      checkSidebarScroll(rightSidebar, scrollIndicator)
    })
  }

  // ==================== CONFIGURAÇÃO DO INFINITE SCROLL ====================
  function setupInfiniteScroll() {
    const sentinel = document.createElement("div")
    sentinel.className = "scroll-sentinel"
    posts.appendChild(sentinel)

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          loadMorePosts()
        }
      },
      {
        threshold: 0.1,
      },
    )

    observer.observe(sentinel)
  }

  // ==================== ATUALIZAÇÕES PERIÓDICAS ====================
  function setupPeriodicUpdates() {
    // Atualizar tecnologias em alta a cada 30 segundos
    setInterval(() => {
      updateTrendingTech()
    }, 30000)

    // Atualizar comunidades ativas a cada 45 segundos
    setInterval(() => {
      updateActiveCommunities()
    }, 45000)

    // Adicionar novos meetups a cada 60 segundos
    setInterval(() => {
      addMoreMeetups()
    }, 60000)

    // Adicionar novos podcasts a cada 90 segundos
    setInterval(() => {
      addMorePodcasts()
    }, 90000)
  }

  // ==================== INICIALIZAÇÃO ====================
  function initialize() {
    console.log("🚀 DigitalHub Forum inicializado!")

    // Configurar eventos
    setupEventListeners()

    // Configurar infinite scroll
    setupInfiniteScroll()

    // Configurar atualizações periódicas
    setupPeriodicUpdates()

    // Verificações iniciais
    toggleBackToTopButton()
    updateScrollProgress()
    checkSidebarScroll(rightSidebar, scrollIndicator)

    // Mostrar notificação de boas-vindas
    setTimeout(() => {
      showNotification("Bem-vindo ao DigitalHub! 🚀", "success")
    }, 1000)

    // Simular atividade inicial
    setTimeout(() => {
      updateTrendingTech()
    }, 2000)

    setTimeout(() => {
      updateActiveCommunities()
    }, 3000)
  }

  // ==================== FUNÇÕES DE DEBUG (DESENVOLVIMENTO) ====================
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    window.DigitalHubDebug = {
      loadMorePosts,
      updateTrendingTech,
      updateActiveCommunities,
      addMoreMeetups,
      addMorePodcasts,
      showNotification,
      clearFilters,
      searchPosts,
      filterByTechnology,
    }

    console.log("🔧 Modo de desenvolvimento ativo. Use window.DigitalHubDebug para acessar funções de debug.")
  }

  // Inicializar aplicação
  initialize()
})

// ==================== FUNÇÕES GLOBAIS ====================
// Função para alternar tema (para implementação futura)
function toggleTheme() {
  document.body.classList.toggle("light-theme")
  const isDark = !document.body.classList.contains("light-theme")
  localStorage.setItem("theme", isDark ? "dark" : "light")
}

// Função para compartilhar post
function sharePost(postElement) {
  const title = postElement.querySelector("h3").textContent
  const url = window.location.href

  if (navigator.share) {
    navigator.share({
      title: title,
      url: url,
    })
  } else {
    // Fallback para navegadores que não suportam Web Share API
    navigator.clipboard.writeText(url).then(() => {
      window.showNotification("Link copiado para a área de transferência!", "success")
    })
  }
}

// Função para curtir post
function likePost(postElement) {
  const likeButton = postElement.querySelector(".like-button")
  if (likeButton) {
    likeButton.classList.toggle("liked")
    const isLiked = likeButton.classList.contains("liked")
    window.showNotification(isLiked ? "Post curtido!" : "Curtida removida", "info")
  }
}

// Função para salvar post
function savePost(postElement) {
  const saveButton = postElement.querySelector(".save-button")
  if (saveButton) {
    saveButton.classList.toggle("saved")
    const isSaved = saveButton.classList.contains("saved")
    window.showNotification(isSaved ? "Post salvo!" : "Post removido dos salvos", "info")
  }
}

// Carregar tema salvo
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "light") {
    document.body.classList.add("light-theme")
  }
})

// Declare showNotification globally
window.showNotification = (message, type = "info") => {
  // Remover notificação existente
  const existingNotification = document.querySelector(".notification")
  if (existingNotification) {
    existingNotification.remove()
  }

  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          padding: 12px 20px;
          border-radius: 8px;
          color: white;
          font-weight: 500;
          z-index: 10000;
          transform: translateX(100%);
          transition: transform 0.3s ease;
          max-width: 300px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      `

  // Cores baseadas no tipo
  const colors = {
    success: "#48bb78",
    warning: "#ed8936",
    error: "#e53e3e",
    info: "#4299e1",
  }

  notification.style.backgroundColor = colors[type] || colors.info
  notification.textContent = message

  document.body.appendChild(notification)

  // Animar entrada
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Remover após 3 segundos
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove()
      }
    }, 300)
  }, 3000)
}


// === SCROLL INDICATOR FOR LEFT SIDEBAR ===
const leftSidebar = document.querySelector('.sidebar');
const sidebarIndicator = document.querySelector('.sidebar-scroll-indicator');
function updateSidebarScrollIndicator() {
    if (!leftSidebar || !sidebarIndicator) return;
    const hasScroll = leftSidebar.scrollHeight > leftSidebar.clientHeight + 8;
    const atBottom = Math.abs(leftSidebar.scrollTop + leftSidebar.clientHeight - leftSidebar.scrollHeight) < 10;
    // Mostra indicador só se não estiver no fundo e houver scroll
    if (hasScroll && !atBottom) {
        sidebarIndicator.classList.add('visible');
    } else {
        sidebarIndicator.classList.remove('visible');
    }
}
// Evento para atualizar indicador ao rolar
if (leftSidebar && sidebarIndicator) {
    leftSidebar.addEventListener('scroll', updateSidebarScrollIndicator);
    // Atualiza ao carregar a página
    window.addEventListener('DOMContentLoaded', updateSidebarScrollIndicator);
    setTimeout(updateSidebarScrollIndicator, 500);
}
window.addEventListener('resize', updateSidebarScrollIndicator);
