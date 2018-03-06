module.exports = {
    get: (req,res)=>{
        res.send({
            data: 'foo',
            status: true
        })
    },
    post: (req,res)=>{
        console.log(req.body);
        res.send({
            data: 'Sucesso',
            status: true
        })
    }
}