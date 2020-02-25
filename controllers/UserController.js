const ApiController = require('./ApiController');
const qs = require("qs");
const User = require("../CodingTest/Repository/User");
const UserModel = require("../models/UsersModel");

class UserController extends ApiController
{
    async getModel(email)
    {
        let row = await UserModel.findOne({where: {email_id: email}})
        
        if(!row)
            throw new Error('User not found');

        return row;
    }

    controller()
    {
        return {
            register: async (req,res) => 
            {
                this.jsonResponse = this.jResp();
                
                try {
                    req.body = qs.parse(req.body);

                    var arrData = req.body.user;
                    
                    if(!arrData)
                        throw new Error('Data not found');

                    var repo = new User();

                    arrData.forEach(x => {
                        repo.addData(x)
                    })

                    await repo.saveMultiple();

                    this.jsonResponse.setMessage("success");
                } catch(e) {
                    this.jsonResponse.setMessage(e.message);
                    this.jsonResponse.setError(true);
                }

                return res.status(204).send(this.jsonResponse.getResponse());
            },
            assign: async (req,res) => 
            {
                this.jsonResponse = this.jResp();
                
                try {
                    req.body = qs.parse(req.body);

                    var user = req.body.user;
                    
                    if(!user)
                        throw new Error('User not found');

                    var repo = new User();

                    await this.getModel(user);

                    var arrData = req.body.tasks || [];
                    
                    arrData.forEach(x => {
                        repo.addDetail(x)
                    })

                    await repo.saveDetail(user);

                    this.jsonResponse.setMessage("success");
                } catch(e) {
                    this.jsonResponse.setMessage(e.message);
                    this.jsonResponse.setError(true);
                }

                return res.status(204).send(this.jsonResponse.getResponse());
            },
            unassign: async (req,res) => 
            {
                this.jsonResponse = this.jResp();
                
                try {
                    req.body = qs.parse(req.body);

                    var user = req.body.user;
                    
                    if(!user)
                        throw new Error('User not found');

                    var repo = new User();

                    await this.getModel(user);

                    var arrData = req.body.tasks || [];
                    
                    arrData.forEach(x => {
                        repo.removeDetail(x)
                    })

                    await repo.saveDetail(user);

                    this.jsonResponse.setMessage("success");
                } catch(e) {
                    this.jsonResponse.setMessage(e.message);
                    this.jsonResponse.setError(true);
                }

                return res.status(204).send(this.jsonResponse.getResponse());
            },
            common: async (req,res) => 
            {
                this.jsonResponse = this.jResp();
                
                try {
                    req.query = qs.parse(req.query);

                    var arrData = req.query.user;
                    
                    var repo = new User();
                    
                    let rows = await repo.getRelation(arrData);

                    let list = [];
                    rows.forEach(x => {
                        list.push(x.name)
                    })

                    this.jsonResponse.setData({tasks: list});
                    this.jsonResponse.setMessage("success");
                } catch(e) {
                    this.jsonResponse.setMessage(e.message);
                    this.jsonResponse.setError(true);
                }

                return res.status(200).send(this.jsonResponse.getResponse());
            }
        }
    }
}

let user = new UserController();
module.exports.UserController = user.controller();