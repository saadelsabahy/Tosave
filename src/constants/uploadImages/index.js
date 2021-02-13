import AWS from 'aws-sdk';
import {Platform} from 'react-native';
import uuid from 'react-uuid';

const endPoint = 'ams3.digitaloceanspaces.com';
const spacesEndpoint = new AWS.Endpoint(endPoint);
const bucketName = 'trends';

const digitalOceanSpaces = `https://${bucketName}.${endPoint}/`;

const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: 'Y2EEXX2TYXXRIXS5GXVC',
  secretAccessKey: 'gIdxDqdDRTs863QiMfk40CMWZRtc2xpQjF9dYD/osxM',
});

function urlToBlob(url) {
  try {
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
  } catch (error) {
    console.log('urlToBlob', error);
  }
}

export async function uploadImages(arrayOfPaths, callback) {
  let array = arrayOfPaths.map((i) => i.path);
  console.log('Array That Comming', arrayOfPaths);
  let urlArray = [];
  if (!array.length) {
    console.log('no images');
    return;
  }
  try {
    for (let i = 0; i <= array.length - 1; i++) {
      let arr = array[i].split(Platform.OS == 'android' ? '////' : '/');

      const fileName = array[i].substring(
        array[i].lastIndexOf('/') + 1,
        arr[i].length,
      );
      const blob = await urlToBlob(array[i]);
      const params = {
        Body: blob,
        Bucket: `${bucketName}`,
        Key: fileName,
      };
      s3.putObject(params)
        .on('build', (request) => {
          request.httpRequest.headers.Host = `${digitalOceanSpaces}`;
          request.httpRequest.headers['Content-Length'] = arrayOfPaths[i].size;
          request.httpRequest.headers['Content-Type'] = arrayOfPaths[i].type;
          request.httpRequest.headers['x-amz-acl'] = 'public-read';
        })
        .send((err) => {
          if (err) {
            console.log(err);
            callback([]);
          } else {
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
  } catch (error) {
    console.log(error);
  }
}
