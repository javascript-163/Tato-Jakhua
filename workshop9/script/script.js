//შექმენით ერთგვარი ტექსტური ფაილის ანალიზატორი.
// 1. მომხმარებელს მოთხოვეთ აირჩიოს სასურველი ტექსტური ფაილი, read file-ზე დაჭერისას კი წაიკითხეთ ამ ფაილის კონტენტი.
// 2. დაადგინეთ ფაილში არსებული საერთო სიმბოლოოების რაოდენობა
// Total symbols: 150,
// 3. დაადგინეთ ფაილში არსებული საერთო სიტყვების ოდენობა
// Total Words: 78
// 4. დაადგინეთ ფაილში არსებული ყველაზე გრძელი და ყველაზე მოკლე სიტყვა
// Longest Word: beautiful
// Shortest Word: sad
// 5. დაადგინეთ ფაილში არსებული სიტყვების საშუალო არითმეტიკული ზომა (საშუალო ზომა გამოითვლება თითოეული სიტყვის ზომა გაყოფილი მათ საერთო რაოდენობაზე)
function loadFile() {
  // return new Promise((resolve, reject) => {
  const fileInput = document.querySelector('input[name="text"]');
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function (e) {
      document.querySelector("textarea").value = e.target.result;

      document.getElementsByClassName(
        "Total-Symbols"
      )[0].textContent = `Total symbols: ${e.target.result.length}`;

      document.getElementsByClassName(
        "Total-Words"
      )[0].textContent = `Total Words: ${countWords(e.target.result)}`;

      document.getElementsByClassName("L-word")[0].textContent =
        "Longest Word: " + findLongestWord(e.target.result);

      document.getElementsByClassName("S-word")[0].textContent =
        "Shortest Word: " + findSmallestWord(e.target.result);

      const div = (document.getElementsByClassName("content")[0].style.display =
        "block");
    };
  }
  // });
}

function findLongestWord(str) {
  let words = str.split(/\s+/);

  let longestWord = "";
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i].replace(/[^A-Za-z0-9]/g, "");

    if (word.length > maxLength) {
      longestWord = word;
      maxLength = word.length;
    }
  }

  return longestWord;
}

function findSmallestWord(str) {
  let words = str.split(/\s+/);

  let smallestWord = "";
  let minLength = Infinity;

  for (let i = 0; i < words.length; i++) {
    let word = words[i].replace(/[^A-Za-z0-9]/g, "");

    if (word.length < minLength) {
      smallestWord = word;
      minLength = word.length;
    }
  }

  return smallestWord;
}

function countWords(str) {
  const words = str.split(/\s+/);

  return words.length;
}

//შექმენით საიტი სადაც მომხმარებელს შეეძლება აირჩიოს მისთვის სასურველი სურათი, შემდეგში კი გამოიტანეთ ეს სურათი ეკრანზე.
function loadImage() {
  const inputImg = document.querySelector('input[name="img"]');
  const file = inputImg.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("img").src = e.target.result;
      document.getElementById("img").style.display = "block";
    };
    reader.readAsDataURL(file);
  }
}

//შექმენით საიტი, სადაც მომხმარებელს შეეძლება ატვირთოს როგორც ტექსტური, ისე ფოტო, ისე ვიდეო ფაილები.
// მინიშნება: ფოტოს გამოსატანად ჩვენს განხილულ მაგალითში გამოვიყენეთ <img> ტეგი, ვიდეოსთვის მოგიწევთ გამოიყენოთ <video> ტეგი.
function handleTargetInitialFunc() {
  const inputFile = document.querySelector('input[name="file"]');
  const file = inputFile.files[0];
  if (file) {
    if (file.type.includes("image")) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        const ImgTag = document.createElement("img");
        ImgTag.src = e.target.result;
        document.body.appendChild(ImgTag);
      };
    } else if (file.type.includes("text")) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function (e) {
        const textAreaTeg = document.createElement("textarea");
        textAreaTeg.value = e.target.result;
        document.body.appendChild(textAreaTeg);
      };
    } else if (file.type.includes("video")) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        const videoTag = document.createElement("video");
        videoTag.src = e.target.result;
        document.body.appendChild(videoTag);
        videoTag.play();
      };
    }
  }
}
