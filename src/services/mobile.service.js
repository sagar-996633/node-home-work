const { mobile } = require ("../models");

const createMobile = async (reqBody) => {
  return mobile.create(reqBody);
};
const getMobilelist = async (req, res) => {
  return mobile.find({ $or: [{ is_active: true }] });
};

const getMobileById = async (mobileId) => {
  return mobile.findById(mobileId);
};

const updateDetails = async (mobileId, updateBody) => {
  return mobile.findByIdAndUpdate(mobileId, { $set: updateBody });
};

const manageMobileStatus=async(mobileId)=>{
  const mobileExists=await getMobileById(mobileId);
  if(!mobileExists){
    throw Error("mobil not found");
  }
  return Mobile.findOneAndUpdate(
    {_is:mobileId},
    {
      $set:{
        is_active: !mobileExists.is_active,
      },
    },
    { new :true}
  );
};

const deleteMobile = async (mobileId) => {
  return mobile.findByIdAndDelete(mobileId);
};
module.exports = {
  createMobile,
  getMobilelist,
  getMobileById,
  updateDetails,
  deleteMobile,
};
