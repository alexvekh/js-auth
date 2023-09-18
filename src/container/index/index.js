document.addEventListener('DOMContentLoaded', () => {
  // execute when content already loaded
  if (window.session) {
    const { user } = window.session

    console.log(user)
  }
})
