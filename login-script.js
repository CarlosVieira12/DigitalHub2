// ==================== DADOS DOS POSTS DO FÓRUM ====================
const forumPosts = [
  {
    title: "Criptografia de dados: Como proteger minhas informações confidenciais?",
    tags: ["Arquivo", "Malware", "Criptografia"],
    author: "Alexander Smith",
    authorImg: "https://i.pravatar.cc/32?img=12",
    views: "1.2M",
    likes: "36.6k",
    comments: "51",
    icon: "fas fa-shield-alt",
  },
  {
    title: "Como me proteger de ataques de phishing: Quais são os sinais de alerta?",
    tags: ["Dica", "Phishing", "Tutoriais"],
    author: "Lucas Ramos",
    authorImg: "https://i.pravatar.cc/32?img=33",
    views: "10.1k",
    likes: "148",
    comments: "194",
    icon: "fas fa-exclamation-triangle",
  },
  {
    title: "Aprendendo a programar: Quais são os melhores recursos para um iniciante?",
    tags: ["Programação", "Iniciante", "Dicas"],
    author: "Gabriel Stark",
    authorImg: "https://i.pravatar.cc/32?img=51",
    views: "24.7k",
    likes: "4.7k",
    comments: "209",
    icon: "fas fa-code",
  },
  {
    title: "Melhores práticas para gerenciamento de banco de dados: Como otimizar?",
    tags: ["Banco", "Banco de dados", "Otimização"],
    author: "Ana Carolina",
    authorImg: "https://i.pravatar.cc/32?img=23",
    views: "64.7k",
    likes: "41",
    comments: "30",
    icon: "fas fa-database",
  },
  {
    title: "Erro no meu código: Por que meu script Python não está funcionando?",
    tags: ["Python", "Debugging"],
    author: "Maria Alice",
    authorImg: "https://i.pravatar.cc/32?img=45",
    views: "132.2k",
    likes: "84.7k",
    comments: "41",
    icon: "fab fa-python",
  },
  {
    title: "Como otimizar consultas SQL para melhor performance?",
    tags: ["SQL", "Banco de dados", "Performance"],
    author: "Marina Silva",
    authorImg: "https://i.pravatar.cc/32?img=5",
    views: "89.3k",
    likes: "12.4k",
    comments: "87",
    icon: "fas fa-chart-line",
  },
  {
    title: "Introdução ao Docker: Como containerizar suas aplicações",
    tags: ["Docker", "DevOps", "Containers"],
    author: "Carlos Mendes",
    authorImg: "https://i.pravatar.cc/32?img=11",
    views: "156.8k",
    likes: "23.1k",
    comments: "156",
    icon: "fab fa-docker",
  },
  {
    title: "Melhores práticas de segurança para aplicações web",
    tags: ["Segurança", "Web", "OWASP"],
    author: "Julia Almeida",
    authorImg: "https://i.pravatar.cc/32?img=20",
    views: "78.9k",
    likes: "15.6k",
    comments: "203",
    icon: "fas fa-lock",
  },
  {
    title: "Como implementar autenticação JWT em APIs REST",
    tags: ["API", "JWT", "Autenticação"],
    author: "Rafael Costa",
    authorImg: "https://i.pravatar.cc/32?img=30",
    views: "45.2k",
    likes: "8.9k",
    comments: "124",
    icon: "fas fa-key",
  },
  {
    title: "Introdução ao Machine Learning com Python",
    tags: ["Python", "ML", "IA"],
    author: "Ana Santos",
    authorImg: "https://i.pravatar.cc/32?img=40",
    views: "234.5k",
    likes: "67.8k",
    comments: "445",
    icon: "fas fa-brain",
  },
  {
    title: "Desenvolvimento Frontend com React e TypeScript",
    tags: ["React", "TypeScript", "Frontend"],
    author: "Pedro Lima",
    authorImg: "https://i.pravatar.cc/32?img=50",
    views: "189.7k",
    likes: "34.2k",
    comments: "287",
    icon: "fab fa-react",
  },
  {
    title: "Microserviços: Arquitetura e implementação",
    tags: ["Microserviços", "Arquitetura", "Backend"],
    author: "Fernanda Rocha",
    authorImg: "https://i.pravatar.cc/32?img=60",
    views: "98.4k",
    likes: "19.7k",
    comments: "178",
    icon: "fas fa-sitemap",
  },
  {
    title: "CI/CD com GitHub Actions: Automatizando deploys",
    tags: ["CI/CD", "GitHub", "DevOps"],
    author: "Lucas Oliveira",
    authorImg: "https://i.pravatar.cc/32?img=70",
    views: "67.3k",
    likes: "14.8k",
    comments: "134",
    icon: "fab fa-github",
  },
  {
    title: "Desenvolvimento Mobile com Flutter",
    tags: ["Flutter", "Mobile", "Dart"],
    author: "Carla Santos",
    authorImg: "https://i.pravatar.cc/32?img=25",
    views: "123.6k",
    likes: "28.9k",
    comments: "234",
    icon: "fas fa-mobile-alt",
  },
  {
    title: "Inteligência Artificial: Tendências para 2024",
    tags: ["IA", "Machine Learning", "Futuro"],
    author: "Roberto Tech",
    authorImg: "https://i.pravatar.cc/32?img=35",
    views: "345.7k",
    likes: "89.2k",
    comments: "567",
    icon: "fas fa-robot",
  },
  {
    title: "Blockchain e Criptomoedas: Guia para iniciantes",
    tags: ["Blockchain", "Crypto", "Web3"],
    author: "Amanda Crypto",
    authorImg: "https://i.pravatar.cc/32?img=15",
    views: "198.4k",
    likes: "45.6k",
    comments: "389",
    icon: "fas fa-link",
  },
  {
    title: "Cloud Computing: AWS vs Azure vs Google Cloud",
    tags: ["Cloud", "AWS", "Azure"],
    author: "Felipe Cloud",
    authorImg: "https://i.pravatar.cc/32?img=55",
    views: "156.8k",
    likes: "32.4k",
    comments: "267",
    icon: "fas fa-cloud",
  },
  {
    title: "Kubernetes: Orquestração de containers na prática",
    tags: ["Kubernetes", "DevOps", "Containers"],
    author: "Diego Santos",
    authorImg: "https://i.pravatar.cc/32?img=65",
    views: "87.9k",
    likes: "18.7k",
    comments: "156",
    icon: "fas fa-server",
  },
  {
    title: "GraphQL vs REST: Qual escolher para sua API?",
    tags: ["GraphQL", "REST", "API"],
    author: "Beatriz Lima",
    authorImg: "https://i.pravatar.cc/32?img=75",
    views: "76.3k",
    likes: "16.2k",
    comments: "198",
    icon: "fas fa-project-diagram",
  },
  {
    title: "Testes automatizados: Jest, Cypress e melhores práticas",
    tags: ["Testes", "Jest", "Cypress"],
    author: "Thiago Dev",
    authorImg: "https://i.pravatar.cc/32?img=85",
    views: "54.7k",
    likes: "12.8k",
    comments: "134",
    icon: "fas fa-vial",
  },
]

