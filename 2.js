function checkTitle(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (word[0] !== word[0].toUpperCase()) {
        return false;
      }
    }
    return true;
  }
  console.log(checkTitle("A Mind Boggling Achievement"));
  console.log(checkTitle("A Simple Java Script Program!")); 
  console.log(checkTitle("Water is transparent"));
  