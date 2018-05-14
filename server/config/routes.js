const task = require('../controllers/task')

module.exports= (app)=>{
    app.get('/tasks', (req, res)=>{
        task.index(req,res);
    })
    app.post('/tasks/new', (req, res)=>{
        task.newTask(req, res);
    })
    app.get('/:task_id/', (req, res)=>{
        task.task(req,res);
    })
    app.get('/update/:task_id/', (req, res)=>{
        task.updateTask(req,res);
    })
    app.get('/remove/:task_id/', (req, res)=>{
        task.removeTask(req,res);
    })
}