// ==================== FUNÇÕES DE UTILIDADE ====================
function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function createCard(post) {
  const card = document.createElement("div")
  card.className = "background-card"

  card.innerHTML = `
        <div class="card-header">
            <div class="card-image">
                <i class="${post.icon}"></i>
            </div>
            <div class="card-content">
                <h3 class="card-title">${post.title}</h3>
                <div class="card-tags">
                    ${post.tags.map((tag) => `<span class="card-tag">${tag}</span>`).join("")}
                </div>
            </div>
        </div>
        <div class="card-footer">
            <div class="card-author">
                <img src="${post.authorImg}" alt="${post.author}" class="author-avatar">
                <span class="author-name">${post.author}</span>
            </div>
            <div class="card-stats">
                <span>${post.views}</span>
                <span>${post.likes}</span>
            </div>
        </div>
    `

  return card
}

function getColumnCount() {
  const width = window.innerWidth
  if (width < 480) return 2
  if (width < 768) return 3
  if (width < 1200) return 4
  return 5
}

function createAnimatedBackground() {
  const container = document.getElementById("cardsContainer")
  const columnCount = getColumnCount()

  // Limpar container
  container.innerHTML = ""

  // Criar colunas
  for (let i = 0; i < columnCount; i++) {
    const column = document.createElement("div")
    column.className = "card-column"

    // Embaralhar posts e criar cards para cada coluna
    const shuffledPosts = shuffleArray(forumPosts)
    const cardsPerColumn = Math.ceil(forumPosts.length / columnCount)

    // Duplicar cards para criar loop infinito
    for (let j = 0; j < cardsPerColumn * 3; j++) {
      const postIndex = j % forumPosts.length
      const card = createCard(shuffledPosts[postIndex])
      column.appendChild(card)
    }

    container.appendChild(column)
  }
}

