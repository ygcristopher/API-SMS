function toogleSms() {
  const napikey = document.getElementById("napikey").value;
  const number = document.getElementById("number").value;
  const sms = document.getElementById("menssage").value;
  const flashSms = document.getElementById("flashSms").checked;

// WARNING: For POST requests, body is set to null by browsers.
  var data = JSON.stringify({
    numberPhone: number,
    message: sms,
    flashSms: flashSms,
  });

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open(
    "POST",
    `https://api.nvoip.com.br/v2/sms?napikey=${napikey}`,
  );
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "access_token");

  xhr.send(data);
}
