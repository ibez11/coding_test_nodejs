
[![Latest Stable Version](https://img.shields.io/packagist/v/pipe-dream/laravel-create.svg)](https://packagist.org/packages/pipe-dream/laravel-create)
[![Total Downloads](https://img.shields.io/packagist/dt/pipe-dream/laravel.svg)](https://packagist.org/packages/pipe-dream/laravel)
[![License](https://img.shields.io/packagist/l/pipe-dream/laravel-create.svg)](https://packagist.org/packages/pipe-dream/laravel-create)

# ```Coding Test```(:fire::fire::fire:);

## Contents
  * [Installation](#installation)
  * [Usage](#usage)
    + [Quick start examples](#quick-start-examples)    
    + [Build your own templates](#build-your-own-templates)
    + [Querying the Abstract Syntax Tree](#querying-the-abstract-syntax-tree)
    + [LaravelFile available methods](#laravelfile-available-methods)    
    + [Gotchas](#gotchas)
  * [Contributing](#contributing)
    + [Development installation](#development-installation)
    + [Roadmap](#roadmap)  
  * [License](#license)
  * [Acknowledgements](#acknowledgements)
  * [Like this package?](#like-this-package-)

## Installation

```bash
npm install
```

Thats it, now open your browser and go to `/pipe-dream` and start designing.

## Usage
If you havent already, [watch the 2 minute video](https://www.youtube.com/watch?v=doUlmZdvP1o).

* List your models and tables in the sketch window. Note the schema is created in real-time and is being displayed on the right side of the screen.

<kbd><img src="src/public/img/screenshots/design.png" /></kbd>

* Here are some pointers on the sketch syntax
```js
// use PascalCase for models
Garage
location
capacity

// Separate your entities into chunks
Car
color
user_id // foreign key

// use snake_case model1_model2 to setup a ManyToMany relationship
car_garage 

// use button to add a default user system
User 
name
email
email_verified_at
password
remember_token

// use snake_case to create a table
password_resets
email
token
```

 * Review the list of files that are going to be created.

<kbd><img src="src/public/img/screenshots/review.png" /></kbd>

* Commit the files to disk.

<kbd><img src="src/public/img/screenshots/build.png" /></kbd>

* You are now ready to migrate and seed. Go ahead and check out the API (at `/api`), that contains placeholder values 

<kbd><img src="src/public/img/screenshots/api.png" width="400" /></kbd>

## Contributing
PRs and issues are welcome. In addition to the issue section we have a [Trello board](https://trello.com/b/R11mhfdy/pipe-dream) listing things that we need help with.
To get started and to learn more about the platform check out [pipe-dream/docs](https://github.com/pipe-dream/docs)

## License
MIT

## Stay tuned!
Follow me on twitter: [@ajthinking](https://twitter.com/ajthinking)

<a href="https://www.patreon.com/ajthinking" >Help me continue this work | Patreon</a>
