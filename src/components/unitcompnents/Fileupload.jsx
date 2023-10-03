import storage from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
function sendreg(props) {
  console.log("Data sent : ", props);
}
export function File_upload(file, lspdata) {
  {
    const storageRef = ref(storage, `${file.name}`);
    const uploadtask = uploadBytesResumable(storageRef, file);
    uploadtask.on(
      "state_changed",
      (snap) => {
        var byt = (snap.bytesTransferred / snap.totalBytes) * 100;
        console.log(byt);
      },
      (err) => {
        console.log(err);
      },
      (done) => {
        getDownloadURL(ref(storage, `${file.name}`))
          .then((url) => {
            lspdata["url"] = url;
            sendreg(lspdata);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    );
  }
}
