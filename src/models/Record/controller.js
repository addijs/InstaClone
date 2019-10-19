const Rec = require('./model');

module.exports = {
  async findReg(users) {
    const reg = await Rec.findOne({ users });
    if (reg) return reg;
    else {
      return await Rec.findOne({
        users: [users[1], users[0]]
      });
    }
  },

  async createReg(users) {
    return await Rec.create({ 
      users,
      storage: []
    });
  },

  async saveMsg(aux, users, msgs) {
    return await Rec.findByIdAndUpdate(
      aux._id,
      { users, 
        storage: [...aux.storage, msgs] 
      },
      { new: true } 
    );
  }
}