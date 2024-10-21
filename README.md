# Todo List App

## Table of contents
  
- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### screenshot
![](./screenshot.jpg) 

### Links

- Live Site URL: [live site](https://list-todo-k.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- SASS and CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://vite.dev/) - React framework (vite)

### What I learned

```JS
  useEffect(() => {
    const timer = setInterval(() => {
      setToday(new Date());
    }, 100000)
    return () => {
      clearInterval(timer);
    }
  }, [])

   onClick={() => {
        updatedIcon();
        document.documentElement.setAttribute('data-theme',
          themeName === "dark" ? "light" : "dark")
      }}
```

