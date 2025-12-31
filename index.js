// Get elements
const shareButton = document.getElementById("shareButton")
const shareButtonMobile = document.getElementById("shareButtonMobile")
const shareTooltip = document.getElementById("shareTooltip")

function openShare() {
  shareButton.classList.add("active")
  shareTooltip.classList.add("active")
  shareButton.setAttribute("aria-expanded", "true")
}

function closeShare() {
  shareButton.classList.remove("active")
  shareTooltip.classList.remove("active")
  shareButton.setAttribute("aria-expanded", "false")
}

// Hover for desktop
shareButton.addEventListener("mouseenter", openShare)
shareButton.addEventListener("mouseleave", closeShare)

// Keep tooltip open when hovering tooltip itself
shareTooltip.addEventListener("mouseenter", openShare)
shareTooltip.addEventListener("mouseleave", closeShare)

// Mobile fallback (still click)
if (shareButtonMobile) {
  shareButtonMobile.addEventListener("click", (e) => {
    e.stopPropagation()
    shareTooltip.classList.toggle("active")
    shareButton.classList.toggle("active")
  })
}

// Keyboard accessibility
shareButton.addEventListener("focus", openShare)
shareButton.addEventListener("blur", closeShare)

// Social icon hover/click
const socialIcons = document.querySelectorAll(".social-icon")
socialIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.stopPropagation()
    const platform = icon.getAttribute("aria-label")?.replace("Share on ", "")
    console.log(`Sharing on ${platform}...`)
    closeShare()
  })
})

// Close with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && shareTooltip.classList.contains("active")) {
    closeShare()
    shareButton.focus()
  }
})
