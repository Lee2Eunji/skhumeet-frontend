import customAlert from "@/components/modal/CustomModalAlert";
import { post } from "@/libs/api";
import { storageConstants } from "@/types";
import axios from "axios";

const imageUpload = async (files: FileList) => {
  const TOKEN = localStorage.getItem(storageConstants.accessToken);
  const formData = new FormData();
  Array.from(files).forEach((el) => {
    formData.append("images", el);
  });
  const data = await axios
    .post(`/api/image/new?path=main`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        withCredentials: true,
        Authorization: `Bearer ${TOKEN}`,
      },
    })
    .then((res: any) => {
      return res.data.imagePath;
    })
    .catch((el) => console.log("el", el));

  return data;
};

export default imageUpload;
