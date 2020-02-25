var ValidationError = require('validation-error');

class AbstractRepository
{
    constructor(model) {
        this.model = model;
    }

    getModel()
    {
        return this.model;
    }

    async validOrThrow(validator)
    {
        var data = [];
        await validator.check().then(function (matched) {
            data._error = {return: matched, result: validator.errors};
        });

        if(data._error.return == false) {
            var error = Object.keys(data._error.result);
            
            error.forEach((v) => {
                throw new ValidationError('message', data._error.result[v].message)
            });
        }
    }
}

module.exports = AbstractRepository;
