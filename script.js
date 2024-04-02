// Get references to HTML elements
const text = document.querySelector("#textmsg");
const password = document.querySelector("#password");
const result = document.querySelector("#result");
let clutter = "";
const parinam = "";

function encryption() {
  document.querySelector("#encrypt-btn").addEventListener("click", () => {
    const pass = document.getElementById("password").value;
    const input = document.getElementById("textmsg").value;

    const str = input.split("");
    // biome-ignore lint/complexity/noForEach: <explanation>
    str.forEach((element) => {
      clutter += `&#128${element.charCodeAt()} `;
    });

    document.querySelector("#result").innerHTML = clutter;

    // Save data to local storage
    let dataarr = [];
    if (JSON.parse(localStorage.getItem("data1"))) {
      dataarr = JSON.parse(localStorage.getItem("data1"));
      dataarr.push({ pass: pass, input: input, clutter: clutter });
    } else {
      dataarr = [{ pass: pass, input: input, clutter: clutter }];
    }
    localStorage.setItem("data1", JSON.stringify(dataarr));
  });
}

function decryption() {
  document.querySelector("#decrypt-btn").addEventListener("click", () => {
    let clutter2 = "";
    const input2 = document.querySelector("#emojimsg").value;
    const finalPass = document.querySelector("#finalpassword").value;
    const user = JSON.parse(localStorage.getItem("data1"));
    const str2 = input2.split(" ");
    // biome-ignore lint/complexity/noForEach: <explanation>
    str2.forEach((element) => {
      clutter2 += `&#${element.codePointAt(0)} `;
    });
    let found;
    for (const i of user) {
      if (i.clutter === clutter2 && i.pass === finalPass) {
        found = i;
        break;
      }
    }
    if (found) {
      document.querySelector("#result").style.display = "block";
      document.querySelector("#result").style.color = "#eee";
      document.querySelector("#result").innerHTML = found.input;
    } else {
      document.querySelector("#result").style.display = "block";
      document.querySelector("#result").style.color = "red";
      document.querySelector("#result").innerHTML = "Wrong password!";
    }
  });
}
function btnClicking() {
  document.querySelector("button").addEventListener("click", () => {
    document.querySelector("#result").style.display = "block";
  });
  document.querySelector("#dec-btn").addEventListener("click", () => {
    document.querySelector("#result").style.display = "none";
    document.querySelector("#decryption").style.display = "block";
    document.querySelector("#encryption").style.display = "none";
    document.querySelector("#dec-btn").style.backgroundColor = "#333";
    document.querySelector("#enc-btn").style.backgroundColor = "#222";
    document.querySelector("#main>h1 span img").style.rotate = "270deg";
  });

  document.querySelector("#enc-btn").addEventListener("click", () => {
    document.querySelector("#decryption").style.display = "none";
    document.querySelector("#result").style.display = "none";
    document.querySelector("#encryption").style.display = "block";
    document.querySelector("#dec-btn").style.backgroundColor = "#222";
    document.querySelector("#enc-btn").style.backgroundColor = "#333";
    document.querySelector("#main>h1 span img").style.rotate = "90deg";
  });
}
encryption();
decryption();
btnClicking();
