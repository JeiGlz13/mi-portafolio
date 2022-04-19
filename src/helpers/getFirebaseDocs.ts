import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export const getFirebaseDocs = async (docName: string) => {
    const docs:any = [];
    const querySnapshot = await getDocs(collection(db ,docName));

    querySnapshot.forEach((doc) => {
        docs.push({
            id: doc.id,
            ...doc.data()
        });
    });

    return docs;
}