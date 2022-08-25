# Naughty Button

### [v0.0.0](https://5fa15e1ba0c5130008f6c886--naughty-bhaskara-fdbe8e.netlify.app/)
 - [@Kritzware](https://github.com/kritzware):
   ```js
   document.getElementById("btn").click()
   ```
 - [@Joel-Valentine](https://github.com/Joel-Valentine):
   ```js
   document.getElementsByClassName('button')[0].click()
   ```
 
### [v0.1.0](https://5faed4c321017a0007ccb586--naughty-bhaskara-fdbe8e.netlify.app/)
- [@Joel-Valentine](https://github.com/Joel-Valentine):
  ```js
  const button = document.getElementsByClassName('button')[0]
  button.dispatchEvent(new Event('mouseover'))
  button.dispatchEvent(new Event('click'))
  ```

### [v0.2.0](https://613753c62b4abc0008996f92--naughty-bhaskara-fdbe8e.netlify.app/)
- [@Joel-Valentine](https://github.com/Joel-Valentine):
  ```js
  const button = document.getElementsByTagName('button')[0]
  button.dispatchEvent(new Event('mouseover'))
  button.dispatchEvent(new Event('click'))
  ```

### [v0.3.0](https://naughty-bhaskara-fdbe8e.netlify.app/)
- [@Joel-Valentine](https://github.com/Joel-Valentine):
  ```js
  const button = document.getElementsByTagName('div')[2]
  button.dispatchEvent(new Event('mouseover'))
  button.dispatchEvent(new Event('click'))
  ```
  and
  ```js
  Object.keys(window).forEach(key => {
    if (/^on(mouse)/.test(key)) {
      window.addEventListener(key.slice(2), event => {
        if (event.type === 'mouseover') {
          const button = event.fromElement
          if (button) {
            button.dispatchEvent(new Event('mouseover'))
            button.dispatchEvent(new Event('click'))
          }
        }
      });
    }
  });
  ```
