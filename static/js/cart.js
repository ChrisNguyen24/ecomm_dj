var updateBtns = document.getElementsByClassName('update-cart')

for(var i=0 ;i<updateBtns.length;i++){
	updateBtns[i].addEventListener('click',function(){
		var productId = this.dataset.product
		var action = this.dataset.action

		console.log(productId,action);
		if (user == 'AnonymousUser'){
			console.log('User is not authenticated')
			alert("User is not authenticated")
		}else{
			console.log(user)
			console.log("productId: ",productId,"action",action)
			updateUserOrder(productId, action)
		}
	})
} 

var viewBtns = document.getElementsByClassName('view-product')

for(var i=0 ;i<viewBtns.length;i++){
	viewBtns[i].addEventListener('click',function(){
		var productId = this.dataset.product
		var action = this.dataset.action

		console.log(user)
		console.log("productId: ",productId,"action",action)
		viewProduct(productId, action)
	})
} 

function updateUserOrder(productId, action){
	console.log('User is authenticated, sending data...')
	var url = '/update_item/'
	fetch(url, {
		method:'POST',
		headers:{
			'Content-Type':'application/json',
			'X-CSRFToken':csrftoken,
		}, 
		body:JSON.stringify({'productId':productId, 'action':action})
	})
	.then((response) => {
		console.log("test response ok")
	    return response.json();
	})
	.then((data) => {
		console.log(data)
	    location.reload()
	});
}

function viewProduct(productId, action){
	console.log('User is authenticated, sending data...')
	var url = '/view_product/'
	fetch(url, {
		method:'POST',
		headers:{
			'Content-Type':'application/json',
			'X-CSRFToken':csrftoken,
		}, 
		body:JSON.stringify({'productId':productId, 'action':action})
	})
	.then((response) => {
		console.log("test response ok")
	    // return response.json();
	})
	.then((data) => {
		console.log(data)
		window.location.href = "/detail"
	});
}
