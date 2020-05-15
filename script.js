/**Iterate over the array below using foreach, map, or reduce and create a bootstrap card for each object
 * and display the cards on the DOM
*	```javascript
*[
*  {
    "userId": 1,***/
const user = ['john', 'romero', 'Anthony']

function setUserId (userArray) {
		let userId = ''

		userArray.forEach(function(currentValue) {
				console.log(userId)
			userId = `
			${userId}
			<h2>${currentValue}</h2>
			`
		})
	return userId
}

function writeIdToDom (Id) {

	const target = document.getElementById('card-content');
	target.innerHTML = ``
	<h1>UserIds</h1>
	${Id}

`
}

let userId = setUserId(user)
writeIdToDom(userId)