import {setDoc,doc, getDoc,orderBy, addDoc,where, collection, getDocs,query, Timestamp, updateDoc} from 'firebase/firestore';
import { auth, firestore, storage } from './firebase';
import {  signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { ref } from 'firebase/storage';
import {v4 as uuidv4} from 'uuid' 

export const registerUser = async(payload)=>{
    try {
    const {email,password,username,phone,country,invitedBy} = payload;
      const response = await createUserWithEmailAndPassword(auth,email,password)
      console.log(response)
      const referralCode = uuidv4()
      
    // const user   = response.user;
    const data = {
         username,
         email,
         referralCode,
         invitedBy:invitedBy??null,
         phone,
         currency:country,
         accountActivated:false,
         paymentStatus:
         {
            level1:false,
            level2:false,
            level3:false,
         }
    }
    const documentReferance = doc(firestore,'users',email);
 
        await setDoc(documentReferance,{...data})
    
    // console.log(response)
    return await findUser();
    } catch (error) {
        console.log("Failed to login",error)
    }
    
}

export const findUserByReferral = async (referral)=>{
    try {
        console.log("Here",referral)
        const qr =  query(collection(firestore,'users'),where("referralCode",'==',referral))
        const response = await getDocs(qr)
        console.log(response.docs[0].data())
        return response.docs[0].data()
    } catch (error) {
        console.log(error)
    }
}

export const getInvitedUsers = async () => {
    try {
        const level1Query = query(collection(firestore, 'users'), where('invitedBy', '==', auth.currentUser.email));
        const level1Snapshot = await getDocs(level1Query);
      
        const response = {
          level1: [],
          level2: [],
          level3: []
        };
      
        await Promise.all(
          level1Snapshot.docs.map(async (level1Snapshot) => {
            const level1 = level1Snapshot.data();
            response.level1.push(level1);
      
            const level2Query = query(collection(firestore, 'users'), where('invitedBy', '==', level1.email));
            const level2Snapshot = await getDocs(level2Query);
      
            await Promise.all(
              level2Snapshot.docs.map(async (level2Snapshot) => {
                const level2 = level2Snapshot.data();
                response.level2.push(level2);
                const level3Query = query(collection(firestore, 'users'), where('invitedBy', '==', level2.email));
                const level3Snapshot = await getDocs(level3Query);
                const level3Users = level3Snapshot.docs.map((level3Snapshot) => level3Snapshot.data());
                response.level3 = response.level3.concat(level3Users);
              })
            );
          })
        );
        // console.log(response.level1)
        return response;
    } catch (error) {
        console.error("Something is wrong",error)
    }
 
};

export const findUser = async(usr=auth.currentUser)=>{
    try {
        const user = await getDoc(doc(firestore,'users',usr.email));
        console.log(user)
        if(user.exists()){
         return user.data();
        }
    } catch (error) {
     console.log(error)
    }
 }
export const signIn = async(data)=>{
    try {
        const {email,password}= data;
   const response =   await  signInWithEmailAndPassword(auth,email,password)
   console.log(response.user)
   return response;
    } catch (error) {
        console.log(error)
    }
}
export const logOut = async()=>{
    try {
        const response = await signOut(auth)
        console.log(response)
    } catch (error) {
        console.log("Failed to sign out",error)
    }
}

