import { auth } from "/firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

onAuthStateChanged(auth, user => {
  if (!user) {
    location.href = "/login";
  }
});


//JANGAN DI APA APAIN YA WIR,INI CUMA FILE GUARD BIAR GAK BISA MASUK KE HALAMAN ADMIN KALO BELUM LOGIN