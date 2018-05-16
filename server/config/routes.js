const task = require('../controllers/task')

module.exports= (app)=>{
    app.get('/api/tasks', (req, res)=>{
        task.index(req,res);
    })
    app.post('/api/tasks/new', (req, res)=>{
        task.newTask(req, res);
    })
    app.get('/api/:task_id/', (req, res)=>{
        task.task(req,res);
    })
    app.put('/api/update/:task_id/', (req, res)=>{
        console.log('hey man');
        task.updateTask(req,res);
    })
    app.delete('/api/remove/:task_id/', (req, res)=>{
        task.removeTask(req,res);
    })
}