# NgxElectroBro

A simple multi-platform web browser made with Electron + Angular Ivy

## About

This is an Angular project that works inside an Electron "container".

All Angular-CLI commands still works here, but some scripts where changed.

### Changes

- `ng lint` will run ESLint instead of TSLint.
- `start` script will now build Angular and Electron, then electron will run.
- `start:serve` will do `ng serve` like default Angular-CLI `start` script does.
- `build` will do the same thing that `start` but it will include a `--prod` at angular's script.
- `electron` will run `electron .`.

> Everything else works like a common Angular-CLI generated project

## Further help

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.14, if you aren't familiar with Angular projects, consider access the previous link to learn more about it.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Also check [Electron Documentation](https://www.electronjs.org/docs/latest/) if you don't know it yet.

## How To

### Develop with Live Reload

- easy way:
  1. run `ng serve`.
  2. access `localhost:4200` inside any browser.
- alternative way:
  1. Certify that `environment.production` is set to `false`
  2. Run `ng serve`.
  3. Open another terminal and run `tsc -w`.
  4. Finally, open on more terminal and run `yarn start:electron`.

## TO DO

- [x] add live reload capabilities to dev environment
- [ ] create a fallbacks to http and to a search engine when an address is tried to be accessed
- [ ] create a configuration tab where user can choose:
  - [ ] the default search engine,
  - [ ] language
  - [ ] theme
    - [ ] change colors manually
      - [ ] main color
      - [ ] accent color
      - [ ] secondary color
      - [ ] background color
      - [ ] highlight-text color
      - [ ] highlight-background color
    - [ ] pre-definitions
      - [ ] glass theme
      - [ ] dark theme (dracula or mono-dracula, let's see which one fits better)
      - [ ] light theme
    - [ ] position of the title bar
- [ ] add support for multiple tabs
- [ ] add support to mute a tab
- [ ] add support to close all tabs from right, left or both
- [ ] create a logo
- [ ] add i18n support
- [ ] create a build and package pipeline to publish the app for windows, linux and osx
