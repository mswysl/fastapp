import { useState } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function UploadDesign() {
  const [name,setName] = useState("");

  const uploadDesign = async () => {
    await addDoc(collection(db,"designs"),{
      name:name,
      created:new Date()
    });
  };

  return (
    <div>
      <input
        placeholder="Design Name"
        onChange={(e)=>setName(e.target.value)}
      />
      <button onClick={uploadDesign}>
        Upload
      </button>
    </div>
  );
}