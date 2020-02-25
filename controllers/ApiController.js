const AccessControl = require("../CodingTest/Repository/AccessControl");
const JsonResponse = require("../CodingTestLibs/JsonResponse");

class ApiController
{
    constructor() {
        this.jsonResponse = this.jResp();
    }

    jResp()
    {
        return new JsonResponse();
    }

    getAccessControl(userType)
    {
        if(userType)
            return new AccessControl(userType);

        return null;
    }
}


module.exports = ApiController;