//1 სხვადასხვა ღილაკი, 1. ფოტოს ზომის გადიდების; 2. ფოტოს ზომის შემცირების;
// DOM-ის მეშვეობით გააკეთეთ ისე, რომ ფოტოს ზომის გაზრდისა და ზომის შემცირების ღილაკებზე დაჭერით არსებული სურათის ზომა (width) შეიცვალოს.
// რაღაც ესეთი

let count = 240;

function imgResolutionHandler(increment) {
  const img = document.querySelector("img");

  increment ? (count += 10) : (count -= 10);

  count = Math.max(0, count);

  img.style.width = count + "px";
}

//2 შექმენით ვებგვერდი რომელზეც იქნება მოცემული ტექსტის ფერის შემცვლელი ღილაკი. მოცემულობა ესეთია:
//  მომხმარებელი აჭერს ღილაკზე, ღილაკი ცვლის ფერს.
//  ეკრანზე მოცემული ტექსტი იცვლება იმ ფერის სახელით რა ფერის ტექსტიცაა ეკრანზე გამოტანილი. ნახეთ მაგალითი ფოტოზე.

function changeColorText(color) {
  const pTag = document.getElementById("simple-text");
  pTag.style.color = `#${color}`;
}

//3. შექმენით ვებგვერდი რომელზეც იქნება მოცემული კონტენტის ჩვენებისა და დამალვის ღილაკი. მოცემულ ღილაკზე დაჭერისას უნდა მოხდეს კონტენტის გამოტანა
// ეკრანზე თუ კონტენტი დამალულია. ხოლო თუ კონტენტი ჩანს ეკრანზე ამ შემთხვევაში მისი დამალვა.

function showContent() {
  document.getElementById("simple-text").style.visibility = "visible";
  document.getElementById("text-btn-container").style.visibility = "visible";
}

function hideContent() {
  document.getElementById("simple-text").style.visibility = "hidden";
  document.getElementById("text-btn-container").style.visibility = "hidden";
}
