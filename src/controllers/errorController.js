

const error404 = (req, res) => {
    res.status(404).render('404', { requestedPath: req.originalUrl });
};

export default { error404 };