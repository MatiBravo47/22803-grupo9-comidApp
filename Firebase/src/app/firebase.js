import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  const firebaseConfig = {
    apiKey: "AIzaSyBMgaTPCssqwdHB10cqBs0cJ6O71LT2AA8",
    authDomain: "loginfirebasecac.firebaseapp.com",
    projectId: "loginfirebasecac",
    storageBucket: "loginfirebasecac.appspot.com",
    messagingSenderId: "318896883713",
    appId: "1:318896883713:web:c26477092788b04a539800"
  };

};

const app = initializeApp(firebaseConfig);
</script>
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)