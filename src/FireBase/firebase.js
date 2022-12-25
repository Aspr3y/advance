import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'
import config from "tailwindcss/defaultConfig.js";

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyAuq5GHQznHGHomSfa74wRV7c6wxN53wZI",
    authDomain: "landscaping-680e5.firebaseapp.com",
    projectId: "landscaping-680e5",
    storageBucket: "landscaping-680e5.appspot.com",
    messagingSenderId: "987920024053",
    appId: "1:987920024053:web:51b0ac11289695980220bc"
});



const db = firebaseApp.firestore()

export const services = collection(db, 'services')

export const createservices = services => {
    return servicesCollection.add(services)
}

export const getServices = async id => {
    const services = await servicesCollection.doc(id).get()
    return services.exists ? services.data() : null
}

export const updateServices = (id, services) => {
    return servicesCollection.doc(id).update(user)
}


export const deleteServices = id => {
    return servicesCollection.doc(id).delete()
}

export const useLoadServices = () =>{
    const services = ref([])
    const close = servicesCollection.onSnapshot( snapshot =>{
        services.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}))
    })
    onUnmounted(Close)
    return services
}