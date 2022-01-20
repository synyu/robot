function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
var links = ['https://forms.gle/oe4pyo7BQRSeuSYp8','https://forms.gle/Y7Mn4a9fQvzSeLU19']; //同じようにして遷移先のURLを配列へ格納する
window.location.href = links[getRandomInt(links.length)]; 
