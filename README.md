# Namste React

# Episode 1
 1. created HTML with Hello World
 2. Added React CDN
 3. Implemented React.createElement, ReactDOM.createRoot, render() to render elements on dom.

 Note:  
    createElement takes 3 arguments and is an Object with symbol,props,etc  
    Syntax : React.createElement(element,arrtibute object,value)


# Episode 2 (1:36)

-- How to ingnit a React app with out npx create react-app  
-- How to built a product ready app  
-- Not react only but lot of packages required to make our app fast & faster  
-- NPM (NPM manages packages) does for us  
-- npm itin and set up  
-- package.json is configuration for npm  
-- Most important package for our project is Bundler (Webpack, vite, Parcel, etc) basically bundle app to makeit production ready  
-- we will be using Parcel with (npm install -D parcel)  
-- ^(upgrade/update to minor version) and ~(upgrade/update to major version)  
-- Package.json keeps track of dependencies's approx version where as package-lock.json keeps track of exact versions of dependencies  
-- Tarnsitive dependencies are having dependencies with dependencies  
-- npm installs a package, npx executes the package  
-- automatically refereshing page is known as HMR - Hot Module Replacement (File watching algorithem)  
-- parcel doing catching for us as well.  
-- parcel does image optimisation, minification, bundeling, compressing  
-- parcel do consitant hashing
-- code splitting
-- differential bundling  
-- better error reporting, Diagnostic
-- Parcel gives you features to host on HTTPS  
-- Tree shaking algorithem - remove unused code for you  
