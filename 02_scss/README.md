# Project Documentation

SCSS is a powerful extension of CSS that introduces new features such as variables, nested rules, mixins, and more. It simplifies style development and maintenance, and after compilation, it is converted into standard CSS that is compatible with browsers.

## SCSS OVERVIEW

**Variables usage:** Variables allow for centralized style changes. For example, a single color can be reused in multiple places.

  ```jsx
    $primary-color: #d7c2d8;
    $font-color: #b3d9e1;
  
    //FOR HEADER COMPONENT
    background-color: $primary-color;
    border: 1px solid $font-color;
  
    //FOR BUTTON
    background-color: $font-color;
  ```

**`&` Usage for references to the parent element:**

  ```jsx
    .avatar {
        width: 120px;
        height: 120px;
        border-radius: 60% 40% 50% 50% / 40% 50% 50% 60%;
        object-fit: cover;
        border: 4px solid white;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
        margin-bottom: 1.5rem;
        transition: transform 0.3s ease;
    
        &:hover { 
            transform: scale(1.05);
            border-radius: 50%;
        }
    }
  ```







 
