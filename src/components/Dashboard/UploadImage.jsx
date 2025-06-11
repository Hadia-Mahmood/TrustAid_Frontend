//correctly work before file 
// "use client";
// import { useUploadImage } from "../../hooks/image-hook";

// import React, { useState } from "react";
// const UploadImage = () => {
//   const [file, setFile] = useState(null);
//   const [data, setData] = useState({
     
//       usageSummary: "i used it in picnic",
      
//     });
    
//   const { mutate: addMutate } = useUploadImage(
//     JSON.stringify({...data  })
//   );

    

//   const handleImageUpload = async (event) => {
//         event.preventDefault();
        
//     console.log(data);
//         addMutate(
//               {},
//               {
//                 onSuccess: (response) => {
//                   console.log("OnSuccess");
               
//                 },
//                 onError: (error) => {
//                   console.log("OnError", error);
                
//                 },
//               });
//             } 
//           ;
//   console.log(file);

//   return (
//         <div>
//           <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//           <form className="w-full mt-10" onSubmit={handleImageUpload}>
//             <button
//                           type="submit"
//                           className="mt-6 w-full flex justify-center items-center font-semibold text-sm gap-3 bg-[#20332c] text-white px-7 py-5 rounded-sm hover:bg-[#257830]"
//                         >
//                           Submit Proof
                          
//                         </button>
//             </form>
//         </div>
//     );
//   };

// export default UploadImage;




 


//chat gpt
// "use client";
// import { useUploadImage } from "../../hooks/image-hook";
// import React, { useState } from "react";

// const UploadImage = () => {
//   const [file, setFile] = useState(null);
//   const [data, setData] = useState({
//     usageSummary: "I used it in a picnic",
//   });

//   const { mutate: addMutate } = useUploadImage();

//   const handleImageUpload = async (event) => {
//     event.preventDefault();

//     if (!file) {
//       console.error("No file selected");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("usageSummary", data.usageSummary);

//     console.log("Uploading file:", file);

//     addMutate(formData, {
//       onSuccess: (response) => {
//         console.log("Upload Success:", response);
//       },
//       onError: (error) => {
//         console.error("Upload Error:", error);
//       },
//     });
//   };

//   return (
//     <div>
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//       <form className="w-full mt-10" onSubmit={handleImageUpload}>
//         <button
//           type="submit"
//           className="mt-6 w-full flex justify-center items-center font-semibold text-sm gap-3 bg-[#20332c] text-white px-7 py-5 rounded-sm hover:bg-[#257830]"
//         >
//           Submit Proof
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UploadImage;





{/* <input type="file" onChange={(e) => setFile(e.target.files[0])} /> */}
//this was sending fioe 
// "use client";
// import { useUploadImage } from "../../hooks/image-hook";

// import React, { useState } from "react";
// const UploadImage = () => {
//   const [image, setImage] = useState(null);
//   const [data, setData] = useState({
     
//       usageSummary: "i used it in picnic",
//       image: "",
      
//     });
    
//   const { mutate: addMutate } = useUploadImage(
//     JSON.stringify({data  })
//   );
//   const handleAvatarChange = (event) => {
//     console.log("handleImage");
//     const { name, value } = event.target;
//     if (name === "image") {
//       const reader = new FileReader();

//       reader.onload = () => {
//         console.log("handleImage22");
//         if (reader.readyState === 2) {
//           setData({ ...data, [name]: reader.result });
//           setImage(reader.result);
//         }
//       };
//       reader.readAsDataURL(event.target.files[0]);
//     } else {
//       setUserData({ ...data, [name]: value });
//     }
//   };
    

//   const handleImageUpload = async (event) => {
//         event.preventDefault();
        
//     console.log(data);
//         addMutate(
//               {},
//               {
//                 onSuccess: (response) => {
//                   console.log("OnSuccess");
               
//                 },
//                 onError: (error) => {
//                   console.log("OnError", error);
                
//                 },
//               });
//             } 
//           ;
  
//   return (
//         <div>
          
//           <form className="w-full mt-10" onSubmit={handleImageUpload}>
//           <input
//             id="avatar-upload"
//             name="image"
//             required
//             type="file"
//             accept="image/*"
//             onChange={handleAvatarChange}
            
//           />
//             <button
//                           type="submit"
//                           className="mt-6 w-full flex justify-center items-center font-semibold text-sm gap-3 bg-[#20332c] text-white px-7 py-5 rounded-sm hover:bg-[#257830]"
//                         >
//                           Submit Proof
                          
//             </button>
//             </form>
//         </div>
//     );
//   };

// export default UploadImage;








"use client";
import { useUploadImage } from "../../hooks/image-hook";
import React, { useState } from "react";

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState({
    usageSummary: "i used it in picnic",
  });

  const { mutate: addMutate } = useUploadImage(
    JSON.stringify({ ...data }) // No need to stringify file object
  );

  const handleAvatarChange = (event) => {
    console.log("handleImage");
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleImageUpload = async (event) => {
    event.preventDefault();
    
    if (!file) {
      console.log("No file selected!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("usageSummary", data.usageSummary);

    console.log("Uploading", formData);

    addMutate(formData, {
      onSuccess: (response) => {
        console.log("OnSuccess", response);
      },
      onError: (error) => {
        console.log("OnError", error);
      },
    });
  };

  return (
    <div>
      <form className="w-full mt-10" onSubmit={handleImageUpload}>
        <input
          id="avatar-upload"
          name="image"
          required
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
        />
        <button
          type="submit"
          className="mt-6 w-full flex justify-center items-center font-semibold text-sm gap-3 bg-[#20332c] text-white px-7 py-5 rounded-sm hover:bg-[#257830]"
        >
          Submit Proof
        </button>
      </form>
    </div>
  );
};

export default UploadImage;
