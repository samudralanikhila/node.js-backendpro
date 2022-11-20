const  Food = (req,res) =>{
    res.send(
        [
            {
                id:1,
                img:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/8/7/1/he_eggs-2-thinkstock_s4x3.jpg.rend.hgtvcom.231.174.suffix/1379093631570.jpeg",
                tittle:"5 Ways to Be Good to Your Bones",
                dis:"Calcium is important but it isn’t the only thing to consider when it comes to keeping your bones strong and healthy. To reduce your risk of osteoporosis, make sure you’re paying attention to these 5 things.",
                travel:"Travel / August-19-2022",
                number:"1"
            },
            {
                id:2,
                img:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/7/23/0/HE_water-pitcher-thinkstock_s4x3.jpg.rend.hgtvcom.231.174.suffix/1379092011490.jpeg",
                tittle:"The Smartest Sip for Weight Loss.",
                dis:"What if I told you that there was a pill that, when you consumed it, helped you get a better workout, which of course leads to better calorie burning?",
                travel:"Travel / August-19-2022",
                number:"2"
            },
            {
                id:3,
                img:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/7/25/1/FNM_090112-Tomato-and-Watermelon-Gazpacho-Recipe_s4x3.jpg.rend.hgtvcom.231.174.suffix/1371606900127.jpeg",
                tittle:"Summer Soiree",
                dis:"When it’s too hot to fathom cooking, it’s easy to fall back on unhealthy packaged foods or takeout. But with the right recipes in your warm-weather arsenal, you can still enjoy homemade soups, salads, sandwiches and sweets. ",
                travel:"Travel / August-19-2022",
                number:"3"
            },
            {
                id:4,
                img:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/8/2/1/HE_spices_s4x3.jpg.rend.hgtvcom.231.174.suffix/1371609098609.jpeg",
                tittle:"Organizing Your Spice Cabinet",
                dis:"To make cooking easier, and to keep your kitchen in order, organize spices and dried herbs by cuisine, using this simple guide.",
                travel:"Travel / August-19-2022",
                number:"4"
            },
            {
                id:5,
                img:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/9/0/FNK_the-best-pumpkin-bread_H.jpg.rend.hgtvcom.966.725.suffix/1568135328378.jpeg",
                tittle:"Pumpkin Bread ",
                dis:"Pumpkin goes perfectly with chocolate, cranberries and a whole lot more, especially when baked into a delicious quick bread.",
                travel:"Travel / August-19-2022",
                number:"5",
                name:"niki"
            }
        ]
    )
}
module.exports.Fooddata =Food