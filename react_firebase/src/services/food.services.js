import {db} from "../firebase-config"
import { collection, getDocs,getDoc,addDoc,updateDoc,deleteDoc,doc } from "firebase/firestore";
// import { deleteApp } from "firebase/app";


const foodCollection = collection(db,"Food")

class FoodDataServices {
    addFoods = (newFood) => {
        return addDoc(foodCollection,newFood)
    }

    updateFood = (id, updatedFood) => {
        const foodDoc = doc(db,"foods",id)
        return updateDoc(foodDoc,updateDoc)
    }

    deleteFood = (id) => {
        const foodDoc = doc(db,"foods",id)
        return deleteDoc(foodDoc)
    }

    getAllFoods = () => {
        return getDocs(foodCollection)
    }

    getFood = (id) => {
        const foodDoc = doc(db,"foods",id)
        return getDocs(foodDoc)
    }
}

export default new FoodDataServices()