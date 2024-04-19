# mtm6302-capstone-shap0011

- Olga Durham
- 040687883
- Pokedex

# Capstone Project - Part 2

- Added empty Mockup-test.pdf document

# Web App Mockup (Adobe XD)

1. Create a Web App letter logo with Adobe AI and save it as logo_pokedex.svg file:
   - use letters 'P' and 'd'
   - use font Tw Cen MT Regular
   - use colors 'white' #FFFFFF RGB value (255, 255, 255) and 'pink' #DA4899 RGB value (204, 51, 153)
2. Colors and Fonts:

   - Colors:
     - White #FFFFFF RGB value (255, 255, 255)
     - Pink #DA4899 RGB value (204, 51, 153)
     - Dark Teal #0B3C40 RGB value (11, 60, 64)
     - Brown #683F56 RGB value (132, 87, 112)
     - Yellow #FFED71 RGB value (255, 237, 113)
     - Blue #48CBD9 RGB value (72, 203, 217)
   - Fonts:
     - Tw Cen MT Regular
     - Century Gothic Regular

3. Create 1920 x 1080 Web 1920 Web App layout
4. Create header
   - Menu Font TW Cen MT Regular 38px
   - Logo text Font TW Cen MT Regular 48px
5. Create main
   - Font for lbl Tw Cen MT 48px Regular
   - Text Century Gothic 28 Regular
   - Characteristics Tw Cen MT 38px
   - Notification, Button text, List Pokemon names Tw Cen MT 38px Regular
   - List Pokemon Characteristics Tw Cen MT 28px Regular
6. Create footer

   - Menu, Contact, Copyright Font TW Cen MT Regular 28px
   - Logo text 48px

7. Create 768 x 1024 iPad Web App layout
8. Create header
   - Menu Font TW Cen MT Regular 38px
   - Logo text Font TW Cen MT Regular 48px
9. Create main
   - Font for lbl Tw Cen MT 48px Regular
   - Text Century Gothic 28 Regular
   - Characteristics Tw Cen MT 38px
   - Notification, Button text, List Pokemon names Tw Cen MT 38px Regular
   - List Pokemon Characteristics Tw Cen MT 28px Regular
10. Create footer

    - Menu Font TW Cen MT Regular 28px
    - Contact, Copyright Font TW Cen MT Regular 23px
    - Logo text 48px

11. Create 375 x 667 iPhone 6/7 Web App layout
12. Create header
    - Menu Font TW Cen MT Regular 38px
    - Logo text Font TW Cen MT Regular 48px
13. Create main
    - Font for lbl Tw Cen MT 48px Regular
    - Text Century Gothic 23 Regular
    - Characteristics Tw Cen MT 23px
    - Notification, List Pokemon names Tw Cen MT 23px Regular
    - Button text, List Pokemon names Tw Cen MT 28px Regular
    - List Pokemon Characteristics Tw Cen MT 23px Regular
14. Create footer
    - Menu Font TW Cen MT Regular 23px
    - Copyright Font TW Cen MT Regular 18px
    - Logo text 48px

# Capstone Project - Part 3

- Create a part-3 branch from the part-2 branch
- Switch to the part-3

## Create a prototype of the web application using HTML, CSS, and JavaScript

1. Following files have been added to the prototype:
   - HTML (index.html)
   - CSS (style.css)
   - JavaScript (script.js)
2. Create the closely matched the mockup prototype:
   - Create layout: header, main, footer
   - Create navigation bar with logo (brand) link, 'Home', 'How to Play', 'Gallery', and 'My Pokémon' links. Add a toggle button and 'hamburger' (toggler) icon
3. Created a block with big pokemon image and a block with pokemon details.
4. Created grid 5 x 4. Inserted pokemon images and button images.
5. Media query added. Responsive mobile and tablet layouts.

# Capstone Project - Part 4

- Create a part-4 branch from the part-3 branch
- Switch to the part-4
- logoSVG.js file created.The svg-related code replaced to there.

1. Retrieved the elements of the *#pokemon*, *#pokemonBigImg*, and *#myChosenPokemon* storing the elements to the variables **$pokemon**, **$pokemonBigImg**, and **$myPokemon**.
2. Created new variables **pokemon** and **myPokemon** and set them to empty arrays.
3. Created a function **buildPokemon(pokemon)** to build the *pokemon list*:
   - use *if ... else if* statement to define pokemon id for two url length and build gallery of pokemon
   - return html gallery with thumbnails  and pokemon name as values of *alt* and *title* image attributes 
4. Create an *async function getPokemon()* to populate the *20 pokemon gallery*
5. Write code to run when the page loads and get the pokemon gallery *getPokemon()*
6. Write async function *getPok(id)* to fetch and display a single pokemon
7. Change style of Big Pokemon Block for better usability (html, js, css)
8. Define the event listener for the click event for a single pokemon
9. Write a function *buildPokemonNext(pokemon)* to populate the gallery with next 20 pokemon
10. Write async function *getPokemonNext()* to fetch next 20 pokemon
11. Define the event listener for the click event to load next 20 pokemon
12. Change style of Pokemon Gallery Block for better usability (html, js, css)

