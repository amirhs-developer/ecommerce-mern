const createPasswordResetToken =  async (id) => {
    const resetToken = crypto.randomBytes(32).toString("hex");
    const user = await User.findById(id);
    user.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
    user.passwordResetExpires = new Date() + 30 * 60 * 1000; //30 minute;
    return resetToken;
}