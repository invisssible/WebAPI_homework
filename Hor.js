XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

class WebAPI
{
    Upload()
    {
        let data = "WebAPIs bascis - Homework";

        let xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function() {
          if(this.readyState === 4) {
            console.log(this.responseText);
          }
        });

        xhr.open("POST", "https://content.dropboxapi.com/2/files/upload");
        xhr.setRequestHeader("Dropbox-API-Arg", '{"path": "/NewTestFile.txt","mode": "add","autorename": true,"mute": false,"strict_conflict": false}');
        xhr.setRequestHeader("Content-Type", "application/octet-stream");
        xhr.setRequestHeader("Authorization", "Bearer sl.A-Y3LlVG0llrF9kH5VhWpFJWVEXpY66F0My8mpqTxQrqNxtMGaEe5kPooSiWDkmvTdtc29Xx16vN686nphJTkbZW9edrKUBmqxmzzzYjkJJk0iU4kLKurFKrdiSYIfcnOcxmm4dQ");

        xhr.send(data); 
    }

    GetMetadata()
    {
        let data = JSON.stringify({
            "path": "/NewTestFile.txt"
        });

        let xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function() {
          if(this.readyState === 4) {
            console.log(this.responseText);
          }
        });

        xhr.open("POST", "https://api.dropboxapi.com/2/files/get_metadata");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", "Bearer sl.A-Y3LlVG0llrF9kH5VhWpFJWVEXpY66F0My8mpqTxQrqNxtMGaEe5kPooSiWDkmvTdtc29Xx16vN686nphJTkbZW9edrKUBmqxmzzzYjkJJk0iU4kLKurFKrdiSYIfcnOcxmm4dQ");

        xhr.send(data); 
    }


    Delete()
    {
      let data = JSON.stringify({
          "path": "/NewTestFile.txt"
      });

        let xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function() {
          if(this.readyState === 4) {
            console.log(this.responseText);
          }
        });

        xhr.open("POST", "https://api.dropboxapi.com/2/files/delete_v2");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", "Bearer sl.A-Y3LlVG0llrF9kH5VhWpFJWVEXpY66F0My8mpqTxQrqNxtMGaEe5kPooSiWDkmvTdtc29Xx16vN686nphJTkbZW9edrKUBmqxmzzzYjkJJk0iU4kLKurFKrdiSYIfcnOcxmm4dQ");

        xhr.send(data);
   }

}

NewTest = new WebAPI();

setTimeout(NewTest.Upload,1000);
setTimeout(NewTest.GetMetadata,5000);
setTimeout(NewTest.Delete,9000);
