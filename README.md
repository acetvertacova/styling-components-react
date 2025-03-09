# Styling Component in React

Mastering various methods of styling components in React, understanding their advantages and disadvantages, and learning the principles of their application in modern web applications. 
Developing the skills to make informed decisions when choosing a styling methodology based on project requirements and code maintainability conditions.

## Documentation
- [01-css](01_css/README.md)
- [02-scss](02_scss/README.md)
- [03-css-modules](03_css_modules/README.md)
- [04-css-in-js](04_css_in_js/README.md)
- [05-css-framework](05_css_framework/README.md)
- [06-component-library](06_component_library/README.md)

## Control Q

### In large projects, the following styling methods are preferable:

**CSS Modules:**

  - *Style Isolation:* Each component has its own styles, preventing global style pollution and naming conflicts.
  - *Simplicity:* Easily integrates with other technologies like Webpack.

**Tailwind CSS:**

  - *Speed of Development:* Accelerates UI creation with utility-first classes for all styling needs.
  - *Flexibility:* Doesn’t impose rigid constraints on component structure and styling.

 ### What are the advantages and disadvantages of CSS frameworks compared to other styling methods?

|     Advantage        |                                   Description                                  |
|----------------------|--------------------------------------------------------------------------------|
| **Time Efficiency**  | Speeds up development by providing pre-built styles and components.            |
| **Consistency**      | Ensures a uniform look and feel across the website, improving user experience. |
| **Responsiveness**   | Adapts well to different screen sizes, making mobile-friendly design easier.   |



|     Disadvantage          |                               Description                                      |
|---------------------------|--------------------------------------------------------------------------------|
| **Learning Curve**        | Requires learning the framework’s specific conventions and class structure.    |
| **Bloated Code**          | Includes extra code that may not be needed, potentially affecting performance. |
| **Limited Customization** | Can restrict design flexibility, making it harder to create a unique look.     |

### What is the difference between CSS Modules, regular CSS files, and SCSS?

**CSS:**

 - Standard stylesheet language for styling web pages
 - Global scope: selectors apply across the entire document
 - Simple syntax with selectors, properties, and values
 - No variables, functions
 - Browser-compatible without any compilation step

**CSS Modules:**

 - Unique class names to avoid style conflicts between components
 - Enables modular and reusable styling
 - Requires a build tool (like webpack) to process the CSS Modules
 - Helps solve the global namespace problem in regular CSS

**SCSS**

 - CSS with additional functionality such as variables, nesting, mixins, functions, and more
 - Must be compiled to regular CSS before deployment
 - Simplifies the creation and maintenance of styles.
 - Variables and mixins make the code compact.

### What are the advantages and disadvantages of using CSS-in-JS compared to other styling methods?

|                         CSS-in-JS (styled-components)                                     |
|-------------------------------------------------------------------------------------------|
| Styles are written in JavaScript using a library (e.g., styled-components).               |
| Adv: Styles are isolated. Ability to change styles via props. Support for dynamic styles. |
| Disadvanrage: Increases the size of JavaScript files. Dependency on external libraries.   |
| Suitable for applications with many interactions and conditions.                          |

## Source List

- [css vs scss](https://www.geeksforgeeks.org/what-is-the-difference-between-css-and-scss/)
- [css vs css-modules](https://medium.com/@nyshawnburton/css-vs-module-css-e7cee9d77f68)
- [css frameworks](https://www.freecodecamp.org/news/css-frameworks-vs-custom-css/)
- [course git](https://github.com/MSU-Courses/development-of-web-application-with-react/blob/main/03_Component_Styling/03_02_Methods_of_Component_Styling.md)
