document.addEventListener('DOMContentLoaded', function() {
  
  // Toggle between login and signup panels
  const switchLinks = document.querySelectorAll('.switch-link');
  const panels = document.querySelectorAll('.auth-panel');
  
  switchLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('data-target');
      panels.forEach(panel => {
        panel.classList.remove('active');
      });
      
      document.getElementById(targetId).classList.add('active');
      
      // Add floating animation on switch
      const targetPanel = document.getElementById(targetId);
      targetPanel.style.animation = 'none';
      setTimeout(() => {
        targetPanel.style.animation = 'gentleFloat 8s ease-in-out infinite';
      }, 10);
    });
  });
  
  // Input focus glow enhancement
  const inputs = document.querySelectorAll('.input-group input');
  
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.querySelector('.input-glow').style.boxShadow = 'inset 0 0 12px rgba(0, 247, 255, 0.6)';
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.querySelector('.input-glow').style.boxShadow = 'inset 0 0 8px rgba(0, 247, 255, 0.4)';
    });
  });
  
  // Password toggle functionality
  const togglePasswordIcons = document.querySelectorAll('.toggle-password');
  
  togglePasswordIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      const inputId = this.getAttribute('data-target');
      const input = document.getElementById(inputId);
      
      if (input.type === 'password') {
        input.type = 'text';
        this.classList.replace('fa-eye-slash', 'fa-eye');
      } else {
        input.type = 'password';
        this.classList.replace('fa-eye', 'fa-eye-slash');
      }
    });
  });
  
  // Add floating animation to active panel
  const activePanel = document.querySelector('.auth-panel.active');
  if (activePanel) {
    activePanel.style.animation = 'gentleFloat 8s ease-in-out infinite';
  }
  
  // Create floating particles in background
  const particlesContainer = document.querySelector('.particles');
  const particleCount = 30;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 4 + 2 + 'px';
    particle.style.height = particle.style.width;
    particle.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
    particle.style.borderRadius = '50%';
    particle.style.boxShadow = '0 0 10px rgba(0, 247, 255, 0.7)';
    particle.style.opacity = Math.random() * 0.6 + 0.2;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animation = `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite`;
    particle.style.animationDelay = Math.random() * 5 + 's';
    particlesContainer.appendChild(particle);
  }
  
  // Add twinkle animation dynamically
  const style = document.createElement('style');
  style.textContent = `
    @keyframes twinkle {
      0%, 100% { transform: scale(1); opacity: 0.6; }
      50% { transform: scale(1.2); opacity: 1; }
    }
  `;
  document.head.appendChild(style);
  
  // Button ripple effect
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      let ripple = document.createElement('span');
      ripple.classList.add('ripple');
      this.appendChild(ripple);
      
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;
      
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
  
  // Add ripple style
  const rippleStyle = document.createElement('style');
  rippleStyle.textContent = `
    .ripple {
      position: absolute;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    }
    
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(rippleStyle);
});
