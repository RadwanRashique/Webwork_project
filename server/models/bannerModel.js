const mongoose = require('mongoose')

const bannerSchema = new mongoose.Schema(

    {
        title: {
            type: String
        },
        image: {
            type: String,
            default: 'https://imgeng.jagran.com/images/2023/aug/img1690877604653.jpg'

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