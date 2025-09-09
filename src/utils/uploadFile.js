// // src/utils/uploadFile.js
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { db } from "../firebase";
// import { collection, addDoc } from "firebase/firestore";

// const storage = getStorage();

// export async function uploadFile(file, metadata) {
//   try {
//     // 1. Create a storage reference
//     const storageRef = ref(storage, `uploads/${file.name}`);

//     // 2. Upload file
//     await uploadBytes(storageRef, file);

//     // 3. Get download URL
//     const url = await getDownloadURL(storageRef);

//     // 4. Save file info to Firestore
//     await addDoc(collection(db, "files"), {
//       ...metadata,   // branch, semester, subject, etc.
//       name: file.name,
//       size: (file.size / (1024 * 1024)).toFixed(2) + " MB",
//       url,
//       uploadedAt: new Date()
//     });

//     return { success: true, url };
//   } catch (error) {
//     console.error("Upload failed:", error);
//     return { success: false, error };
//   }
// }
