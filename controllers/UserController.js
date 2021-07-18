let users = require('../mocks/users');

const UserController = {
  listUsers:(req,res)=>{
    try {
      res.status(200).json(users);
    } catch (error) {
      res.status(200).json({error: error});  
    }
  },

  createUser:(req,res)=>{
    try {
      const {name} = req.body;
      const id = users.length + 1;
  
      let newUser = {
        id,
        name
      }
  
      users.push(newUser);
  
      res.status(200).json(newUser);  
    } catch (error) {
      res.status(400).json({error: error});  
    }
  },

  getUserById:(req,res)=>{

    try {
      let {id} = req.params;
  
      id = Number(id);
  
      const user = users.find((user)=>user.id === id);
  
      if(!user){
        return res.status(400).json({error: "User Not Found!"});
      }
  
      res.status(200).json(user);
      
    } catch (error) {
      res.status(400).json({error:error});  
    }
  },

  updatedUser:(req,res)=>{

    try {
      let {id} = req.params;
      let {name} = req.body;
  
      id = Number(id);
  
      const user = users.find((user)=>user.id === id);
  
      if(!user){
        return res.status(400).json({error: "User Not Found!"})
      }
  
      users = users.map((user)=>{
        return{
          ...user,
          name
        }
      })
  
      res.status(200).json({id,name});
      
    } catch (error) {
      res.status(400).json({error: error});  
    }
  },

  deleteUser:(req,res)=>{
    try {
      let {id} = req.params;
  
      id = Number(id);
  
      users = users.filter((user)=>user.id !== id);
  
      res.status(200).json({deleted:true});
      
    } catch (error) {
      res.status(400).json({error:error});  
    }
  }
}

module.exports = UserController;