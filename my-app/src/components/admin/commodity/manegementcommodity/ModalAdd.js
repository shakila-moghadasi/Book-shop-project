import React, { useState } from 'react';
import { useRef } from 'react';
import { api } from "./api";


const ModalAdd = () => {
  const [Title , setTitle] = useState(null);
  const [author , setauthor] = useState(null);

  const imgRef = useRef();
  const preview = (file) => {
    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      if (imgRef && imgRef.current) imgRef.current.src = e.target?.result;
    };
    fileReader.readAsDataURL(file);
  }

  const changeHanler = async (e) => {
    const image = Array.from(e.target.files);
    preview(image[0]);
    console.log(image);
    let temp = [];
    image.map((item) => {
      const formData = new FormData();
      formData.append("image", item);
      const tempRequest = api.post("/upload", formData);
      temp.push(tempRequest);
    });
    const arrayResponse = await Promise.all(temp);

    e.preventDefault()
    await api.post('/products', {
      Title: Title,
      author: author,
      image: arrayResponse.map((i) => i.data.filename),
      createdAt: new Date(),
      isDelivered: false,
    })
    console.log(image);
    console.log(Title);
    console.log(author);
  }


  return (
    <form>
      <img alt={"test"} src="" ref={imgRef} height={88} />
      <input type="file" onChange={changeHanler}/>
      <br/>
      <label>
        Title:
      </label>
      <br/>
      <input type="text" onChange={(e) => setTitle(e.target.value)}/>
      <br/>
      <label>
        author:
      </label>
      <br/>
      <input type="text" onChange={(e) => setauthor(e.target.value)}/>
      <br/>
      <button type="submit">Save</button>
    </form>
  )
};

export default ModalAdd;