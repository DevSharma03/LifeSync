export const getProfile = async (req, res) => {
  res.status(200).json({
    message: "User profile fetched successfully",
    user: req.user
  });
};

