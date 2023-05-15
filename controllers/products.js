const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product',
    {pageTitle: 'Add Product',
    path:'/admin/add-product'})};

exports.postAddProduct = (req, res, next) => {
    //extract what the user sent
    products.push({ title: req.body.title });
    //redirection
    res.redirect("/");
  }