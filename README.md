# exchange-app
The simple (no dependencies) isomorphic Flux (Redux) pattern implementation example.    
To download and build dist, please run:   

    git clone git@github.com:alexander-shvets/exchange-app.git
    cd exchange-app
    npm install
    npm run build
    open ./dist/index.html

#### Requirements
Write a simple PHP application that given a number of pennies will calculate the minimum number of Sterling coins needed to make that amount.   
Eg. 123p = 1 x £1, 1 x 20p, 1 x 2p, 1 x 1p

* Account for only the common £2, £1, 50p, 20p, 2p and 1p coins. Ignore £5 coins.
* The user interface should consist of a input field that accepts an 'amount' string (Eg. 92p,
£2.12) and displays the denominations needed when the user hits 'enter’.
* Next use progressive enhancement to load the result into a Lightbox.

#### What we are looking for
* High quality and maintainable code.
* Use of best practice techniques.
* “Atomic” commits with good commit messages.
* Accessible, semantic, valid HTML.
* Automated tests for your code.
* Well documented and commented code where necessary.
* Follow coding standards.
* Extensible user input parsing and validation.
* To sensibly separate functionality following modern paradigms.
* Clean visual design.
