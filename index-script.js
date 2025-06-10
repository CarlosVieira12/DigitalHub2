// ==================== FUNCIONALIDADES DA PÁGINA PRINCIPAL ====================

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
    warning: "#f7931e",
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

function toggleUserDropdown() {
  const dropdown = document.getElementById("userDropdown")
  dropdown.classList.toggle("active")
}

function closeUserDropdown() {
  const dropdown = document.getElementById("userDropdown")
  dropdown.classList.remove("active")
}

function handleDropdownItemClick(item, event) {
  const text = item.querySelector("span").textContent

  // Verificar se é um link real ou funcionalidade em desenvolvimento
  if (item.href && (item.href.includes("perfil.html") || item.href.includes("configuracoes.html"))) {
    // Permitir navegação normal para perfil e configurações
    return true
  }

  // Para outros itens, prevenir navegação e mostrar notificação
  event.preventDefault()

  if (text === "Sair") {
    const confirmed = confirm("Tem certeza que deseja sair?")
    if (confirmed) {
      showNotification("Saindo...", "info")
      setTimeout(() => {
        window.location.href = "index.html"
      }, 1000)
    }
  } else {
    showNotification(`Funcionalidade "${text}" em desenvolvimento`, "info")
  }

  closeUserDropdown()
  return false
}

function toggleDarkMode() {
  const toggle = document.getElementById("darkModeToggle")
  const isEnabled = toggle.checked

  // Simular mudança de tema
  if (isEnabled) {
    showNotification("Modo escuro ativado", "success")
  } else {
    showNotification("Modo claro ativado", "success")
  }
}

// ==================== INICIALIZAÇÃO DA PÁGINA PRINCIPAL ====================
document.addEventListener("DOMContentLoaded", () => {
  // Criar fundo animado (reutilizando função do login)
  if (typeof createAnimatedBackground === "function") {
    createAnimatedBackground()

    // Recriar fundo ao redimensionar janela
    let resizeTimeout
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        createAnimatedBackground()
      }, 250)
    })
  }

  // Configurar dropdown do usuário
  const userTrigger = document.getElementById("userTrigger")
  const dropdownMenu = document.getElementById("dropdownMenu")

  userTrigger.addEventListener("click", (e) => {
    e.stopPropagation()
    toggleUserDropdown()
  })

  // Fechar dropdown ao clicar fora
  document.addEventListener("click", (e) => {
    if (!document.getElementById("userDropdown").contains(e.target)) {
      closeUserDropdown()
    }
  })

  // Configurar itens do dropdown
  document.querySelectorAll(".dropdown-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      handleDropdownItemClick(item, e)
    })
  })

  // Configurar toggle de modo escuro
  const darkModeToggle = document.getElementById("darkModeToggle")
  darkModeToggle.addEventListener("change", toggleDarkMode)

  // Configurar botão de notificações
  document.querySelector(".notification-btn").addEventListener("click", () => {
    showNotification("Central de notificações em desenvolvimento", "info")
  })

  // Configurar botão de novo post
  document.querySelector(".btn-new-post").addEventListener("click", () => {
    showNotification("Editor de posts em desenvolvimento", "info")
  })

  // Configurar botões dos posts
  document.querySelectorAll(".post-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const icon = btn.querySelector("i")
      if (icon.classList.contains("fa-heart")) {
        const span = btn.querySelector("span")
        const currentLikes = Number.parseInt(span.textContent)
        span.textContent = currentLikes + 1
        icon.style.color = "#e53e3e"
        showNotification("Post curtido!", "success")
      } else if (icon.classList.contains("fa-comment")) {
        showNotification("Sistema de comentários em desenvolvimento", "info")
      } else if (icon.classList.contains("fa-share")) {
        showNotification("Post compartilhado!", "success")
      } else if (icon.classList.contains("fa-bookmark")) {
        icon.style.color = "#ff6b35"
        showNotification("Post salvo!", "success")
      }
    })
  })

  // Configurar links da sidebar
  document.querySelectorAll(".category-list a, .tag").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const text = link.textContent.trim()
      showNotification(`Filtro "${text}" em desenvolvimento`, "info")
    })
  })

  // Configurar botão de carregar mais
  document.querySelector(".btn-load-more").addEventListener("click", () => {
    showNotification("Carregando mais posts...", "info")
  })

  // Configurar links de navegação
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      // Remover active de todos os links
      document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"))

      // Adicionar active no link clicado
      link.classList.add("active")

      const text = link.textContent.trim()
      showNotification(`Seção "${text}" em desenvolvimento`, "info")
    })
  })

  console.log("🚀 DigitalHub Página Principal inicializada!")
})

// ==================== FECHAR DROPDOWN COM ESC ====================
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeUserDropdown()
  }
})
