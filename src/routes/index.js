const express = require('express');
const router = express.Router();
const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(require('./key.json')),
  databaseURL: "https://centitexoveroles-default-rtdb.firebaseio.com/"
});

const db = admin.firestore();









router.get('/', (req, res) => {
  res.render('index.html', { title: 'First Web Node' });
});

router.get('/categorias', (req, res) => {
  res.render('categorias.html', { title: 'Contact Page' });
});

router.get('/contactanos', (req, res)=>{
  res.render('contactanos.html')
})

router.get('/catalogo', async(req, res)=>{

  const query = db.collection('modelos');
  const querySnapshot = await query.get();

  const docs = querySnapshot.docs;

  const datos = docs.map(doc =>({
      id: doc.id,
      titulo: doc.data().titulo,
      img: doc.data().img,
      description: doc.data().description,
      caracteristicas: doc.data().caracteristicas,
      precio: doc.data().precio
  }));

  console.log(datos);
  res.render('catalogo.html', {modelos: datos})
});

router.get('/catalogo/:modeloId', (req, res)=>{
  (async ()=>{
         try{
          const doc = db.collection('modelos').doc(req.params.modeloId);
          const item = await doc.get();
          const respondido = item.data();
          console.log(respondido);
          res.render('modelo.html', {modelo: respondido})
         } catch(error){
         
         }
  })()

})

router.get('/categorias/admin/overoles/crear', (req, res) => {
  res.render('admin.html');
});

     
module.exports = router;
