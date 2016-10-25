## Synopsis

This project is my first attempt at creating a small, custom JavaScript DOM library using functional programming techniques.

## Code Example

one() --> uses the querySelector function to find the first matching element of the first CSS selector inserted.
```
console.log(modom.one('div'))
```
all() --> uses the querySelectorAll function to find all the matching elements of the CSS selector inserted.
```
console.log(modom.all('div'))
```
remove() --> uses the querySelector function to find the first matching element of the CSS selector inserted and follows with the .remove() function to remove that CSS selector.
```
console.log(modom.remove('h4'))
```
addClass() --> uses the querySelector function to find the first matching element of the CSS selector inserted into the first argument and follows with the classList.add() function, which adds the class through the second argument.
```
console.log(modom.addClass('h4', 'red'))
```
removeClass() --> similar to addClass(), but removes the class with the use of classList.remove() function.
```
console.log(modom.removeClass('h4', 'red'))
```
hasClass() --> states whether a CSS selector contains a class style with a true or false return value with the first argument finding the matching CSS selector, through the querySelector function, and the second argument using the .contains() function to see if that CSS selector has the class style inserted.
```
console.log(modom.hasClass('div', 'container-fluid'))
```
getAttr() --> uses the querySelector to find first CSS selector match and uses the .getAttribute() function to retrieve the HTML attribute inserted into the second argument.
```
console.log(modom.getAttr('div', 'class'))
```
setAttr() --> similar to getAttr() with the use of the querySelector, but uses the .setAttribute() function along with two arguments: the first being what HTML element you want to set and the second being what value you want to set within that element.
```
console.log(modom.setAttr('h4', 'class', 'red'))
```
setHTML() --> uses the querySelector to find first CSS selector match and uses .innerHTML function with a second argument that defines what text you want to insert into the retrieved CSS selector
```
console.log(modom.setHTML('h1', 'hello'))
```
getHTML() --> uses the querySelector to find the first CSS selector match and uses the .innerHTML function without an argument to retrieve the already defined text within the CSS selector.
```
console.log(modom.getHTML('h4'))
```
