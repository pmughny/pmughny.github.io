$(document).ready(function () {
  // Mendapatkan nama halaman saat ini
  var current_page = location.pathname.split('/').pop();

  // Menambahkan kelas "active" pada elemen navbar yang sesuai
  $('.nav-link[href="' + current_page + '"]').addClass('active');
});

// untuk membuat navbar hide
$(document).ready(function () {
  var lastScrollTop = 0;
  $(window).scroll(function () {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      // scroll down
      $('.navbar').fadeOut();
    } else {
      // scroll up
      $('.navbar').fadeIn();
    }
    lastScrollTop = st;
  });
});
// akhir dari navbar hide

// untuk membuat gambar terbuka pada halaman selanjutnya
var imgClickable = document.querySelectorAll('.img-clickable, .img-click');

imgClickable.forEach(function (img) {
  img.addEventListener('click', function () {
    if (this.classList.contains('img-full')) {
      this.classList.remove('img-full');
    } else {
      this.classList.add('img-full');
    }
  });
});

function openImage(img) {
  window.open(img.src, '_blank');
}
// akhir dari membuat gambar terbuka pada halaman selanjutnya

// Awal Readmore
function myFunction() {
  var dots = document.getElementById('dots');
  var moreText = document.getElementById('more');
  var btnText = document.getElementById('myBtn');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read more';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read less';
    moreText.style.display = 'inline';
  }
}

// Akhir Readmore
