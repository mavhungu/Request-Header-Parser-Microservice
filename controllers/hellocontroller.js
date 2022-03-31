const hellocontroller = async (req, res)=>{
    res.json('index',{
        greeting: 'hello API'
    })
}

module.exports= hellocontroller;