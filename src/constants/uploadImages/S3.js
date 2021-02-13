import AWS from 'aws-sdk';

const spacesEndpoint = new AWS.Endpoint('ams3.digitaloceanspaces.com');
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: 'Y2EEXX2TYXXRIXS5GXVC',
  secretAccessKey: 'gIdxDqdDRTs863QiMfk40CMWZRtc2xpQjF9dYD/osxM',
});

export default s3;

/* 
const bucketName = 'trends';

const digitalOceanSpaces = `https://${bucketName}.${endPoint}/`;

const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: 'Y2EEXX2TYXXRIXS5GXVC',
  secretAccessKey: 'gIdxDqdDRTs863QiMfk40CMWZRtc2xpQjF9dYD/osxM',
});

function urlToBlob(url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.onerror = reject;
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        resolve(xhr.response);
      }
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob'; // convert type
    xhr.send();
  });
}

export async function uploadImage(arrayOfPaths, callback, arrayOfNames) {
  let array = arrayOfPaths;
  console.log('Array That Comming', arrayOfPaths);
  let urlArray = [];
  if (!array.length)
    callback([]);
  for (let i = 0; i <= array.length - 1; i++) {
    let arr = array[i].split('/');
    const last = (arrayOfNames && arrayOfNames.length) ? arrayOfNames[i] : arr[arr.length - 1];
    const fileName = `${uuid()}.${last.split('.')[1]}`;
    const blob = await urlToBlob(array[i]);
    const params = {
      Body: blob,
      Bucket: `${bucketName}`,
      Key: fileName,
    };
    s3.putObject(params)
      .on('build', request => {
        request.httpRequest.headers.Host = `${digitalOceanSpaces}`;
        request.httpRequest.headers['Content-Length'] = array[i].size;
        request.httpRequest.headers['Content-Type'] = array[i].type;
        request.httpRequest.headers['x-amz-acl'] = 'public-read';
      })
      .send(err => {
        if (err) {
          console.log(err);
          callback([]);
        }
        else {
          // If there is no error updating the editor with the imageUrl
          const imageUrl = `${digitalOceanSpaces}` + fileName;
          console.log('imageURL', imageUrl);
          urlArray.push(imageUrl);
          if (array.length == urlArray.length) {
            console.log('Images Array In Upload Images', urlArray);
            callback(urlArray);
          }
        }
      });
  }
}


 import { uploadImage } from "../../../services/s3Service";
 if (image && image.startsWith('file')) {
        uploadImage([image], (imgs) => {
          if (imgs.length > 0) {
            console.log(imgs[0]);
            saveData(imgs[0]);
          } else {
            saveData();
          }
        });
      }
*/
