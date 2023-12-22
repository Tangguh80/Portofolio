/*====================================== animasi buntut ====================================*/

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






/*====================================== animasi pada halaman pertama ====================================*/

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










/*====================================== memunculkan side bar pada tampilan mobile ====================================*/

// Pilih elemen-elemen yang dibutuhkan
const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const navigation = document.querySelector(".navigation");

// Fungsi untuk toggle sidebar
function toggleSidebar() {
  if (sidebar.classList.contains('sidebar-visible')) {
    sidebar.classList.remove('sidebar-visible');
    menuToggle.innerHTML = '<ion-icon name="menu-outline"></ion-icon>';
  } else {
    sidebar.classList.add('sidebar-visible');
    menuToggle.innerHTML = '<ion-icon name="close-circle-outline"></ion-icon>';
  }
}

// Atur event listener untuk menu toggle
menuToggle.addEventListener("click", toggleSidebar);

// Fungsi untuk mengecek dan menyesuaikan tampilan berdasarkan lebar layar
function checkWidth() {
  if (window.innerWidth <= 892) {
    if (!sidebar.classList.contains('sidebar-visible')) {
      navigation.style.display = "none";
    }
  } else {
    navigation.style.display = "block";
    sidebar.classList.remove('sidebar-visible'); // Sembunyikan sidebar
    menuToggle.innerHTML = '<ion-icon name="menu-outline"></ion-icon>';
  }
}

// Panggil fungsi checkWidth saat halaman dimuat
checkWidth();

// Pantau perubahan lebar layar dan sesuaikan tampilan
window.addEventListener("resize", checkWidth);









/*====================================== script untuk mencari kata ====================================*/


