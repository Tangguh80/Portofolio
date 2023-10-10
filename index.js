let trails = [];

for (let i = 0; i < 10; i++) {
  let trail = document.createElement("div");
  trail.className = "trail";
  document.body.appendChild(trail);
  trails.push(trail);
}

let currentTrailIndex = 0;

document.addEventListener("mousemove", (event) => {
  let trail = trails[currentTrailIndex];
  trail.style.left = `${event.pageX}px`;
  trail.style.top = `${event.pageY}px`;
  trail.style.opacity = 1;
  
  // Move to the next trail div
  currentTrailIndex++;
  if (currentTrailIndex >= trails.length) {
    currentTrailIndex = 0;
  }

  // Reset the trail div after 1 second
  setTimeout(() => {
    trail.style.opacity = 0;
  }, 100);
});








// Fungsi untuk menangani pengguliran
function handleScroll() {
  const sections = document.querySelectorAll("section"); // Ganti dengan elemen yang sesuai
  const navigationLinks = document.querySelectorAll(".navigation ul li a");

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
      navigationLinks[index].classList.add("active");
    } else {
      navigationLinks[index].classList.remove("active");
    }
  });
}

// Tambahkan event listener untuk peristiwa pengguliran
window.addEventListener("scroll", handleScroll);










// Wait for the page to load
window.addEventListener('load', function () {
  // Add the "show" class to elements after a delay (you can adjust the delay)
  setTimeout(function () {
    document.querySelector('.social-icons').classList.add('show');
    document.querySelector('.email-container').classList.add('show');
  }, 500); // Adjust the delay as needed
});



document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    var navigation = document.querySelector(".navigation ul");
    navigation.style.opacity = "1"; // Atur opacity menjadi 1 untuk munculkan elemen
    navigation.style.transform = "translateY(0)"; // Kembalikan posisi ke normal
  }, 1500); // Tunggu 2 detik sebelum memulai animasi
});












// Select elemen-elemen yang dibutuhkan
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const sidebar = document.querySelector(".sidebar");

// Fungsi untuk menampilkan sidebar
function showSidebar() {
  sidebar.style.display = "block";
  // Ganti ikon menu menjadi ikon close
  menuToggle.innerHTML = '<ion-icon name="close-circle-outline"></ion-icon>';
}

// Fungsi untuk menyembunyikan sidebar
function hideSidebar() {
  sidebar.style.display = "none";
  // Ganti ikon close menjadi ikon menu
  menuToggle.innerHTML = '<ion-icon name="menu-outline"></ion-icon>';
}

// Atur perilaku saat ikon menu ditekan
menuToggle.addEventListener("click", function() {
  if (sidebar.style.display === "block") {
    hideSidebar();
  } else {
    showSidebar();
  }
});

// Sembunyikan navigasi di bawah 768px dan sembunyikan sidebar di atas 768px
function checkWidth() {
  if (window.innerWidth <= 769) {
    navigation.style.display = "none";
  } else {
    navigation.style.display = "block";
    hideSidebar();  // Menambahkan ini untuk menyembunyikan sidebar
  }
}

// Panggil fungsi checkWidth saat halaman dimuat
checkWidth();

// Pantau perubahan lebar layar
window.addEventListener("resize", checkWidth);


















