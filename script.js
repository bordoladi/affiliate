const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
	
	
	
function changeImage1(imageSrc) {
            document.getElementById('displayImage1').src = imageSrc;
		}
		function changeImage2(imageSrc) {
            document.getElementById('displayImage2').src = imageSrc;
		}
		function changeImage3(imageSrc) {
            document.getElementById('displayImage3').src = imageSrc;
		}
		function changeImage4(imageSrc) {
            document.getElementById('displayImage4').src = imageSrc;
		}
		function changeImage5(imageSrc) {
            document.getElementById('displayImage5').src = imageSrc;
		}
		function changeImage6(imageSrc) {
            document.getElementById('displayImage6').src = imageSrc;
		}
		function changeImage11(imageSrc) {
            document.getElementById('displayImage11').src = imageSrc;
		}
		function changeImage12(imageSrc) {
            document.getElementById('displayImage12').src = imageSrc;
		}
		function changeImage13(imageSrc) {
            document.getElementById('displayImage13').src = imageSrc;
		}

		function filterProducts(category) {
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        function searchProducts() {
			const searchInput = document.getElementById('search-input').value.toLowerCase();
			const cards = document.querySelectorAll('.card');
			cards.forEach(card => {
				const productName = card.querySelector('p').textContent.toLowerCase();
				const productDetails = card.querySelector('a').textContent.toLowerCase();
				if (productName.includes(searchInput) || productDetails.includes(searchInput)) {
					card.style.display = 'block';
				} else {
					card.style.display = 'none';
				}
			});
}