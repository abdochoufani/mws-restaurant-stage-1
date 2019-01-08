if (navigator.serviceWorker) {
	navigator.serviceWorker.register('./sw.js')
	.then(function(reg) {
		console.log('SW Registration worked!',reg);
	})
	.catch(function(e) {
		console.log('Registration failed!',e);
	});
}