const { Router } = require("express");
const router = Router();


//Ruta inicial del archivo index.pug
router.get('/', (req, res) =>{
  res.render('index', { title: 'hola mundo' });
});

router.get('/login',(req,res)=>{
  res.render('login' ,{ error: false });
});

router.post('/signin',(req,res)=>{    
  const user = req.body.email;
  const pass = req.body.password;
  if(user==="profesor@elpoli.com" && pass==="54321"){     
      res.render('dashboard',{ 
        title: 'Dashboard',
        datos:{
            email:user,
            alumnos:[
              'Carolina Mejía',
              'Andrés Calderón'
            ]
        }
    });
  }
  else{
      //window.alert("te equivocaste");
      res.render('login',  {error: true});
  }
});


module.exports = router;