// ==================== VALIDAÇÃO DO FORMULÁRIO ====================
function validateEmail() {
  const emailInput = document.getElementById("email")
  const email = emailInput.value.trim()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const formGroup = emailInput.closest(".form-group")

  if (!email || !emailRegex.test(email)) {
    formGroup.classList.add("error")
    formGroup.classList.remove("success")
    return false
  } else {
    formGroup.classList.remove("error")
    formGroup.classList.add("success")
    return true
  }
}

function validatePassword() {
  const passwordInput = document.getElementById("password")
  const password = passwordInput.value
  const formGroup = passwordInput.closest(".form-group")

  if (password.length < 6) {
    formGroup.classList.add("error")
    formGroup.classList.remove("success")
    return false
  } else {
    formGroup.classList.remove("error")
    formGroup.classList.add("success")
    return true
  }
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
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    `

  // Cores baseadas no tipo
  const colors = {
    success: "#48bb78",
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

function handleLogin(e) {
  e.preventDefault()

  const isEmailValid = validateEmail()
  const isPasswordValid = validatePassword()

  if (!isEmailValid || !isPasswordValid) {
    showNotification("Por favor, corrija os erros no formulário", "error")
    return
  }

  const loginBtn = document.querySelector(".login-btn")

  // Simular loading
  loginBtn.classList.add("loading")
  loginBtn.textContent = "Entrando..."

  // Simular autenticação
  setTimeout(() => {
    showNotification("Login realizado com sucesso!", "success")

    // Redirecionar para a página principal após 1.5 segundos
    setTimeout(() => {
      window.location.href = "home.html"
    }, 1500)
  }, 2000)
}

// ==================== INICIALIZAÇÃO ====================
document.addEventListener("DOMContentLoaded", () => {
  // Criar fundo animado
  createAnimatedBackground()

  // Recriar fundo ao redimensionar janela
  let resizeTimeout
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      createAnimatedBackground()
    }, 250)
  })

  // Configurar eventos do formulário
  const loginForm = document.getElementById("loginForm")
  const emailInput = document.getElementById("email")
  const passwordInput = document.getElementById("password")

  // Validação em tempo real
  emailInput.addEventListener("blur", validateEmail)
  passwordInput.addEventListener("blur", validatePassword)

  // Submissão do formulário
  loginForm.addEventListener("submit", handleLogin)

  // Efeitos visuais nos inputs
  const inputs = document.querySelectorAll("input")
  inputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.parentElement.style.transform = "translateY(-2px)"
    })

    input.addEventListener("blur", function () {
      this.parentElement.style.transform = "translateY(0)"
    })
  })

  // Efeito de clique nos botões sociais
  const socialBtns = document.querySelectorAll(".social-btn")
  socialBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault()
      const platform = this.classList.contains("google") ? "Google" : "GitHub"
      showNotification(`Login com ${platform} em desenvolvimento`, "info")
    })
  })

  // Link de esqueceu a senha
  // document.querySelector(".forgot-password").addEventListener("click", (e) => {
  //   e.preventDefault()
  //   showNotification("Funcionalidade de recuperação de senha em desenvolvimento", "info")
  // })

  // // Link de cadastro
  // document.querySelector(".signup-link a").addEventListener("click", (e) => {
  //   e.preventDefault()
  //   showNotification("Página de cadastro em desenvolvimento", "info")
  // })

  console.log("🚀 DigitalHub Login com efeito Netflix inicializado!")
})

// ==================== PERFORMANCE E OTIMIZAÇÃO ====================
// Pausar animações quando a aba não está ativa
document.addEventListener("visibilitychange", () => {
  const columns = document.querySelectorAll(".card-column")

  if (document.hidden) {
    columns.forEach((column) => {
      column.style.animationPlayState = "paused"
    })
  } else {
    columns.forEach((column) => {
      column.style.animationPlayState = "running"
    })
  }
})

// Reduzir animações em dispositivos com bateria baixa
if ("getBattery" in navigator) {
  navigator.getBattery().then((battery) => {
    if (battery.level < 0.2) {
      const columns = document.querySelectorAll(".card-column")
      columns.forEach((column) => {
        column.style.animationDuration = "120s" // Mais lento para economizar bateria
      })
    }
  })
}
