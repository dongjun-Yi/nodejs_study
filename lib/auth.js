module.exports = {
    isOwner:function(request, response) {
        if (request.session.is_logined) {
            return true;
        } else {
            return false;
        }
    },
    statusUI:function(request, response) {
        let authStatusUI = '<a href="/user/login">login</a>'
        if (this.isOwner(request, response)) {
            authStatusUI = `Hi ${request.session.nickname}! | <a href="/user/logout">logout</a>`;
        }
        return authStatusUI;
    },
    checkUser:function(request,response){
        let userId;
        if (this.isOwner(request, response)) {
            userId = request.session.user_id;
        }
        return userId;
    },
    checkAdmin:function(request){
        if (request.session.user_id===1) {
            return true;
        }
        return false;
    }
}