# Getting started

Run these tasks

```sh
npm install -g typescript@latest
tsc --version  
```

Compiling typescript code

```sh
tsc my-file.ts
```

This will create a .js file

To initializa a new typescript project,

```sh
tsc init
```

This create a project structure with a tsconfig.json file indicating success.

I may contain information that looks almost like this,

```sh
{
   "compilerOptions": {
       "module": "commonjs",
       "target": "es5",
       "noImplicitAny": false,
       "sourceMap": false,
       "pretty": true
  },
   "exclude": [
   "node_modules"
   ]
}
```
