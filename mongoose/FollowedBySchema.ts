import mongoose, {Schema} from "mongoose";

/**
 * Schema for a user foolowing another user
 */
const FollowedBySchema = new mongoose.Schema({
   profile: {type: Schema.Types.ObjectId, ref: "UserModel"},
   followedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: 'followedBy'});
export default FollowedBySchema;