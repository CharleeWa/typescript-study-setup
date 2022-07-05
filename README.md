TypeScript Study Setup
=================

Quick start learning typescript, base on `ts-node` and `ts-node-dev`.


Quickstart
----------

- Get the project code

```bash
git clone https://github.com/CharleeWa/typescript-study-setup.git
```

- Installation dependencies

```bash
cd typescript-study-setup

# with npm
npm install

```

- run

```bash
npm run tnd
```

**notes.**

The default startup file is index.ts, if yours is not, don't forget to change the command line script.

```
open the package.json

"scripts": {
  "tnd": "ts-node-dev --respawn --transpile-only yours"
}
```