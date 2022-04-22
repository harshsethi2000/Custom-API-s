import express from 'express';
import axios from 'axios';
const router=express.Router();


router.get('/',async (req,res)=>{

try
{

    var url=' https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
    const response=await axios.get(url);
    const ID=response.data;
    var arr=new Array();
   
    var start=Math.floor(Math.random() * (ID.length-50-2)) + 1;
    var j=0;
    for(var i=start;i<start+30;i++)
    {
       const tmpRes=await axios.get(`https://hacker-news.firebaseio.com/v0/item/${ID[i]}.json?print=pretty`);
       arr[j++]=tmpRes.data;
    }
    
    return res.json({stories:arr});
        
}catch(error){

console.log(error);
}


});
export default router;