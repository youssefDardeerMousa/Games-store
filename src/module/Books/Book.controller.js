import { books } from "../../../db/models/books.model.js";



export const newbook=async(req,res,next)=>{
    
try {
    
     const data=req.body

const results=await books.create(data,{fields:['BooksName','color',"publishTime"]})

console.log(results);


    return res.json({result:true,message:"books Added Successfully"})

// console.log(results);
// return res.json({result:true,message:"books Added Successfully"})

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

export const getAllBook=async(req,res,next)=>{
// Find all users
try {
    // const getAllbooks = await books.findAll({attributes:['firstName','lastName']})
// كده هيجيب لك اثنين من البيانات 
/**
 * Model.findAll({
  attributes: ['foo', ['bar', 'baz'], 'qux']
});
 * SELECT foo, bar AS baz, qux FROM ...
 */
const getAllbooks = await books.findAll()
    console.log(getAllbooks);
    return res.json({state:200,status:true,message:getAllbooks})
} catch (error) {
    return res.json({state:404,status:false,message:error})
}


}

export const updatedbook=async (req,res,next)=>{
    let {BooksName,color}=req.body;
    let {id}=req.params;
   try {
    let updatedbooks=await books.update({BooksName,color}, {
        where: {
          id
        }
      });
      if(updatedbooks[0]==1){
        res.json({status:200,result:true,message:"the books Name and color updated successfuly"})
      }
      else{
        res.json({status:404,result:false,message:"the books is not found"})
      }
   } catch (error) {
   
    res.json({status:404,result:false,message:error})

   }
}

export const deletebook=async(req,res,next)=>{
let{id}=req.params;
try {
    let deletedbooks=await books.destroy({
        where: {
          id
        }
      });
    if(deletedbooks==1){
       
        
          res.json({status:200,results:true,message:"books deleted successfully"})
    }
    else{
        res.json({status:404,results:false,message:"books not found"})

    }
   
} catch (error) {
    res.json({status:404,results:false,message:error})
  
}
}