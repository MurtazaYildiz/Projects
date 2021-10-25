const container = document.getElementById('container');
const girisBtn = document.getElementById('giris');
const kayitBtn = document.getElementById('kayit');


kayitBtn.addEventListener('click', () => {
	container.classList.add("rightPanelActive");
});

girisBtn.addEventListener('click', () => {
	container.classList.remove("rightPanelActive");
});


