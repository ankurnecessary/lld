# lld
Learning LLD

# Run locally

Use the command below to run the project.
~~~bash  
  npm run build src/client.ts && node src/client.js 
~~~

or

~~~bash  
  npx tsc path/to/typescript/file.ts && node path/to/javascript/file on typescript file path.js
~~~

If you want to run [only one] file then use the command below
~~~bash
  npm run build path/to/typescript/file.ts && node path/to/javascript/file on typescript file path.js
~~~

To view all the js files in a project, except .ts files and .js files in node_modules folder
~~~bash
  find . -name "*.js" -type f -not -path '*/node_modules/*'
~~~

To delete all the js files in a project, except .ts files and .js files in node_modules folder
~~~bash
  find . -name "*.js" -type f -not -path '*/node_modules/*' -delete
~~~

# Things to do
1. Delete .js.map files via command in package.json