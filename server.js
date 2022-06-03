
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const familiar = {
    'little bighorn' : {
        'Name': 'Little Bighorn',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/c/c8/001_little_bighorn.png/revision/latest?cb=20140604174729',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Skull Mountain'],
        'Metamorph':['Bighorn'],
        'morphLevel' : 14,
        'maxLevel': 25
    }, 
    'bighorn' : {
        'Name': 'Bighorn',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/8/88/002_bighorn.png/revision/latest?cb=20140604174730',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Smoky Foothills'],
        'Metamorph':['Batterhorn', 'Splatterhorn'],
        'morphLevel' : 32,
        'maxLevel': 45
    },
    'batterhorn' : {
        'Name': 'Batterhorn',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/1/1b/003_batterhorn.png/revision/latest?cb=20140604174732',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Nazcaä'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'splatterhorn' : {
        'Name': 'Splatterhorn',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/7/7e/004_splatterhorn.png/revision/latest?cb=20140604174732',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Ivory Tower'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'purrloiner' : {
        'Name': 'Purrloiner',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/d/d8/005_purrloiner.png/revision/latest?cb=20140604174733',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['The Bayous-W'],
        'Metamorph':['Cutpurrse'],
        'morphLevel' : 21,
        'maxLevel': 32
    },
    'cutpurrse' : {
        'Name': 'Cutpurrse',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/c/c3/006_cutpurrse.png/revision/latest?cb=20140604174733',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Skull Mountain'],
        'Metamorph':['Puss in Bouts', 'Puss in Boats'],
        'morphLevel' : 33,
        'maxLevel': 55
    },
    'puss in bouts' : {
        'Name': 'Puss in Bouts',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/d/d4/008_puss_in_bouts.png/revision/latest?cb=20140604174734',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Billy Goats Bluff'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'puss in boats' : {
        'Name': 'Puss in Boats',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/7/79/007_puss_in_boats.png/revision/latest?cb=20140604174734',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['The Sea: Southwest of the Spring Realm'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'hog-goblin' : {
        'Name': 'Hog-Goblin',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/f/f5/009_hog-goblin.png/revision/latest?cb=20140604174734',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['The Bayous-W'],
        'Metamorph':['Gobfather'],
        'morphLevel' : 17,
        'maxLevel': 32
    },
    'gobfather' : {
        'Name': 'Gobfather',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/9/90/010_gobfather.png/revision/latest?cb=20140604174734',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Skull Mountain'],
        'Metamorph':['Gobspeed', 'Gobforsaken'],
        'morphLevel' : 34,
        'maxLevel': 53
    },
    'gobspeed' : {
        'Name': 'Gobspeed',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/5/54/011_gobspeed.png/revision/latest?cb=20140604174735',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Billy Goats Bluff'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'gobforsaken' : {
        'Name': 'Gobforsaken',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/a/a2/012_gobforsaken.png/revision/latest?cb=20140604174735',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Nevermore'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'mite' : {
        'Name': 'Mite',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/7/74/013_mite.png/revision/latest?cb=20140604174735',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Ugly Duckling Isle'],
        'Metamorph':['Mighty Mite'],
        'morphLevel' : 12,
        'maxLevel': 50
    },
    'mighty mite' : {
        'Name': 'Mighty Mite',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/c/cd/014_mighty_mite.png/revision/latest?cb=20140604174736',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Billy Goats Bluff'],
        'Metamorph':['Dynamite', 'Mermite'],
        'morphLevel' : 33,
        'maxLevel': 54
    },
    'dynamite' : {
        'Name': 'Dynamite',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/8/81/015_dynamite.png/revision/latest?cb=20140604174736',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['None/Metamorph'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'mermite' : {
        'Name': 'Mermite',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/2/22/016_mermite.png/revision/latest?cb=20140604174737',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Ivory Tower'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'hurly' : {
        'Name': 'Hurly',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/f/fc/017_hurly.png/revision/latest?cb=20140604174737',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['No Longer Mine'],
        'Metamorph':['Burly Hurly'],
        'morphLevel' : 22,
        'maxLevel': 30
    },
    'burly hurly' : {
        'Name': 'Burly Hurly',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/c/c2/018_burly_hurly.png/revision/latest?cb=20140604174737',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Billy Goats Bluff'],
        'Metamorph':['Hurlcules', 'Hurlabaloo'],
        'morphLevel' : 35,
        'maxLevel': 50
    },
    'hurlcules' : {
        'Name': 'Hurlcules',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/3/36/019_hurlcules.png/revision/latest?cb=20140604174738',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['None/Metamorph'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'hurlabaloo' : {
        'Name': 'Hurlabaloo',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/2/2e/020_hurlabaloo.png/revision/latest?cb=20140604174738',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['None/Metamorph'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'ruff' : {
        'Name': 'Ruff',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/6/60/021_ruff.png/revision/latest?cb=20140604183328',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Rolling Hills'],
        'Metamorph':['Ruffian'],
        'morphLevel' : 16,
        'maxLevel': 24
    },
    'ruffian' : {
        'Name': 'Ruffian',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/4/49/022_ruffian.png/revision/latest?cb=20140604183329',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Old Smoky'],
        'Metamorph':['Gruffian', 'Scruffian'],
        'morphLevel' : 33,
        'maxLevel': 45
    },
    'gruffian' : {
        'Name': 'Gruffian',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/0/0f/023_gruffian.png/revision/latest?cb=20140604183329',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['None/Metamorph'],
        'Metamorph':['None'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'scruffian' : {
        'Name': 'Scruffian',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/c/c6/024_scruffian.png/revision/latest?cb=20140604183330',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Nazcaä'],
        'Metamorph':['None'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'rhinosaur' : {
        'Name': 'Rhinosaur',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/3/38/025_rhinosaur.png/revision/latest?cb=20140604183330',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Rolling Hills'],
        'Metamorph':['Rhinosnore'],
        'morphLevel' : 15,
        'maxLevel': 28
    },
    'rhinosnore' : {
        'Name': 'Rhinosnore',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/1/1f/026_rhinosnore.png/revision/latest?cb=20140604183331',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['The Bayous-W'],
        'Metamorph':['Rhinobore', 'Rhinosaw'],
        'morphLevel' : 34,
        'maxLevel': 48
    },
    'rhinobore' : {
        'Name': 'Rhinobore',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/2/2b/027_rhinobore.png/revision/latest?cb=20140604183331',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Rolling Hills-W'],
        'Metamorph':['None'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'rhinosaw' : {
        'Name': 'rhinosaw',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/4/46/028_rhinosaw.png/revision/latest?cb=20140604183332',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Miasma Marshes'],
        'Metamorph':['None'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'jabber' : {
        'Name': 'Jabber',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/d/d1/029_jabber.png/revision/latest?cb=20140604183332',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Deep Dark Woods'],
        'Metamorph':['Stabber'],
        'morphLevel' : 14,
        'maxLevel': 24
    },
    'stabber' : {
        'Name': 'Stabber',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/7/77/030_stabber.png/revision/latest?cb=20140604183333',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Teeheeti'],
        'Metamorph':['Stabberwocky', 'Jabberguppy'],
        'morphLevel' : 30,
        'maxLevel': 48
    },
    'stabberwocky' : {
        'Name': 'Stabberwocky',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/9/99/031_stabberwocky.png/revision/latest?cb=20140604183333',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Rolling Hills-W'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'jabberguppy' : {
        'Name': 'Jabberguppy',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/c/cd/032_jabberguppy.png/revision/latest?cb=20140604183334',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Winter Wonderlands-N'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'baatender' : {
        'Name': 'Baatender',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/b/b1/033_baatender.png/revision/latest?cb=20140604183334',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Rolling Hills'],
        'Metamorph':['Baabarian'],
        'morphLevel' : 13,
        'maxLevel': 22
    },
    'baabarian' : {
        'Name': 'Baabarian',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/c/c9/034_baabarian.png/revision/latest?cb=20140604183335',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Friday Island'],
        'Metamorph':['Baabie', 'Baarndancer'],
        'morphLevel' : 32,
        'maxLevel': 44
    },
    'baabie' : {
        'Name': 'Baabie',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/3/30/035_baabie.png/revision/latest?cb=20140604183335',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Rolling Hills-W'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'baarndancer' : {
        'Name': 'Baarndancer',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/8/81/036_baarndancer.png/revision/latest?cb=20140604183339',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Nazcaä'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'sore boar' : {
        'Name': 'Sore Boar',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/5/51/037_sore_boar.png/revision/latest?cb=20140604183339',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Golden Grove'],
        'Metamorph':['Crashing Boar'],
        'morphLevel' : 15,
        'maxLevel': 30
    },
    'crashing boar' : {
        'Name': 'Crashing Boar',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/0/0e/038_crashing_boar.png/revision/latest?cb=20140604183339',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['The Pig Iron Plain'],
        'Metamorph':['Hyperboar', 'Full Boar'],
        'morphLevel' : 33,
        'maxLevel': 48
    },
    'hyperboar' : {
        'Name': 'Hyperboar',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/8/8a/039_hyperboar.png/revision/latest?cb=20140604183340',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Billy Goats Bluff'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'full boar' : {
        'Name': 'Full Boar',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/1/1a/040_full_boar.png/revision/latest?cb=20140604183340',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Nazcaä'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'inphant' : {
        'Name': 'Inphant',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/d/d1/041_inphant.png/revision/latest?cb=20140604185301',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Rolling Hills-E'],
        'Metamorph':['Psychophant'],
        'morphLevel' : 17,
        'maxLevel': 28
    },
    'pyschophant' : {
        'Name': 'Psychophant',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/d/d1/041_inphant.png/revision/latest?cb=20140604185301',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Rolling Hills-E'],
        'Metamorph':['Psychophant'],
        'morphLevel' : 17,
        'maxLevel': 28
    },
    'unknown' : {
        'Name': 'unknown',
        'FavoriteFoods' : 'unknown',
        'Location': ['Smoky Foothills'],
        'Metamorph':'unknown',
    },
}

app.get('/', (req,res)=> {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:creatureName', (req, res)=>  {
    const name = req.params.creatureName.toLowerCase()
    if(familiar[name]){
        res.json(familiar[name])
    } else {
        res.json(familiar['unknown'])
    }
    
    
})


app.listen(process.env.PORT || PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})