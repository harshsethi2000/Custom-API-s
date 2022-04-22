import express from 'express';
import bodyparser from 'body-parser';
import MyTopStoriesRoutes from './routes/MyTopStories.js';
import MyNewStoriesRoutes from './routes/MyNewStories.js';
import MyBestStoriesRoutes from './routes/MyBestStories.js';


const app=express();
const PORT=process.env.PORT || 3000;


app.use('/myTopStories',MyTopStoriesRoutes);
app.use('/myNewStories',MyNewStoriesRoutes);
app.use('/myBestStories',MyBestStoriesRoutes);

app.use(express.static('public'));
//set ejs as templating engine
app.set('view engine','ejs')
app.set('views','./views')

app.get('/',(req,res)=>{
    //console.log("test");
    res.render('home');
    });

    
app.listen(PORT,()=>console.log(`Server running on Port: http://localhost:${PORT}`));