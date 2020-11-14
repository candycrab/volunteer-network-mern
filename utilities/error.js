exports.error = (res, err) => {
  return res.json(err.message);
};