document.addEventListener('DOMContentLoaded', () => {
  const searchBox = document.querySelector('.search-box');
  
  searchBox.addEventListener('input', function() {
      removeHighlights();

      const searchText = this.value.trim();
      if (searchText) {
          highlightText(document.body, searchText);
      }
  });

  function removeHighlights() {
      document.querySelectorAll('.highlight').forEach(el => {
          const parent = el.parentNode;
          parent.replaceChild(document.createTextNode(el.textContent), el);
          parent.normalize();
      });
  }

  function highlightText(node, searchText) {
      const regex = new RegExp(searchText, 'gi');

      Array.from(node.childNodes).forEach(child => {
          if (child.nodeType === 3) { // Node.TEXT_NODE
              const matches = child.nodeValue.match(regex);
              if (matches) {
                  const frag = document.createDocumentFragment();
                  let lastIdx = 0;
                  child.nodeValue.replace(regex, (match, offset) => {
                      const part = document.createTextNode(child.nodeValue.slice(lastIdx, offset));
                      const highlighted = document.createElement('span');
                      highlighted.className = 'highlight';
                      highlighted.textContent = match;

                      frag.appendChild(part);
                      frag.appendChild(highlighted);
                      lastIdx = offset + match.length;
                  });
                  frag.appendChild(document.createTextNode(child.nodeValue.slice(lastIdx)));
                  node.replaceChild(frag, child);

                  const firstHighlight = document.querySelector('.highlight');
                  if (firstHighlight) {
                      firstHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
              }
          } else if (child.nodeType === 1) { // Node.ELEMENT_NODE
              highlightText(child, searchText);
          }
      });
  }
});

















/*====================================== memeunculkan search box =========================================*/

document.addEventListener('DOMContentLoaded', (event) => {
    const searchBox = document.querySelector('.search-box');
    const closeSearch = document.querySelector('.close-search');
    const cariButton = document.querySelector('.cari');
    const searchContainer = document.querySelector('.search-container');
    const navigationLink = document.querySelector('.navigation a'); // Assuming this is the correct selector

    // Toggle search box on clicking 'cari' button
    cariButton.addEventListener('click', function() {
        if (searchContainer.classList.contains('active')) {
            hideSearchBox();
        } else {
            showSearchBox();
        }
    });

    // Function to show the search box
    function showSearchBox() {
        searchContainer.classList.add('active');
        searchBox.style.transform = 'translateX(0%)';
        closeSearch.style.transform = 'translateX(0%)';
        navigationLink.style.zIndex = '1'; // Move .navigation a to the back
    }

    // Function to hide the search box
    function hideSearchBox() {
        searchBox.style.transform = 'translateX(-120%)';
        closeSearch.style.transform = 'translateX(-900%)';
        setTimeout(function() {
            searchContainer.classList.remove('active');
        }, 300); // Assumed duration of the animation
    }

    closeSearch.addEventListener('click', hideSearchBox);

    // Hide search box and adjust navigation link based on viewport size
    function adjustLayoutBasedOnViewport() {
        const viewportWidth = window.innerWidth;
        if (viewportWidth <= 1121) {
            hideSearchBox();
            navigationLink.style.zIndex = '1'; // Move .navigation a to the front
        }
    }

    window.addEventListener('resize', adjustLayoutBasedOnViewport);

    // Initial adjustment on page load
    adjustLayoutBasedOnViewport();
});




/*====================================== menyembunyikan search box jika navigation overload ====================================*/

document.addEventListener('DOMContentLoaded', function() {
  var cariButton = document.querySelector('.cari');
  var closeSearch = document.querySelector('.close-search');
  var searchContainer = document.querySelector('.search-container');
  var navigation = document.querySelector('.navigation');

  // Function to show the search box
  function showSearchBox() {
    searchContainer.style.zIndex = "2";
    navigation.style.zIndex = "1";
  }

  // Function to hide the search box
  function hideSearchBox() {
    searchContainer.style.zIndex = "1";
    navigation.style.zIndex = "2";
  }

  // Add click event listener to .cari button
  cariButton.addEventListener('click', showSearchBox);

  // Add click event listener to .close-search button
  closeSearch.addEventListener('click', hideSearchBox);
});































/*====================================== TOMBOL TERANG DAN GELAP ====================================*/
// Mendapatkan elemen tombol terang dan elemen-elemen lainnya
let terang = document.querySelector(".terang");
let logo = document.getElementById("logo");
let kontras = document.querySelector(".sidebar ul li a[href='#contrast']");
let modeText = kontras.querySelector("span");

// Mendefinisikan variabel
let warna = localStorage.getItem("tema") || "normal"; // Memuat status tema dari localStorage atau 'normal'
let rotasi = 0;
let logoStatus = "logo1";

// Fungsi untuk memperbarui tema sesuai dengan status tema
function updateTheme() {
  let root = document.documentElement;
  if (warna == "terbalik") {
    root.style.setProperty("--white", "#000000");
    root.style.setProperty("--black1", "#ffffff");
    root.style.setProperty("--black2", "#f5f5f5");
    modeText.textContent = "Mode Malam";
  } else {
    root.style.setProperty("--white", "#ffffff");
    root.style.setProperty("--black1", "#000000");
    root.style.setProperty("--black2", "#0f0f0f");
    modeText.textContent = "Mode Siang";
  }
}

// Fungsi untuk mengganti tema dan teks
function toggleTema() {
  warna = (warna == "normal") ? "terbalik" : "normal";
  localStorage.setItem("tema", warna); // Menyimpan status tema ke localStorage
  updateTheme(); // Memperbarui tema sesuai dengan status
}

// Memperbarui tema saat halaman dimuat
updateTheme();

// Menambahkan event listener untuk tombol terang
terang.addEventListener("click", function() {
  toggleTema();
  rotasi += 180; // Menambahkan 180 derajat ke rotasi
  terang.style.transform = `rotate(${rotasi}deg)`; // Mengatur properti transform
  // Mengganti logo
  if (logoStatus == "logo1") {
    logo.src = "TS LOGO2.png";
    logoStatus = "logo2";
  } else {
    logo.src = "TS LOGO.png";
    logoStatus = "logo1";
  }
});

// Menambahkan event listener untuk tombol kontras
kontras.addEventListener("click", function(event) {
  event.preventDefault(); 
  toggleTema();
});






























/*====================================== NOTIF AKTIF SIDEBAR ====================================*/
function moveNotification(topValue) {
  const notification = document.getElementById("notification");

  // Hapus kelas animasi sebelum mengatur ulang animasi
  notification.classList.remove("zoomIn", "zoomOut");

  // Tambahkan kelas animasi zoomOut untuk menghilangkan notifikasi saat tombol ditekan
  notification.classList.add("zoomOut");

  // Setelah animasi zoomOut selesai, pindahkan notifikasi ke posisi yang sesuai
  setTimeout(() => {
    notification.style.top = topValue + "px";

    // Hapus kelas animasi zoomOut dan tambahkan kelas animasi zoomIn
    notification.classList.remove("zoomOut");
    notification.classList.add("zoomIn");
  }, 100); // Ubah sesuai dengan durasi animasi Anda (dalam milidetik)
}























