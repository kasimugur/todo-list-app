const btn = document.querySelectorAll('.btn-active')

btn.forEach((btn) => {
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