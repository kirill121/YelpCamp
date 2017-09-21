var mongoose = require('mongoose');
var Campground = require('./models/campgrounds');
var Comment = require('./models/comment')

var data = [
    {
        name: 'Clouds rest', 
        image: "https://farm3.staticflickr.com/2535/3823437635_c712decf64.jpg",
        description: 'bla bla bla'
    },
    {
        name: 'Clouds rest', 
        image: "https://farm3.staticflickr.com/2311/2123340163_af7cba3be7.jpg",
        description: 'bla bla bla' 
    },
    {
        name: 'Clouds rest', 
        image: "https://farm5.staticflickr.com/4101/4961777592_322fea6826.jpg",
        description: 'bla bla bla' 
    }
]

function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err)
        }
        console.log('removed campgrounds');
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log('added a campground')
                    Comment.create(
                        {
                            text: 'this place is great',
                            author: 'homer'
                        }, function(err, comment){
                            if(err){
                                console.log(err)
                            } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log('created new comment')
                            }
                        })
                }
            })       
    })
    });
}

module.exports = seedDB;
