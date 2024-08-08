const activeAdd = () => {
  const btn = document.querySelectorAll('.btn-active')

  btn.forEach((btn) => {
    console.log(btn, "shdlfjşkjadhk")
    btn.addEventListener('click', () => {
      removeClatlist();
      btn.classList.add('active');
    })
  })
  const removeClatlist = () => {
    btn.forEach((btn) => {
      btn.classList.remove('active')
    })
  }
}

export default activeAdd