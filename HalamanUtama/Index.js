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







/*====================================== animasi navigation ====================================*/
// Fungsi untuk menangani pengguliran
function handleScroll() {
  const sections = document.querySelectorAll("section"); // Ganti dengan elemen yang sesuai
  const navigationLinks = document.querySelectorAll(".navigation ul li a");
  const menuToggle = document.querySelector(".menu-toggle");


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



let lastScrollTop = 0; // Variabel untuk menyimpan posisi scroll sebelumnya

window.addEventListener("scroll", function() {
    var navContainer = document.querySelector(".nav-container");
    var menuToggle = document.querySelector(".menu-toggle");
    var currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPosition > lastScrollTop) {
        // Menggulir ke bawah
        navContainer.classList.remove("show");
        menuToggle.classList.add("raised");
    } else {
        // Menggulir ke atas
        navContainer.classList.add("show");
        menuToggle.classList.remove("raised");
    }

    lastScrollTop = currentScrollPosition <= 0 ? 0 : currentScrollPosition; // Perbarui posisi scroll sebelumnya
}, false);





window.addEventListener('scroll', function() {
  var nav = document.querySelector('.nav-container');
  if (window.pageYOffset > 0) {
    nav.classList.add('not-at-top');
  } else {
    nav.classList.remove('not-at-top');
  }
});
















/*====================================== animasi pada halaman pertama ====================================*/
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
    var navigation = document.querySelector(".nav-container");
    navigation.classList.add("show"); // Tambahkan kelas 'show' untuk memunculkan elemen
  }, 100); // Tunggu 1,5 detik sebelum memulai animasi
});











/*====================================== memunculkan side bar pada tampilan mobile ====================================*/
// JavaScript for Toggle Functionality
const menuToggle = document.querySelector(".checkbox");
const sidebar = document.querySelector(".sidebar");
const body = document.querySelector('body'); // Select the body element

menuToggle.addEventListener("change", function() {
    if (this.checked) {
        sidebar.classList.add('sidebar-visible');
        body.classList.add('no-scroll'); // Add class to prevent body scrolling
    } else {
        sidebar.classList.remove('sidebar-visible');
        body.classList.remove('no-scroll'); // Remove class to allow body scrolling
    }
});

        






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
      searchBox.focus(); // Automatically focus on the search box
  }

  // Function to hide the search box
  function hideSearchBox() {
      searchBox.style.transform = 'translateX(-120%)';
      closeSearch.style.transform = 'translateX(-900%)';
      setTimeout(function() {
          searchContainer.classList.remove('active');
      }, 300); // Assumed duration of the animation
  }

  // Hide search box if click outside or on close button
  document.addEventListener('click', function(event) {
      if (!searchContainer.contains(event.target) && !cariButton.contains(event.target)) {
          hideSearchBox();
      }
  });

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
let terang = document.querySelector(".terang");
let logo = document.getElementById("logo");
let kontras = document.querySelector(".sidebar ul li a[href='#contrast']");
let modeText = kontras.querySelector("span");
let navContainer = document.querySelector(".nav-container"); 

let warna = localStorage.getItem("tema") || "normal";
let rotasi = 0;

// Fungsi untuk mengganti sumber gambar logo berdasarkan tema
function updateLogoSource() {
  if (warna === "terbalik") {
    logo.src = "TS LOGO2.png"; // Logo untuk mode terbalik (warna putih)
  } else {
    logo.src = "TS LOGO.png"; // Logo untuk mode normal (warna hitam)
  }
}

function updateTheme() {
    let root = document.documentElement;
    if (warna === "terbalik") {
        root.style.setProperty("--white", "#000000");
        root.style.setProperty("--black1", "#F6F8FA");
        root.style.setProperty("--black2", "#ffffff");
        modeText.textContent = "Mode Gelap";
        navContainer.style.backgroundColor = "#ffffff7a"; 
    } else {
        root.style.setProperty("--white", "#ffffff");
        root.style.setProperty("--black1", "#010409");
        root.style.setProperty("--black2", "#0D1117");
        modeText.textContent = "Mode Terang";
        navContainer.style.backgroundColor = "#0d1117d2"; 
    }
    updateLogoSource();
}

function toggleTema() {
    warna = (warna === "normal") ? "terbalik" : "normal";
    localStorage.setItem("tema", warna);
    updateTheme();
}

// Memperbarui tema saat halaman dimuat
updateTheme();

// Menambahkan event listener untuk tombol terang
terang.addEventListener("click", function() {
  toggleTema();
  rotasi += 180; // Menambahkan 180 derajat ke rotasi
  terang.style.transform = `rotate(${rotasi}deg)`; // Mengatur properti transform
});

// Menambahkan event listener untuk tombol kontras
kontras.addEventListener("click", function(event) {
  event.preventDefault(); 
  toggleTema();
});









// Fungsi untuk mengarahkan ke halaman loading
function redirectToLoadingPage() {
  var currentUrl = window.location.href;
  var loadingUrl = warna === "terbalik" ? "../LoadingPutih/Loading.html" : "../LoadingHitam/Loading.html";
  sessionStorage.setItem("loadingRedirect", "true");
  window.location.href = loadingUrl + "?from=" + encodeURIComponent(currentUrl);
}

