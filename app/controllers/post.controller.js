const db= require('../models')

const Post = db.posts

exports.findall=(req,res)=>{
    Post.find()
    .then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.status(500).send({
            message:err.message || "Some Error while post data"
        })
    })
}
exports.create=(req,res)=>{
    const post = new Post({
        title:req.body.title,
        body:req.body.body,
        published: req.body.published ? req.body.published : false,
    })
    post.save(post).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.status(500).send({
            message: err.message || "Error to created data"
        })
    })
}
exports.findOne=(req,res)=>{
    const id = req.params.id
    Post.findById(id).then((result)=>{
        res.send(result);
    }).catch((err)=>{
        res.status(500).send({
            message: err.message || "Error to created data"
        })
    })
}
exports.Updatedata=(req,res)=>{
    const id = req.params.id 
    Post.findByIdAndUpdate(id,req.body).then((result)=>{
        if (!result) {
            res.status(404).send({
                message:"Post Not Found"
            })
        }
        res.send({
            message:"Post has been updated"
        });
    }).catch((err)=>{
        res.status(500).send({
            message: err.message || "Error to update data"
        })
    })
}
exports.Deletedata=(req,res)=>{
    const id = req.params.id 
    Post.findByIdAndRemove(id).then((result)=>{
        if (!result) {
            res.status(404).send({
                message:"id  Not Found"
            })
        }
        res.send({
            message:"Post has been deleted"
        });
    }).catch((err)=>{
        res.status(500).send({
            message: err.message || "Error to update data"
        })
    })
}