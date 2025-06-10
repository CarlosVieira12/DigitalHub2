// ==================== VALIDAÇÕES DO FORMULÁRIO DE CADASTRO ====================

function validateFullName() {
  const nameInput = document.getElementById("fullName")
  const name = nameInput.value.trim()
  const formGroup = nameInput.closest(".form-group")

  if (!name || name.length < 2) {
    formGroup.classList.add("error")
    formGroup.classList.remove("success")
    return false
  } else {
    formGroup.classList.remove("error")
    formGroup.classList.add("success")
    return true
  }
}

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

function checkPasswordStrength(password) {
  let strength = 0
  let strengthText = "Muito fraca"
  let strengthClass = "weak"

  // Critérios de força
  if (password.length >= 8) strength++
  if (/[a-z]/.test(password)) strength++
  if (/[A-Z]/.test(password)) strength++
  if (/[0-9]/.test(password)) strength++
  if (/[^A-Za-z0-9]/.test(password)) strength++

  // Determinar força
  if (strength >= 4) {
    strengthText = "Forte"
    strengthClass = "strong"
  } else if (strength >= 3) {
    strengthText = "Boa"
    strengthClass = "good"
  } else if (strength >= 2) {
    strengthText = "Razoável"
    strengthClass = "fair"
  }

  return { strength, strengthText, strengthClass }
}

function validatePassword() {
  const passwordInput = document.getElementById("password")
  const password = passwordInput.value
  const formGroup = passwordInput.closest(".form-group")
  const strengthFill = formGroup.querySelector(".strength-fill")
  const strengthText = formGroup.querySelector(".strength-text")

  if (password.length < 8) {
    formGroup.classList.add("error")
    formGroup.classList.remove("success")
    if (strengthFill) {
      strengthFill.className = "strength-fill"
      strengthText.textContent = "Muito fraca"
    }
    return false
  } else {
    formGroup.classList.remove("error")
    formGroup.classList.add("success")

    // Atualizar indicador de força
    if (strengthFill && strengthText) {
      const { strengthClass, strengthText: text } = checkPasswordStrength(password)
      strengthFill.className = `strength-fill ${strengthClass}`
      strengthText.textContent = text
    }
    return true
  }
}

function validateConfirmPassword() {
  const passwordInput = document.getElementById("password")
  const confirmPasswordInput = document.getElementById("confirmPassword")
  const password = passwordInput.value
  const confirmPassword = confirmPasswordInput.value
  const formGroup = confirmPasswordInput.closest(".form-group")

  if (!confirmPassword || password !== confirmPassword) {
    formGroup.classList.add("error", "password-mismatch")
    formGroup.classList.remove("success", "password-match")
    return false
  } else {
    formGroup.classList.remove("error", "password-mismatch")
    formGroup.classList.add("success", "password-match")
    return true
  }
}

function validateTerms() {
  const termsCheckbox = document.getElementById("terms")
  return termsCheckbox.checked
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

function handleSignup(e) {
  e.preventDefault()

  const isNameValid = validateFullName()
  const isEmailValid = validateEmail()
  const isPasswordValid = validatePassword()
  const isConfirmPasswordValid = validateConfirmPassword()
  const areTermsAccepted = validateTerms()

  if (!isNameValid || !isEmailValid || !isPasswordValid || !isConfirmPasswordValid) {
    showNotification("Por favor, corrija os erros no formulário", "error")
    return
  }

  if (!areTermsAccepted) {
    showNotification("Você deve aceitar os termos de uso", "error")
    return
  }

  const signupBtn = document.querySelector(".signup-btn")

  // Simular loading
  signupBtn.classList.add("loading")
  signupBtn.textContent = "Criando conta..."

  // Simular criação de conta
  setTimeout(() => {
    showNotification("Conta criada com sucesso! Redirecionando...", "success")

    // Redirecionar para a página de login após 1.5 segundos
    setTimeout(() => {
      window.location.href = "index.html"
    }, 1500)
  }, 2000)
}

// ==================== INICIALIZAÇÃO DO CADASTRO ====================
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
  const signupForm = document.getElementById("signupForm")
  const fullNameInput = document.getElementById("fullName")
  const emailInput = document.getElementById("email")
  const passwordInput = document.getElementById("password")
  const confirmPasswordInput = document.getElementById("confirmPassword")

  // Validação em tempo real
  fullNameInput.addEventListener("blur", validateFullName)
  emailInput.addEventListener("blur", validateEmail)
  passwordInput.addEventListener("input", validatePassword)
  confirmPasswordInput.addEventListener("blur", validateConfirmPassword)

  // Validar confirmação de senha quando a senha principal muda
  passwordInput.addEventListener("input", () => {
    if (confirmPasswordInput.value) {
      validateConfirmPassword()
    }
  })

  // Submissão do formulário
  signupForm.addEventListener("submit", handleSignup)

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
      showNotification(`Cadastro com ${platform} em desenvolvimento`, "info")
    })
  })

  // Links de termos e privacidade
  document.querySelector(".terms-link").addEventListener("click", (e) => {
    e.preventDefault()
    showNotification("Página de termos de uso em desenvolvimento", "info")
  })

  document.querySelector(".privacy-link").addEventListener("click", (e) => {
    e.preventDefault()
    showNotification("Página de política de privacidade em desenvolvimento", "info")
  })

  console.log("🚀 DigitalHub Cadastro inicializado!")
})
