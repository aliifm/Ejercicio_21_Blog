function notAllowedReader(req, res, next) {
  if (req.user.roleCode >= 200) {
    next();
  } else {
    res.send("Permission denied");
  }
}

module.exports = notAllowedReader;
