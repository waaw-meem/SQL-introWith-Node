<h1>SQL Introduction</h1>

<h4>Setting up MySQL</h4>
<p>Steps to download MySQL
<ul>
<li>Go to website https://www.mysql.com/</li>
<li>Select Community Server because it is free for users</li>
<li>After successful installation open downloaded file</li>
<li>Select a setup type 'Custom' </li>
<li>Now Install MySQL server and MySQL workbench</li>
<li>Then it will be easy to install the setup in your local PC</li>
<li>If you occur any problem during running a MySQL server then go to Services => MySQL and hit them to start</li>
</ul>

<h3>Connecting our App to the SQL Database</h3>

<p>It is easy to connect your app with your database you can follow steps</p>
<ol>
<li>Install mysql package with this command 
<code>npm install --save mysql2</code>
After writing above command import it in database.js file
</li>
<li>Create file database.js in util folder</li>
<li>Now that file help your db and app to connect with each other.</li>
<li>Use Pool Connection method instead of single Connection the reason behind this is actually to handle all types of queries and functions from one method which will provide best performance to your app. Secondly Single Connection will irritate you to write every time new connection for different functionality like for delete,edit,add to cart, etc.</li>
<li>After all this add information about your database like host,password,dbName,userName</li>
<li>Now last thing in database.js file was actually export pool with Promise eg. pool.Promise()</li>
<li>Import it in app.js file then execute method will help to run a query
<code>
db.execute('Query Instruction')
</code>

</li>

</ol>

<h3>Basic SQL & Creating a Table</h3>
We use promise in every sql method due to do some more structure code
<code>
db.execute('SELECT * FROM products')
.then((result) => {
    console.log(result)
})
.catch(err => {
   
</code>

<h3>Fetching Products</h3>
<p>Actually Whenever we talk about database managing code we use models for that so all code will be written inside models with differ methods as we write file store</p>



</p>
