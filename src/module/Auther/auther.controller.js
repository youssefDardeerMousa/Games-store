import { author } from "../../../db/models/auther.model.js";


export const newauthor=async(req,res,next)=>{
    
try {
    // const {firstName,lastName,Age,Country}=req.body;
     const data=req.body
// const results=await author.create({firstName,lastName,Age,Country}) 
const results=await author.create(data,{fields:['firstName','lastName',"Age","Country"]})

console.log(results);


    return res.json({result:true,message:"Auther Added Successfully"})

// console.log(results);
// return res.json({result:true,message:"Auther Added Successfully"})

} catch (error) {
    if(error.parent.errno==1062){
        return res.json({result:false,message:error.parent.sqlMessage})
    } 
   else{
    console.log(error);
    return res.json({result:false,message:error})
   }

}

}

export const getAuthers=async(req,res,next)=>{
// Find all users
try {
    // const getAllAuthers = await author.findAll({attributes:['firstName','lastName']})
// كده هيجيب لك اثنين من البيانات 
/**
 * Model.findAll({
  attributes: ['foo', ['bar', 'baz'], 'qux']
});
 * SELECT foo, bar AS baz, qux FROM ...
 */
const getAllAuthers = await author.findAll()
    console.log(getAllAuthers);
    return res.json({state:200,status:true,message:getAllAuthers})
} catch (error) {
    return res.json({state:404,status:false,message:error})
}


}

export const UpdateAuther=async (req,res,next)=>{
    let {firstName,lastName}=req.body;
    let {id}=req.params;
   try {
    let updatedauther=await author.update({firstName,lastName}, {
        where: {
          id
        }
      });
      if(updatedauther[0]==1){
        res.json({status:200,result:true,message:"the auther Name updated successfuly"})
      }
      else{
        res.json({status:404,result:false,message:"the Auther is not found"})
      }
   } catch (error) {
   
    res.json({status:404,result:false,message:error})

   }
}

export const deleteAuther=async(req,res,next)=>{
let{id}=req.params;
try {
    let deletedAuther=await author.destroy({
        where: {
          id
        }
      });
    if(deletedAuther==1){
       
        
          res.json({status:200,results:true,message:"Auther deleted successfully"})
    }
    else{
        res.json({status:404,results:false,message:"Auther not found"})

    }
   
} catch (error) {
    res.json({status:404,results:false,message:error})
  
}
}