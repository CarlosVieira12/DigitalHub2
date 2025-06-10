// ==================== FUNCIONALIDADES DO DROPDOWN ====================

function showNotification(message, type = "info") {
  // Remover notificação existente
  const existingNotification = document.querySelector(".notification")
  if (existingNotification) {
    existingNotification.remove()
  }

  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
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

// ==================== INICIALIZAÇÃO DO DROPDOWN ====================
document.addEventListener("DOMContentLoaded", () => {
  // Configurar dropdown do usuário
  const userTrigger = document.getElementById("userTrigger")

  if (userTrigger) {
    userTrigger.addEventListener("click", (e) => {
      e.stopPropagation()
      toggleUserDropdown()
    })
  }

  // Fechar dropdown ao clicar fora
  document.addEventListener("click", (e) => {
    const userDropdown = document.getElementById("userDropdown")
    if (userDropdown && !userDropdown.contains(e.target)) {
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
  if (darkModeToggle) {
    darkModeToggle.addEventListener("change", toggleDarkMode)
  }

  console.log("🚀 DigitalHub Dropdown inicializado!")
})

// ==================== FECHAR DROPDOWN COM ESC ====================
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeUserDropdown()
  }
})
