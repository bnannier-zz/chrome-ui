# chrome-ui

### What can Lerna do?

The two primary commands in Lerna are `lerna bootstrap` and `lerna publish`.

`bootstrap` will link dependencies in the repo together.
`publish` will help publish any updated packages.

### Getting Started
Let's start by installing Lerna globally with [npm](https://www.npmjs.com/).
```sh
$ npm install --global lerna
```

### Bootstrap
```sh
$ lerna bootstrap
```

Bootstrap the packages in the current Lerna repo.
Installs all of their dependencies and links any cross-dependencies.

When run, this command will:

1. `npm install` all external dependencies of each package.
2. Symlink together all Lerna `packages` that are dependencies of each other.
3. `npm run prepublish` in all bootstrapped packages.
4. `npm run prepare` in all bootstrapped packages.


### Publish
```sh
$ lerna publish
```

Publish packages in the current Lerna project. When run, this command does the following:

Creates a new release of the packages that have been updated.
Prompts for a new version.
Creates a new git commit/tag in the process of publishing to npm.

More specifically, this command will:
1. Run the equivalent of `lerna updated` to determine which packages need to be published.
2. If necessary, increment the `version` key in `lerna.json`.
3. Update the `package.json` of all updated packages to their new versions.
4. Update all dependencies of the updated packages with the new versions, specified with a [caret (^)](https://docs.npmjs.com/files/package.json#dependencies).
5. Create a new git commit and tag for the new version.
6. Publish updated packages to npm.

> Lerna won't publish packages which are marked as private (`"private": true` in the `package.json`).
