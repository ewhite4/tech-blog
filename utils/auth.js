const withAuth = (req, res, next) => {
    if (!req.session.user.id) {
        res.direct('/login');
    }
    else {
        next();
    }
};

module.exports = withAuth;

