"use strict"
 function getData(){
fetch('https://jsonplaceholder.typicode.com/posts')
.then(data => data.json())
.then(newData => newData.data.filter ( index => index.id === 1 ) )
//.then(newData=> console.log(newData))
 }


getData();