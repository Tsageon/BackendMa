const {
    collection,
    addDoc,
    doc,
    deleteDoc,
    getDocs,
    updateDoc,
  } = require('firebase/firestore');
  const { db } = require("../Config/firebase");
  
  const getItems = async (req, res) => {
    try {
      const querySnapshot = await getDocs(collection(db, "items"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      res.json({
        data: data,
      });
    } catch (error) {
      console.log("Error getting Items", error);
    }
  };
  
  const addItem = async (req, res) => {
      const { Name, Availability, Price, image, StockLeft, Description } = req.body;
  
      try {
          const docRef = await addDoc(collection(db, "items"), {
              Name,
              Availability,
              Price,
              image,
              StockLeft,
              Description,
          });
          res.json({
              message: "Item Put in Stock",
          });
      } catch (error) {
          console.log("Error Adding Item", error);
          res.status(500).json({ error: "Failed to add The things" });
      }
  };
  
  const updateItem = async (req, res) => {
    const { id, Name, Availability, image,Price, StockLeft } = req.body;
    try {
      const itemDocRef = doc(db, "items", id);
  
      const updateData = {
        Name,
        Availability,
        image,
        Price,
        StockLeft,
      };
  
      await updateDoc(itemDocRef, updateData);
      res.json({ message: "Item updated successfully" });
    } catch (error) {
      console.error("Error updating th The things:", error);
      req.status(500).json({ error: "Failed to update Item" });
    }
  };
  
  const deleteItem = async (req, res) => {
    const { id } = req.params;
    try {
      const docRef = doc(db, "items", id);
      await deleteDoc(docRef);
      res.jso({ message: "Deleted successfuly" });
    } catch (error) {
      console.log("Deleting item error", error);
      res.status(500).json({ error: "Failed to delete item" });
    }
  };
  
  module.exports = {
    addItem,
    updateItem,
    deleteItem,
    getItems,
  };