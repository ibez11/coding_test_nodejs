const AbstractRepository = require("./AbstractRepository");

const Validator = require('node-input-validator');

const UserModel = require("../../models/UsersModel");
const TaskModel = require("../../models/TaskModel");

class User extends AbstractRepository {
    constructor(model = new UserModel()) {
        super(model);
        this.arrayEmail = [];
        this.arrayDetail = [];
        this.arrayRemoveDetail = [];
    }

    addData(value)
    {
        this.arrayEmail.push(value);
    }

    addDetail(value)
    {
        this.arrayDetail.push(value)
    }

    removeDetail(value)
    {
        this.arrayRemoveDetail.push(value)
    }

    async validateRegister()
    {
        let validator = null;
    
        Validator.addCustomMessages({
            'email_id.isEmail': 'Invalid email format'
        });

        Validator.extend('in', async function (field, value) {
            if( field.value == true )
              return true;
            
            return false;
        });

        Validator.extend('isEmail', ({ value, args }, validator) => {
            var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
            for(var i = 0 ; i<value.length ; i++)
            {
                if(!emailReg.test(String(value[i])))
                    return false;

                return true;
            }
        });

        let fields = {
            email_id: this.arrayEmail
        };

        let rules = {
            email_id: 'isEmail',
        };
        
        validator = new Validator.Validator( fields, rules );
        await this.validOrThrow(validator);
    }

    async validateDetail()
    {
        let validator = null;
    
        Validator.addCustomMessages({
            'add_tasks.in': 'Task not found',
            'remove_tasks.in': 'Task not found'
        });

        Validator.extend('in', async function (field, value) {
            if( field.value == true )
              return true;
            
            return false;
        });

        var assign = null;
        var unassign = null;

        if(this.arrayDetail)
            unassign = ['']

        if(this.arrayRemoveDetail)
            assign = ['']

        let fields = {
            add_tasks: unassign.length ? true : false,
            remove_tasks: assign.length ? true : false
        };

        let rules = {
            add_tasks: 'in:true,false',
            remove_tasks: 'in:true,false'
        };
        
        validator = new Validator.Validator( fields, rules );
        await this.validOrThrow(validator);
    }

    async saveMultiple()
    {
        var data = this.arrayEmail;
        await this.validateRegister();
        
        var dataEmail = [];
        data.forEach(async x => {
            dataEmail.push({
                email_id: x
            });
        });

        await UserModel.bulkCreate(dataEmail);
    }

    async saveDetail(emailId)
    {
        var assign = this.arrayDetail;
        var unassign = this.arrayRemoveDetail;

        await this.validateDetail();
        
        if(assign.length) {
             // Add Tasks
            var dataAddTask = [];
            assign.forEach(async x => {
                dataAddTask.push({
                    email_id: emailId,
                    name: x
                });
            });
            
            await TaskModel.bulkCreate(dataAddTask);
            // End
        }
       
        if(unassign.length) {
            // Remove Task
            var dataRemoveTask = [];
            unassign.forEach(async x => {
                dataRemoveTask.push(x);
            });

            await TaskModel.destroy({ where: { email_id: emailId,name: dataRemoveTask}})
            // End
        }
    }

    async getRelation(users)
    {
        let rows = await TaskModel.findAll({where: {email_id: users}});
        
        return rows;
    }
}

module.exports = User;