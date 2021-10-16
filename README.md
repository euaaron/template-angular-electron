`electron` &nbsp; `typescript` &nbsp; `angular` &nbsp; `nodejs` &nbsp; `windows` &nbsp; `linux`  &nbsp; `desktop` &nbsp; `web` &nbsp; `multi-platform`

![header](https://raw.githubusercontent.com/euaaron/template-angular-electron/main/docs/README-header.jpg?token=AGJCZYW5RXEENQUF6GMPYIDBOR3UE)

A simple multi-platform Electron template made to work with Angular Ivy.

## About

This is an Angular project that works inside an Electron "container".

All Angular-CLI commands still works here, but some scripts where changed.

### Scripts

- `ng e2e` will use protractor to run e2e tests, just like set by Angular CLI.
- `ng test` will use karma + jasmine to run unit tests, just like set by Angular CLI
- `ng lint` will run ESLint instead of TSLint.
- `start` script will start Angular and Electron concurrently - may break if Electron starts before Angular.
- `start-web` will run `ng serve` like default Angular-CLI `start` script does.
- `start-app` will run build Electron and start it from the built source.
- `build` will build both Angular with `ng build --prod` and Electron with `tsc --build electron` - the build order matters, switch this and Angular will erase Electron's build files and the software will not start.
- `build-web` will only build Angular.
- `build-app` will only build Electron.
- `pack` will make distributed packages form all Operating Systems that supports Electron, including MacOS.
- `pack-win` will make a 64bits package for Windows (.exe).
- `pack-linux` will make a 64bits package for Linux.

> Everything else works like a common Angular-CLI generated project

## Further help

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.14, if you aren't familiar with Angular projects, consider access the previous link to learn more about it.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Also check [Electron Documentation](https://www.electronjs.org/docs/latest/) if you don't know it yet.

## How To Get Started

1. Create a new repository on GitHub [using this as a template](https://github.com/euaaron/template-angular-electron/generate);
2. Open your new repository and clone it or open at GitHub Codespaces;
3. Open the folder on VS Code or a terminal and run `npm install` or `yarn` to download and install the project dependencies;
4. Start coding!

> Tip: You can generate components, modules, services and everything from Angular normally.

**This project uses NodeJs, so you need it to start.**

## How to Code with Live Reload

- easy way:
  1. run `start-web`.
  2. access `localhost:4200` inside any browser.
  3. Edit your code and see the changes at the browser.
- alternative way:
  1. Certify that `environment.production` is set to `false`
  2. Run `start-web`.
  3. Open another terminal and run `start-app`.
  4. Edit your code and see the changes inside our Electron window! - this way you can still see at the browser by accessing `localhost:4200`.

## TO DO

- [x] add live reload capabilities to dev environment
- [ ] create a wiki
- [ ] improve documentation with code examples

## Copy and Collaboration

Feel free to collab with this project and/or to use to male your applications. I would appreciate if you credit this project with the link to this repo, so other developers can find and use it. But don't feel forced to do anything.

If you have an suggestion, problem or just want to say thanks, leave an issue!
