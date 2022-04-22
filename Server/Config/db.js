import mongoose from "mongoose";

const Connect= () => {
  return mongoose.connect(
  `mongodb+srv://RanaRajat:Nike21uno@cluster0.dvzdw.mongodb.net/Axlr_data?retryWrites=true&w=majority`
  );
};

export default Connect;