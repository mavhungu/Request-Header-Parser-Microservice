const whoamicontroller = async(req, res)=>{
    const ipaddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const language = req.headers['accept-language'];
    const software = req.headers['user-agent'];
    res.render('',{
        ipaddress, language, software
    })
}

module.exports = whoamicontroller;