const activeAdd = () => {
  const btn = document.querySelectorAll('.btn-active')

  btn.forEach((btn) => {
    btn.addEventListener('click', () => {
      removeClasslist();
      btn.classList.add('active');
    })
  })
  const removeClasslist = () => {
    btn.forEach((btn) => {
      btn.classList.remove('active')
    })
  }
}

export default activeAdd