document.addEventListener("DOMContentLoaded", () => {
  let showMenu = false;
  const btnMenu = document.querySelector(".menu-icon");
  const navList = document.querySelector(".navlist");
  btnMenu.addEventListener("click", () => {
    if (!showMenu) {
      showMenu = true;
      navList.classList.add("slide");
    } else {
      showMenu = false;
      navList.classList.remove("slide");
    }
  });
});

function runPythonScript() {
  // Get the path to the Python script.
  var pythonScriptPath = "path/to/python/script.py";
  // Run the Python script.
  subprocess.run(["python", pythonScriptPath]);
}

function getImagePreview(event) {
  var image = URL.createObjectURL(event.target.files[0]);
  var imagediv = document.getElementById("preview");
  var newimg = document.createElement("img");
  imagediv.innerHTML = "";
  newimg.src = image;
  newimg.width = "400";
  imagediv.appendChild(newimg);
}

// function openWebCam() {
//   // Buat objek permintaan HTTP
//   var xhr = new XMLHttpRequest();
//   // Atur jenis permintaan dan URL
//   xhr.open("POST", "/run_detect", true);
//   // Atur fungsi penanganan respons dari server
//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       var response = JSON.parse(xhr.responseText);
//       // Lakukan sesuatu dengan respons dari server jika diperlukan
//       console.log(response);
//     } else {
//       console.log("Terjadi kesalahan saat menjalankan deteksi wajah.");
//     }
//   };
//   // Kirim permintaan POST
//   xhr.send();
// }

// document.getElementById("openCamBtn").addEventListener("click", function () {
//   // Use JavaScript to make an HTTP request to execute the Python script
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "detect.py", true);
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       // Handle the response if needed
//       var response = xhr.responseText;
//       console.log(response);
//     }
//   };
//   xhr.send();
// });

document.addEventListener("DOMContentLoaded", () => {
  const videoElement = document.getElementById("video");
  const startButton = document.getElementById("start-button");

  startButton.addEventListener("click", () => {
    startVideo();
  });

  async function startVideo() {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoElement.srcObject = stream;
  }
});
