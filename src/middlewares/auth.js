const adminAuth=(req,res,next) => {
    //Authorization logic 
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if (!isAdminAuthorized) res.status(401).send("not authorized");
    else next();
};

const userAuth=(req,res,next) => {
    //Authorization logic 
    const token = "xyddz";
    const isAdminAuthorized = token === "xyz";
    if (!isAdminAuthorized) res.status(401).send("not authorized");
    else next();
};

module.exports={
    adminAuth,
    userAuth,
};