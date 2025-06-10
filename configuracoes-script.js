// ==================== FUNCIONALIDADES DAS CONFIGURAÇÕES ====================

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

function switchSection(sectionName) {
  // Remover classe active de todos os itens de navegação
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active")
  })

  // Remover classe active de todas as seções
  document.querySelectorAll(".settings-section").forEach((section) => {
    section.classList.remove("active")
  })

  // Adicionar classe active no item selecionado
  document.querySelector(`[data-section="${sectionName}"]`).classList.add("active")
  document.getElementById(sectionName).classList.add("active")
}

function confirmDangerousAction(action, callback) {
  const confirmed = confirm(`Tem certeza que deseja ${action}? Esta ação não pode ser desfeita.`)
  if (confirmed) {
    callback()
  }
}

function handleToggleChange(toggle, settingName) {
  const isEnabled = toggle.checked
  const status = isEnabled ? "ativada" : "desativada"
  showNotification(`${settingName} ${status}`, "success")

  // Salvar preferência (simulado)
  localStorage.setItem(`setting_${settingName.toLowerCase().replace(/\s+/g, "_")}`, isEnabled)
}

function handleSelectChange(select, settingName) {
  const value = select.value
  showNotification(`${settingName} alterado para: ${select.options[select.selectedIndex].text}`, "success")

  // Salvar preferência (simulado)
  localStorage.setItem(`setting_${settingName.toLowerCase().replace(/\s+/g, "_")}`, value)

  // Aplicar mudanças específicas
  if (settingName === "Tema") {
    applyTheme(value)
  }
}

function applyTheme(theme) {
  // Simular aplicação de tema
  const body = document.body
  body.classList.remove("theme-light", "theme-dark", "theme-auto")
  body.classList.add(`theme-${theme}`)
}

function loadUserPreferences() {
  // Carregar preferências salvas (simulado)
  const toggles = document.querySelectorAll('.toggle-switch input[type="checkbox"]')
  const selects = document.querySelectorAll("select")

  toggles.forEach((toggle) => {
    const settingName = toggle.closest(".setting-toggle").querySelector("label").textContent
    const saved = localStorage.getItem(`setting_${settingName.toLowerCase().replace(/\s+/g, "_")}`)
    if (saved !== null) {
      toggle.checked = saved === "true"
    }
  })

  selects.forEach((select) => {
    const settingName = select.closest(".setting-item").querySelector("label").textContent
    const saved = localStorage.getItem(`setting_${settingName.toLowerCase().replace(/\s+/g, "_")}`)
    if (saved) {
      select.value = saved
    }
  })
}

// ==================== INICIALIZAÇÃO DAS CONFIGURAÇÕES ====================
document.addEventListener("DOMContentLoaded", () => {
  // Assuming createAnimatedBackground is defined elsewhere or imported
  // For example: import { createAnimatedBackground } from './utils';
  // Or: window.createAnimatedBackground = function() { ... };

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

  // Configurar navegação lateral
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      const sectionName = item.getAttribute("data-section")
      switchSection(sectionName)
    })
  })

  // Configurar toggles
  document.querySelectorAll('.toggle-switch input[type="checkbox"]').forEach((toggle) => {
    toggle.addEventListener("change", () => {
      const settingName = toggle.closest(".setting-toggle").querySelector("label").textContent
      handleToggleChange(toggle, settingName)
    })
  })

  // Configurar selects
  document.querySelectorAll("select").forEach((select) => {
    select.addEventListener("change", () => {
      const settingName = select.closest(".setting-item").querySelector("label").textContent
      handleSelectChange(select, settingName)
    })
  })

  // Configurar botões de alteração
  document.querySelectorAll(".btn-change").forEach((btn) => {
    btn.addEventListener("click", () => {
      const settingName = btn.closest(".setting-item").querySelector("label").textContent
      showNotification(`Funcionalidade de alteração de ${settingName.toLowerCase()} em desenvolvimento`, "info")
    })
  })

  // Configurar botões de perigo
  document.querySelectorAll(".btn-danger").forEach((btn) => {
    btn.addEventListener("click", () => {
      const actionName = btn.closest(".danger-item").querySelector("label").textContent.toLowerCase()

      if (actionName.includes("desativar")) {
        confirmDangerousAction("desativar sua conta", () => {
          showNotification("Conta desativada temporariamente", "warning")
        })
      } else if (actionName.includes("excluir")) {
        confirmDangerousAction("excluir permanentemente sua conta", () => {
          showNotification("Processo de exclusão iniciado", "error")
        })
      }
    })
  })

  // Carregar preferências do usuário
  loadUserPreferences()

  console.log("🚀 DigitalHub Configurações inicializado!")
})
