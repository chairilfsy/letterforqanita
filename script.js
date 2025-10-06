const message = `hi nita sayangku cantikku cintaku duniakuu\n\nyuk semangat lagi buat hari ini. yuk segera bangkit buat dirimu sendiri. sebentar lagi jam 2 kamu mau interview, jadi harus semangaat ya? demi kamu sayang\n\nkamu hebat sayang, aku yakin kamu bisa melakukan ini. gapapa kalo hari ini gak maksimal. setidaknya kamu telah mencoba yang terbaik yang bisa kamu lakukan di situasi yang kuran optimal ini. gapapa gausah dipaksakan yaa sayang?\n\nkamu hebat nita, kamu keren, aku banggaaaa banget sama kamu.\n\napapun yang terjadi, mau dalam kondisi dan fase seperti apapun dirimu, aku akan selalu ada disini nemenin kamu sayang. i love you`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  const music = document.getElementById("bgMusic");
  music.play();
  
  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
