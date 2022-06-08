import { Box } from "@mui/material";
import { useRef } from "react";
import { api } from "./api";

const Upload = () => {
  const imgRef = useRef();
  const preview = (file) => {
    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      if (imgRef && imgRef.current) imgRef.current.src = e.target?.result;
    };
    fileReader.readAsDataURL(file);
  };

  const changeHanler = async (e) => {
    const files = Array.from(e.target.files);
    preview(files[0]);
    console.log(files);
    let temp = [];
    files.map((item) => {
      const formData = new FormData();
      formData.append("image", item);
      const tempRequest = api.post("/upload", formData);
      temp.push(tempRequest);
    });

    const arrayResponse = await Promise.all(temp);

    await api.put("/products/6", {
      name: "update id 6",
      brand: "lenovo",
      image: arrayResponse.map((i) => i.data.filename),
      price: 6000,
      createdAt: new Date(),
      isDelivered: false,
      commentsId: 1
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        marginInline: 2
      }}
    >
      <img alt={"test"} src="" ref={imgRef} height={88} />
      <input type="file" multiple onChange={changeHanler} />
    </Box>
  );
};

export default Upload;