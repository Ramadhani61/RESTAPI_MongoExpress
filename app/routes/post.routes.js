module.exports=(app)=>{
    const posts =require('../controllers/post.controller')
    const router=require('express').Router()

    router.get('/',posts.findall)
    router.post('/',posts.create)
    router.get('/:id',posts.findOne)
    router.put('/:id',posts.Updatedata)
    router.delete('/:id',posts.Deletedata)

    app.use('/api/posts/',router)
}