import axios from "axios";

export const uploadImage = async (img) => {
  let imgUrl = null;

  try {
    const formData = new FormData();
    formData.append("image", img); // Attach the image

    const { data } = await axios.post(
      import.meta.env.VITE_SERVER_DOMAIN + "/upload",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    imgUrl = data.imageUrl;
  } catch (error) {
    console.error("Image Upload Error:", error);
  }

  return imgUrl;
};
