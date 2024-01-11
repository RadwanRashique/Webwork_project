const mongoose = require('mongoose')
const bannerSchema = new mongoose.Schema(

    {
        title: {
            type: String
        },
        image: {
            type: String,
            default: path.join(__dirname, 'defaultImage', 'bannerdefault_image.png')

        },
        description: {
            type: String
        },
        list: {
            type: Boolean,
            default: true
        }



    },
    {
        timestamps: true
    }
)

const developerModel = mongoose.model("bannerDetails", bannerSchema)
module.exports = developerModel