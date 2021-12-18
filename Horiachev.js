XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
class WebAPI
{
    Upload()
    {
        let data = test;

        let xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener(readystatechange, function() {
            if(this.readyState === 4) {
              console.log(this.responseText);
            }
          });
          
          xhr.open(POST, httpscontent.dropboxapi.com2filesupload);
          xhr.setRequestHeader(Dropbox-API-Arg, {path Newfile.txt,mode add,autorename true,mute false,strict_conflict false});
          xhr.setRequestHeader(Content-Type, applicationoctet-stream);
          xhr.setRequestHeader(Authorization, Bearer CbMeMDVD_PMAAAAAAAAAAe_BSInk1g5tqtmPRwuHOo7o1emWCyjdoT8L9O7U0eoz);
          
          xhr.send(data);
        }

    GetFileMetadata()
    {
        let data = JSON.stringify({
            path Newfile.txt
        });

        let xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener(readystatechange, function() {
            if(this.readyState === 4) {
              console.log(this.responseText);
            }
          });
          
          xhr.open(POST, httpsapi.dropboxapi.com2filesget_metadata);
          xhr.setRequestHeader(Content-Type, applicationjson);
          xhr.setRequestHeader(Authorization, Bearer CbMeMDVD_PMAAAAAAAAAAe_BSInk1g5tqtmPRwuHOo7o1emWCyjdoT8L9O7U0eoz);
          
          xhr.send(data);
        }        


    DeleteFile()
    {
        let data = JSON.stringify({
                path Newfile.txt
        });

        let xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener(readystatechange, function() {
            if(this.readyState === 4) {
              console.log(this.responseText);
            }
          });
          
          xhr.open(POST, httpsapi.dropboxapi.com2filesdelete_v2);
          xhr.setRequestHeader(Content-Type, applicationjson);
          xhr.setRequestHeader(Authorization, Bearer CbMeMDVD_PMAAAAAAAAAAe_BSInk1g5tqtmPRwuHOo7o1emWCyjdoT8L9O7U0eoz);
          
          xhr.send(data); 
        }        

}
test = new WebAPI();


setTimeout(test.Upload,1000);
setTimeout(function(){console.log('n')},2000);

setTimeout(test.GetFileMetadata,3000);
setTimeout(function(){console.log('n')},4000);

setTimeout(test.DeleteFile,5000);
setTimeout(function(){console.log('n')},6000);