// Event listener untuk deteksi refresh
window.addEventListener("beforeunload", function (event) {
  // Setel flag hanya jika bukan dari halaman loading
  if (!new URLSearchParams(window.location.search).has("from")) {
    sessionStorage.setItem("refresh", "true");
  }
});

// Cek pada saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  var isRefreshed = sessionStorage.getItem("refresh") === "true";
  var isFromLoadingPage = new URLSearchParams(window.location.search).has("from");
  var hasRedirectedToLoading = sessionStorage.getItem("loadingRedirect") === "true";

  // Hapus flag refresh setelah dicek
  sessionStorage.removeItem("refresh");

  // Hanya arahkan ke halaman loading jika halaman di-refresh dan belum diarahkan sebelumnya
  if (isRefreshed && !isFromLoadingPage && !hasRedirectedToLoading) {
    redirectToLoadingPage();
  } else if (isFromLoadingPage || hasRedirectedToLoading) {
    // Bersihkan semua flag dan parameter URL
    sessionStorage.removeItem("loadingRedirect");
    var cleanUrl = window.location.href.split("?")[0];
    window.history.replaceState({}, document.title, cleanUrl);
  }
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























/*====================================== Pleacholder ai ====================================*/
document.addEventListener("DOMContentLoaded", function() {
  const phrases = ["Cari kata...", "Masukkan kata...", "Ketik di sini..."];
  const inputBox = document.querySelector('.search-box');
  let currentPhrase = 0;
  let currentLetter = 0;
  let typingDelay = 100;
  let erasingDelay = 50;
  let newTextDelay = 2000; // Delay between phrases

  function type() {
      if (currentLetter < phrases[currentPhrase].length) {
          inputBox.placeholder += phrases[currentPhrase].charAt(currentLetter);
          currentLetter++;
          setTimeout(type, typingDelay);
      } else {
          setTimeout(erase, newTextDelay);
      }
  }

  function erase() {
      if (currentLetter > 0) {
          inputBox.placeholder = phrases[currentPhrase].substring(0, currentLetter-1);
          currentLetter--;
          setTimeout(erase, erasingDelay);
      } else {
          currentPhrase = (currentPhrase + 1) % phrases.length;
          setTimeout(type, typingDelay + 500);
      }
  }

  setTimeout(type, newTextDelay);
});







































/*====================================== Expanded photo ====================================*/
document.addEventListener('DOMContentLoaded', function() {
  var expandButton = document.querySelector('.expand-button');
  var photo = document.querySelector('.photo');
  var overlay = document.querySelector('.overlay');
  var backButton = document.querySelector('.back-button'); // Tombol "Kembali"
  var body = document.body; // Reference to the body element

  expandButton.addEventListener('click', function() {
    photo.classList.toggle('expanded');
    overlay.classList.toggle('active');
    body.classList.toggle('no-scroll'); // Toggle no-scroll class on body
    expandButton.style.display = photo.classList.contains('expanded') ? 'none' : 'flex';
  });

  backButton.addEventListener('click', function() {
    photo.classList.remove('expanded');
    overlay.classList.remove('active');
    body.classList.remove('no-scroll'); // Remove no-scroll class from body
    expandButton.style.display = 'flex';
  });
});




























/*====================================== tabs ====================================*/

document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll('.tab_btn');
  const all_content = document.querySelectorAll('.content');
  const line = document.querySelector('.underline');
  let activeTabIndex = 0; // Menyimpan indeks tab yang aktif

  function updateLine() {
    const activeTab = tabs[activeTabIndex];
    const tabRect = activeTab.getBoundingClientRect();

    if (window.innerWidth > 578) {
      // Tampilan vertikal
      line.style.height = tabRect.height + 'px'; // Tinggi garis sesuai dengan tinggi tab
      line.style.width = '2px'; // Lebar garis tetap
      line.style.top = activeTab.offsetTop + 'px'; // Posisi vertikal
      line.style.left = ''; // Reset posisi horizontal
    } else {
      // Tampilan horizontal
      line.style.width = tabRect.width + 'px'; // Lebar garis sesuai dengan lebar tab
      line.style.height = '2px'; // Tinggi garis tetap
      line.style.left = activeTab.offsetLeft + 'px'; // Posisi horizontal
      line.style.top = ''; // Reset posisi vertikal
    }
  }

  // Tambahkan event click ke semua tab
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // Logika untuk mengaktifkan tab dan menampilkan konten
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      all_content.forEach(c => c.style.display = 'none');
      all_content[index].style.display = 'block';

      activeTabIndex = index; // Perbarui indeks tab yang aktif
      updateLine(); // Pindahkan garis
    });
  });

  // Event listener untuk perubahan ukuran window
  window.addEventListener('resize', updateLine);

  // Inisialisasi
  updateLine();
  tabs[0].classList.add('active'); // Tandai tab pertama sebagai aktif
  all_content.forEach((content, index) => {
    content.style.display = index === 0 ? 'block' : 'none'; // Tampilkan hanya konten "Home"
  });
});







































  
