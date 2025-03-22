document.addEventListener("DOMContentLoaded", function() {
    alert("به سایت من خوش آمدید!");
});
<script>
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
</script>
// فعال‌سازی Lightbox
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var query = document.getElementById('searchQuery').value.toLowerCase();
    var results = document.getElementById('searchResults');
    results.innerHTML = '';

    // مثال: جستجو در عناوین مقالات
    var articles = document.querySelectorAll('.article-list article h3');
    articles.forEach(function(article) {
        if (article.textContent.toLowerCase().includes(query)) {
            var resultItem = document.createElement('div');
            resultItem.textContent = article.textContent;
            results.appendChild(resultItem);
        }
    });
});
