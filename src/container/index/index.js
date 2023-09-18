document.addEventListener('DOMContentLoaded', () => {
  // execute when content already loaded

  //console.log(user)
  if (window.session) {
    const { user } = window.session

    if (user.isConfirm) {
      location.assign('/home')
    } else {
      location.assign('/signup-confirm')
    }
  } else {
    location.assign('/signup')
  }
})
