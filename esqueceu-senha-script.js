// ==================== VALIDAÇÕES DO FORMULÁRIO DE RECUPERAÇÃO ====================

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

function showSuccessState(email) {
  const container = document.querySelector(".forgot-password-container")
  const form = document.querySelector(".forgot-password-form")
  const info = document.querySelector(".forgot-password-info")

  // Adicionar classe de sucesso
  container.classList.add("success")

  // Atualizar título e subtítulo
  const title = document.querySelector(".forgot-password-title")
  const subtitle = document.querySelector(".forgot-password-subtitle")

  title.textContent = "E-mail enviado!"
  subtitle.textContent = `Enviamos um link de recuperação para ${email}. Verifique sua caixa de entrada e spam.`

  // Substituir formulário por mensagem de sucesso
  const successMessage = document.createElement("div")
  successMessage.className = "success-message"
  successMessage.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <h3>Link enviado com sucesso!</h3>
        <p>Clique no link que enviamos para <strong>${email}</strong> para redefinir sua senha. O link expira em 24 horas.</p>
    `

  // Substituir elementos
  form.style.display = "none"
  info.style.display = "none"
  container.insertBefore(successMessage, document.querySelector(".forgot-password-footer"))
}

function handleForgotPassword(e) {
  e.preventDefault()

  const isEmailValid = validateEmail()

  if (!isEmailValid) {
    showNotification("Por favor, insira um e-mail válido", "error")
    return
  }

  const email = document.getElementById("email").value.trim()
  const forgotPasswordBtn = document.querySelector(".forgot-password-btn")

  // Simular loading
  forgotPasswordBtn.classList.add("loading")
  forgotPasswordBtn.innerHTML = `
        <i class="fas fa-spinner fa-spin"></i>
        Enviando...
    `

  // Simular envio de e-mail
  setTimeout(() => {
    showNotification("E-mail de recuperação enviado!", "success")
    showSuccessState(email)
  }, 2000)
}

// ==================== INICIALIZAÇÃO DA RECUPERAÇÃO DE SENHA ====================
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

  // Configurar eventos do formulário
  const forgotPasswordForm = document.getElementById("forgotPasswordForm")
  const emailInput = document.getElementById("email")

  // Validação em tempo real
  emailInput.addEventListener("blur", validateEmail)

  // Submissão do formulário
  forgotPasswordForm.addEventListener("submit", handleForgotPassword)

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

  console.log("🚀 DigitalHub Recuperação de Senha inicializado!")
})
