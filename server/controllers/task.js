const mongoose = require('mongoose');

const Task = mongoose.model('tasks');

module.exports={
    index: (req, res)=>{
        Task.find({}, (err, tasks)=>{
            console.log(err);
            console.log(tasks);
            return res.json(tasks);
        });
    },
// FINISH ALL THE TASK.JSSADOKLSKMDADSALKM
    task: (req, res)=>{
        Task.findOne({_id: req.params.task_id}, (err, task)=>{
            if(err) {
                return res.redirect('/tasks');
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
                res.redirect('/tasks');
            } else{
                res.redirect('/tasks');
            }
        });
    },
    updateTask:(req, res)=>{
        Task.findOne({_id: req.params.task_id}, (err, task)=>{
            if(err) {
                return res.redirect('/tasks');
            };
            return res.json(task);
        });
    },
    removeTask:(req, res)=>{
        Task.remove({_id: req.params.task_id}, (err)=>{
            res.redirect('/tasks');
        });
    },
}