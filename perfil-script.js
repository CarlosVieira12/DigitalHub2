// ==================== FUNCIONALIDADES DO PERFIL ====================

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

function switchTab(tabName) {
  // Remover classe active de todas as tabs
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active")
  })

  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active")
  })

  // Adicionar classe active na tab selecionada
  document.querySelector(`[data-tab="${tabName}"]`).classList.add("active")
  document.getElementById(tabName).classList.add("active")
}

function openEditModal() {
  const modal = document.getElementById("editModal")
  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeEditModal() {
  const modal = document.getElementById("editModal")
  modal.classList.remove("active")
  document.body.style.overflow = "auto"
}

function handleEditSubmit(e) {
  e.preventDefault()

  const name = document.getElementById("editName").value
  const username = document.getElementById("editUsername").value
  const bio = document.getElementById("editBio").value

  // Atualizar informações na página
  document.querySelector(".profile-name").textContent = name
  document.querySelector(".profile-username").textContent = `@${username}`
  document.querySelector(".profile-bio").textContent = bio

  closeEditModal()
  showNotification("Perfil atualizado com sucesso!", "success")
}

// ==================== INICIALIZAÇÃO DO PERFIL ====================
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

  // Configurar eventos das tabs
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabName = btn.getAttribute("data-tab")
      switchTab(tabName)
    })
  })

  // Configurar modal de edição
  const editProfileBtn = document.getElementById("editProfileBtn")
  const closeModalBtn = document.getElementById("closeModal")
  const cancelEditBtn = document.getElementById("cancelEdit")
  const editForm = document.getElementById("editForm")

  editProfileBtn.addEventListener("click", openEditModal)
  closeModalBtn.addEventListener("click", closeEditModal)
  cancelEditBtn.addEventListener("click", closeEditModal)
  editForm.addEventListener("submit", handleEditSubmit)

  // Fechar modal ao clicar fora
  document.getElementById("editModal").addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeEditModal()
    }
  })

  // Efeito de hover nos cards de post
  document.querySelectorAll(".post-card").forEach((card) => {
    card.addEventListener("click", () => {
      showNotification("Funcionalidade de visualização de post em desenvolvimento", "info")
    })
  })

  // Efeito de clique nas conquistas
  document.querySelectorAll(".achievement-card").forEach((card) => {
    card.addEventListener("click", () => {
      if (card.classList.contains("earned")) {
        showNotification("Conquista desbloqueada!", "success")
      } else {
        showNotification("Conquista ainda não desbloqueada", "info")
      }
    })
  })

  // Upload de foto de perfil
  document.querySelector(".profile-avatar").addEventListener("click", () => {
    showNotification("Funcionalidade de upload de foto em desenvolvimento", "info")
  })

  console.log("🚀 DigitalHub Perfil inicializado!")
})
