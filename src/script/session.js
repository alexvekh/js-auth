export const SESSION_KEY = 'sessionAuth'

export const saveSession = (session) => {
  try {
    //console.log(session)
    window.session = session
    localStorage.setItem(SESSION_KEY, JSON.stringify(session))
  } catch (error) {
    console.log(error)
    window.session = null
  }
}

export const loadSession = () => {
  try {
    const session = JSON.parse(localStorage.getItem(SESSION_KEY))
    console.log('session: ', session)

    if (session) {
      window.session = session
    } else {
      window.session = null
    }
  } catch (error) {
    console.log(error)
    window.session = null
  }
}
