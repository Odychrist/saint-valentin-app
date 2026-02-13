/* const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const passwordInput = document.getElementById("password");
const password = "CONNEXION5G+";
const heartsContainer = document.querySelector(".hearts");
const typewriterElement = document.getElementById("typewriter-text");

submitBtn.addEventListener("click", () => {
  const userPassword = passwordInput.value.trim();

  // Champ vide
  if (userPassword === "") {
    message.textContent = "Oups ! Entre un mot de passe 💭";
    message.style.color = "brown";
    return;
  }

  // Mot de passe incorrect
  if (userPassword.toUpperCase() !== password) {
    message.textContent =
      "Hmm… ce n’est pas encore ça. Concentre-toi et réessaie 💗";
    message.style.color = "brown";
    return;
  }

  // Mot de passe correct
  if (userPassword.toUpperCase() === password) {
    message.textContent = "Bienvenue dans mon cœur ❤️";
    message.style.color = "#2ecc71";

    // Activation effets magiques
    document.querySelector(".magic-overlay").classList.add("active");
    document.querySelector(".container").classList.add("magic");
  }

  // Petite animation avant redirection
  setTimeout(() => {
    window.location.href = "love.html";
  }, 1800);
});

passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    submitBtn.click();
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Position horizontale aléatoire
  heart.style.left = Math.random() * 100 + "vw";

  // Taille aléatoire
  const size = Math.random() * 15 + 10;
  heart.style.width = size + "px";
  heart.style.height = size + "px";

  // Durée aléatoire
  const duration = Math.random() * 5 + 5;
  heart.style.animationDuration = duration + "s";

  heartsContainer.appendChild(heart);

  // Suppression après animation
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Génération continue
setInterval(createHeart, 500);

if (typewriterElement) {
  const fullText = typewriterElement.textContent;
  typewriterElement.textContent = "";

  let index = 0;
  const speed = 35; // vitesse d’écriture (ms)

  function typeWriter() {
    if (index < fullText.length) {
      typewriterElement.textContent += fullText.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  // Petit délai avant de commencer
  setTimeout(typeWriter, 800);
}
 */

const submitBtn = document.getElementById("submitBtn");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");
const heartsContainer = document.querySelector(".hearts");

if (submitBtn && passwordInput) {
  const password = "CONNEXION5G+";

  submitBtn.addEventListener("click", () => {
    const userPassword = passwordInput.value.trim();

    if (userPassword === "") {
      message.textContent = "Oups ! Entre un mot de passe 💭";
      message.style.color = "brown";
      return;
    }

    if (userPassword.toUpperCase() !== password) {
      message.textContent =
        "Hmm… ce n’est pas encore ça. Concentre-toi et réessaie 💗";
      message.style.color = "brown";
      return;
    }

    message.textContent = "Bienvenue dans mon cœur ❤️";
    message.style.color = "#2ecc71";

    document.querySelector(".magic-overlay").classList.add("active");
    document.querySelector(".container").classList.add("magic");

    sessionStorage.setItem("loveAccess", "granted");

    setTimeout(() => {
      window.location.href = "love.html";
    }, 1800);
  });

  passwordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") submitBtn.click();
  });
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Position horizontale aléatoire
  heart.style.left = Math.random() * 100 + "vw";

  // Taille aléatoire
  const size = Math.random() * 15 + 10;
  heart.style.width = size + "px";
  heart.style.height = size + "px";

  // Durée aléatoire
  const duration = Math.random() * 5 + 5;
  heart.style.animationDuration = duration + "s";

  heartsContainer.appendChild(heart);

  // Suppression après animation
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Génération continue
setInterval(createHeart, 500);

const typewriterElement = document.getElementById("typewriter-text");

if (typewriterElement) {
  const fullText = typewriterElement.textContent.trim();
  typewriterElement.textContent = "";

  let index = 0;
  const speed = 35;

  function typeWriter() {
    if (index < fullText.length) {
      typewriterElement.textContent += fullText.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  setTimeout(typeWriter, 800);
}

// PDF

/* const downloadBtn = document.getElementById("downloadPdf");

downloadBtn.addEventListener("click", () => {
  const original = document.getElementById("love-content");

  if (!original) {
    alert("Contenu PDF introuvable");
    return;
  }

  // Clone propre du contenu
  const clone = original.cloneNode(true);
  console.log(clone);

  // Nettoyage des animations
  clone.style.animation = "none";
  clone.style.transform = "none";
  clone.style.opacity = "1";
  clone.style.background = "#ffffff";
  clone.style.color = "#000";
  clone.style.boxShadow = "none";

  // Désactiver backdrop-filter
  clone.querySelectorAll("*").forEach((el) => {
    el.style.animation = "none";
    el.style.backdropFilter = "none";
    el.style.opacity = "1";
  });

  // Créer un conteneur temporaire
  const wrapper = document.createElement("div");
  wrapper.style.padding = "40px";
  wrapper.appendChild(clone);

  document.body.appendChild(wrapper);

  const options = {
    margin: 10,
    filename: "message_d_amour.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: {
      scale: 2,
      useCORS: true,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    },
  };

  // Génération PDF
  html2pdf()
    .set(options)
    .from(wrapper)
    .save()
    .then(() => {
      document.body.removeChild(wrapper);
    });
}); */

// MUSIQUE
const music = document.getElementById("loveMusic");
const musicBtn = document.getElementById("musicToggle");

if (music && musicBtn) {
  music.volume = 0.4;
  music.play();
}

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.volume = 0.4;
    music.play();
    musicBtn.textContent = "⏸️ Musique";
  } else {
    music.pause();
    musicBtn.textContent = "▶️ Musique";
  }
});

/* if (music) {
  music.volume = 0.4;

  // Lancer la musique après interaction
  document.body.addEventListener(
    "click",
    () => {
      if (music.paused) {
        music.play().catch(() => {});
      }
    },
    { once: true },
  );
}

if (musicBtn) {
  musicBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      musicBtn.textContent = "⏸️ Musique";
    } else {
      music.pause();
      musicBtn.textContent = "▶️ Musique";
    }
  });
}

music.volume = 0.4;
let v = 0;
const fade = setInterval(() => {
  v += 0.02;
  music.volume = Math.min(v, 0.4);
  if (v >= 0.4) clearInterval(fade);
}, 100); */
