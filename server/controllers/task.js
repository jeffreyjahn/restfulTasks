const mongoose = require('mongoose');

const Task = mongoose.model('tasks');

module.exports={
    index: (req, res)=>{
        Task.find({}, (err, tasks)=>{
            // console.log(err);
            // console.log(tasks);
            return res.json(tasks);
        });
    },
    task: (req, res)=>{
        Task.findOne({_id: req.params.task_id}, (err, task)=>{
            if(err) {
                return res.redirect('/api/tasks');
            };
            return res.json(task);
        });
    },
    newTask:(req, res)=>{
        var newTask = new Task(req.body);
        newTask.save((err)=>{
            if(err){
                console.log("wat", err);
                for(var key in err.errors){
                    req.flash('newTask', err.errors[key].message);
                }
                return;
            } else{
                return res.json(newTask);
            }
        });
    },
    updateTask:(req, res)=>{
        Task.update({_id: req.body._id}, req.body,(err, task)=>{
            if(err) {
                console.log('yo');
                return;
            };
            console.log('updated!!!');
            return res.json(task);
        });
    },
    removeTask:(req, res)=>{
        Task.remove({_id: req.params.task_id}, (err)=>{
            return;
        });
    },
}