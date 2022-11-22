"use strict"


const getData = fetch('https://jsonplaceholder.typicode.com/posts')

.then(data => data.json())
.then(getData => console.log(getData))
.then(response => {
  let filteredData = response.getData.filter(item => item.userId === 1 );    
  console.log (filteredData)                       
  })