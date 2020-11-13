# [Naughty Button](https://naughty-bhaskara-fdbe8e.netlify.app)

### Version 1
 - [@Kritzware](https://github.com/kritzware):
   ```js
   document.getElementById("btn").click()
   ```
 - [@Midnight-Conqueror](https://github.com/Midnight-Conqueror):
   ```js
   document.getElementsByClassName('button')[0].click()
   ```
 
### Version 2
- [@Midnight-Conqueror](https://github.com/Midnight-Conqueror):
  ```js
  const button = document.getElementsByClassName('button')[0]
  button.dispatchEvent(new Event('mouseover'))
  button.dispatchEvent(new Event('click'))
  ````
