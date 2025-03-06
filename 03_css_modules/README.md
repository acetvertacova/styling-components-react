# Project Documentation

CSS Modules are a modern way to style components in React, allowing for style isolation and preventing conflicts.

## CSS Modules Overview

CSS Modules work like regular CSS/SCSS files but automatically make class names unique for each component. This helps prevent style conflicts in large projects.

**Project Structure** 

Each folder in the components/ contains the file for component styling and component itself. In the file `_utils.scss` we combine all variables and mixins, which will be used in the components.



```
  src/
  │── assets/
  │── components/
  │   ├── Footer/
  │   │   │── Footer.module.scss
  │   │   │── index.jsx
  │   ├── Header/
  │   │   │── Header.module.scss
  │   │   │── index.jsx
  │   ├── Slider/
  │   │   │── index.jsx
  │   │   │── profiles.js
  │   │   │── Slider.module.scss
  │── styles/
  │   ├── mixins/
  │   │   │── _utils.scss
  │   │   │── _variables.scss
  │   │── main.scss
  │── App.jsx
  │── main.jsx
  |── ...
```

**Let's review code on the base of one component:**

Style code:

```
  @import '../../styles/_utils';
  
  .header {
      display: flex;
      background-color: $primary-color;
      justify-content: space-between;
      margin-bottom: 2rem;
      text-align: center;
      border-radius: 10px;
      border: 1px solid $border-color;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  
      .title {
          margin: 0;
          font-size: 1.9rem;
          color: $text-color;
          font-family: $font;
  
          @include lg {
              padding: 1rem;
          }
      }
  }
```

Component code:

```
  // Style import as a variable
  import styles from './Header.module.scss';
  
  export default function Header({theme}){
    // styles — an object, in which unique classe's names are stored.
      return(
          <header className={styles.header}>
              <h2 className={styles.title}>IT Blog</h2>
          </header>
      )
  }
```

## Instructions for Running the Project

  1. Navigate to the project folder:

    `cd <path to the project folder>`

  2. Install dependencies:

    `npm install`

  3. Install SCSS:

     `npm install sass`
    
  4. Run the project:

    `npm run dev`

## Use Cases for CSS Modules:

 - Large-scale applications: In large projects, CSS Modules prevent global style pollution by generating unique class names.
 - Combining with SCSS: You can use SCSS features (like variables, mixins, and nesting) inside CSS Modules for better styling flexibility.
 - Improved performance over inline styles: Unlike inline styles or CSS-in-JS solutions, CSS Modules are optimized for performance since they are precompiled.

### The following image illustrates the successful launch of the project:

<img src="../03_css_modules//public/reference.png">
