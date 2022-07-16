//importing schema
const Task = require('../models/task');
//Task show and html render
module.exports.home = function (req, res) {
    Task.find({}, function (err, tasks) {
        if (err) {
            console.log(`Error in retrieving task ${err}`)
            return;
        }
        return res.render('home', {
            task_list: tasks
        });
    })
};
//Specific task fetching
module.exports.show_specific = function (req, res) {

    switch (req.query.search_item) {
        /* Search By Title */
        case 'Title':
            Task.find({ Title: req.query.search_keyword }, function (err, tasks) {
                if (err) {
                    console.log(`Error in retrieving task ${err}`)
                    return;
                }
                return res.render('home', {
                    task_list: tasks
                });
            })
            break;
            /* Search By Date */
        case 'Date':
            Task.find({ Date: req.query.search_keyword }, function (err, tasks) {
                if (err) {
                    console.log(`Error in retrieving task ${err}`)
                    return;
                }
                return res.render('home', {
                    task_list: tasks
                });
            })
            break;
            /* Search By Category */
        case 'Category':
            Task.find({ Category: req.query.search_keyword }, function (err, tasks) {
                if (err) {
                    console.log(`Error in retrieving task ${err}`)
                    return;
                }
                return res.render('home', {
                    task_list: tasks
                });
            })
            break;

    }

}

//Task Deletion
module.exports.delete_task = function (req, res) {

    //find and delete
    Task.findByIdAndDelete(req.query.id, function (err) {
        if (err) {
            console.log('error in deleting an object from database');
            return;
        }

        return res.redirect('/');
    })
}

//Task Creating function
module.exports.create_task = function (req, res) {

    //Populating db(inserting data)
    Task.create({
        Title: req.body.title,
        Description: req.body.description,
        Date: req.body.date,
        Time: req.body.time,
        Category: req.body.category
    }, function (err, newTask) {
        if (err) {
            console.log(`Error in creating task ${err}`)
            return;
        }
        console.log('*******', newTask);
        return res.redirect('/');
    })

};