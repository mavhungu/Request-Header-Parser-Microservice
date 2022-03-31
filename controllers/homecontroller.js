const homecontroller = async (req, res)=>{
    res.render('index',{
        'title': 'Index page',
        'home': 'Url Shortner Microservice'
    })
}

module.exports= homecontroller;