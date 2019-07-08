# Payslip-generator

## Install

    $ git clone https://github.com/dawsonsuen/Payslip-generator.git
    $ cd Payslip-generator
    $ npm install

## Configure app

Open `tsconfig.json` then overwrite it with the following code:

{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,

    "sourceMap": true,
    "target": "es5",
    "jsx": "react",
    "module": "commonjs",
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": false,
    "noImplicitAny": false,
    "noImplicitReturns": false,
    "noImplicitThis": true,
    "removeComments": true,
    "strictNullChecks": false,
    "outDir": "build",
    "lib": [
      "es6",
      "es7",
      "dom"
    ],
    "suppressImplicitAnyIndexErrors": true,
    "noUnusedLocals": false
  },
  "exclude": [
    "dist",
    "build",
    "node_modules",
    "scripts",
    "webpack",
    "jest",
  ]
}

## Start & watch

    $ npm start

## Languages & tools

### HTML

### TypeScript

### CSS

### JSX
