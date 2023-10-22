export default (req, res) => {
  const clientIp = req.connection.remoteAddress;
  res.status(200).json({ ip: clientIp });
};
