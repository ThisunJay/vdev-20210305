# MovieApp

These are the answers for the questions given in the Practical Test – SE - Fullstack JS

* react app build location changed to backend-app/src/dist using the vite.config.ts to serve the static page when running the server.

* Yarn was used instead of NPM

* Movies jason object is stored in MovieList.json file, backend will load them and send them as a response to GET /api/movies

## v20210305a

## Q1

```bash
git init
```

## Q2

```bash
git add README.md
```

## Q3
```bash
git commit -m "Empty project with README"
```

## Q4
```bash
git remote add origin https://github.com/ThisunJay/vdev-20210305.git
```

## Q5
```bash
git push -u origin master
```

## Q6
Node JS is a Javascript runtime environment, it runs on V8 engine. it is event driven and it uses single threaded event loop architecture for handling concurrent users.

## Q7
A web platform is infrastructure. for example ebay is a web platform it provides a service for its clients. however a news site like hiru news is not. it just provides news to whoever sees them. in a real world example a roadside market place can be given, it provides the vendors space and a roof to sell items under (infrastructure) the owners of their own shop might not be a platform.

## Q8
TypeScript is very much similer to JavaScript, Typescirpt offers some additional features on top of javascript own features. the codes written using typescript will go through a process called transpilation to convert TypeScript code to JavaScript. therefor Typescipt runs on any JavaScript runtime. one of the most important features typescript provides which javascript does not have is type system. so that developer can say what type a variable is (string, number, etc.) this lowers the risk of running into unexpected bugs in the development.

## Q9
WebAssembly is a new type of code that can be run in modern browsers. what normal assemblies does is it converts a high level language to a machine readable code. same as that, what WebAssembly does is it compiles high level code to be able to execute on a browser. this is best suited for performance demanding applications such as games, vide editing, etc.

## Q10
Fastify is faster than Express.js, Fastify is a easy to use very high performance compared to Express.js, and it is lightweight. using benchmarks it is found that fastify is twice as fast as express.js. also fastify has built in support for TypeScript. Fastify provides faster performance with low overhead.

## Q11
Tailwind CSS is a very unopinionated frontend framework tool. meaning, the developer has the freedom to decide how every component works and looks. and it has no build in UI components because they are very customizable. and tailwind does not have a default theme.

## Q12
Vite.js is a no bundler DEV environment. normally large javascript projects could contain thousends of modules. when starting the server it could take minutes to build and start the development server. and it could take some time to reflect the changes. vite does this by dividing the modules to Dependencies and Source code. vite only provides the source code on demand if the browser requests them. codes inside conditional statements are only compiled if needed.

## License
[MIT](https://choosealicense.com/licenses/mit/)