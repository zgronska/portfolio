//Smooth scrolling on CTA
function handleClickScroll(section) {
  const sectionEl = document.querySelector(section)
  if (sectionEl) {
    sectionEl.scrollIntoView({ behavior: 'smooth' })
  }
}

export default handleClickScroll
