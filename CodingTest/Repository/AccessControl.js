class AccessControl
{
    constructor(userType) {
        this.permission = this.getPermissions(userType);
    }
    
    async getPermissions(userType)
    {
        let category = [userType];
       
        return category;
    }

    async hasAccess(name)
    {
        let getAccess = await this.permission;
        let isHasAccess = getAccess.includes(name);
        
        return isHasAccess;
    }

    async hasAccesses(listName)
    {
        var isHasAccess = false;
        
        for(var i = 0; i<listName.length; i++) {
            if(await this.hasAccess(listName[i])) {
                isHasAccess = true;
                break;
            }
        }
        
        return isHasAccess;
    }
}

module.exports = AccessControl;