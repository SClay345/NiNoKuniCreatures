
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const familiar = {
    'little bighorn' : {
        'Name': 'Little Bighorn',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/c/c8/001_little_bighorn.png',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Skull Mountain'],
        'Metamorph':['Bighorn'],
        'morphLevel' : 14,
        'maxLevel': 25
    }, 
    'bighorn' : {
        'Name': 'Bighorn',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/8/88/002_bighorn.png',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Smoky Foothills'],
        'Metamorph':['Batterhorn', 'Splatterhorn'],
        'morphLevel' : 32,
        'maxLevel': 45
    },
    'batterhorn' : {
        'Name': 'Batterhorn',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/1/1b/003_batterhorn.png',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Nazcaä'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'splatterhorn' : {
        'Name': 'Splatterhorn',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/7/7e/004_splatterhorn.png',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Ivory Tower'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'purrloiner' : {
        'Name': 'Purrloiner',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/d/d8/005_purrloiner.png',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['The Bayous-W'],
        'Metamorph':['Cutpurrse'],
        'morphLevel' : 21,
        'maxLevel': 32
    },
    'cutpurrse' : {
        'Name': 'Cutpurrse',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/c/c3/006_cutpurrse.png',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Skull Mountain'],
        'Metamorph':['Puss in Bouts', 'Puss in Boats'],
        'morphLevel' : 33,
        'maxLevel': 55
    },
    'puss in bouts' : {
        'Name': 'Puss in Bouts',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/d/d4/008_puss_in_bouts.png',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Billy Goats Bluff'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'puss in boats' : {
        'Name': 'Puss in Boats',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/7/79/007_puss_in_boats.png',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['The Sea: Southwest of the Spring Realm'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'hog-goblin' : {
        'Name': 'Hog-Goblin',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/f/f5/009_hog-goblin.png',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['The Bayous-W'],
        'Metamorph':['Gobfather'],
        'morphLevel' : 17,
        'maxLevel': 32
    },
    'gobfather' : {
        'Name': 'Gobfather',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/9/90/010_gobfather.png',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Skull Mountain'],
        'Metamorph':['Gobspeed', 'Gobforsaken'],
        'morphLevel' : 34,
        'maxLevel': 53
    },
    'gobspeed' : {
        'Name': 'Gobspeed',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/5/54/011_gobspeed.png',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Billy Goats Bluff'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'gobforsaken' : {
        'Name': 'Gobforsaken',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/a/a2/012_gobforsaken.png',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Nevermore'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'mite' : {
        'Name': 'Mite',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/7/74/013_mite.png',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Ugly Duckling Isle'],
        'Metamorph':['Mighty Mite'],
        'morphLevel' : 12,
        'maxLevel': 50
    },
    'mighty mite' : {
        'Name': 'Mighty Mite',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/c/cd/014_mighty_mite.png',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Billy Goats Bluff'],
        'Metamorph':['Dynamite', 'Mermite'],
        'morphLevel' : 33,
        'maxLevel': 54
    },
    'dynamite' : {
        'Name': 'Dynamite',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/8/81/015_dynamite.png',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['None/Metamorph'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'mermite' : {
        'Name': 'Mermite',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/2/22/016_mermite.png',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Ivory Tower'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'hurly' : {
        'Name': 'Hurly',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/f/fc/017_hurly.png',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['No Longer Mine'],
        'Metamorph':['Burly Hurly'],
        'morphLevel' : 22,
        'maxLevel': 30
    },
    'burly hurly' : {
        'Name': 'Burly Hurly',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/c/c2/018_burly_hurly.png',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['Billy Goats Bluff'],
        'Metamorph':['Hurlcules', 'Hurlabaloo'],
        'morphLevel' : 35,
        'maxLevel': 50
    },
    'hurlcules' : {
        'Name': 'Hurlcules',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/3/36/019_hurlcules.png',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['None/Metamorph'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'hurlabaloo' : {
        'Name': 'Hurlabaloo',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/2/2e/020_hurlabaloo.png',
        'FavoriteFoods' : 'Chocolate',
        'Location': ['None/Metamorph'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'ruff' : {
        'Name': 'Ruff',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/6/60/021_ruff.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Rolling Hills'],
        'Metamorph':['Ruffian'],
        'morphLevel' : 16,
        'maxLevel': 24
    },
    'ruffian' : {
        'Name': 'Ruffian',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/4/49/022_ruffian.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Old Smoky'],
        'Metamorph':['Gruffian', 'Scruffian'],
        'morphLevel' : 33,
        'maxLevel': 45
    },
    'gruffian' : {
        'Name': 'Gruffian',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/0/0f/023_gruffian.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['None/Metamorph'],
        'Metamorph':['None'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'scruffian' : {
        'Name': 'Scruffian',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/c/c6/024_scruffian.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Nazcaä'],
        'Metamorph':['None'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'rhinosaur' : {
        'Name': 'Rhinosaur',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/3/38/025_rhinosaur.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Rolling Hills'],
        'Metamorph':['Rhinosnore'],
        'morphLevel' : 15,
        'maxLevel': 28
    },
    'rhinosnore' : {
        'Name': 'Rhinosnore',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/1/1f/026_rhinosnore.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['The Bayous-W'],
        'Metamorph':['Rhinobore', 'Rhinosaw'],
        'morphLevel' : 34,
        'maxLevel': 48
    },
    'rhinobore' : {
        'Name': 'Rhinobore',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/2/2b/027_rhinobore.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Rolling Hills-W'],
        'Metamorph':['None'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'rhinosaw' : {
        'Name': 'rhinosaw',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/4/46/028_rhinosaw.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Miasma Marshes'],
        'Metamorph':['None'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'jabber' : {
        'Name': 'Jabber',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/d/d1/029_jabber.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Deep Dark Woods'],
        'Metamorph':['Stabber'],
        'morphLevel' : 14,
        'maxLevel': 24
    },
    'stabber' : {
        'Name': 'Stabber',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/7/77/030_stabber.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Teeheeti'],
        'Metamorph':['Stabberwocky', 'Jabberguppy'],
        'morphLevel' : 30,
        'maxLevel': 48
    },
    'stabberwocky' : {
        'Name': 'Stabberwocky',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/9/99/031_stabberwocky.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Rolling Hills-W'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'jabberguppy' : {
        'Name': 'Jabberguppy',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/c/cd/032_jabberguppy.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Winter Wonderlands-N'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'baatender' : {
        'Name': 'Baatender',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/b/b1/033_baatender.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Rolling Hills'],
        'Metamorph':['Baabarian'],
        'morphLevel' : 13,
        'maxLevel': 22
    },
    'baabarian' : {
        'Name': 'Baabarian',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/c/c9/034_baabarian.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Friday Island'],
        'Metamorph':['Baabie', 'Baarndancer'],
        'morphLevel' : 32,
        'maxLevel': 44
    },
    'baabie' : {
        'Name': 'Baabie',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/3/30/035_baabie.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Rolling Hills-W'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'baarndancer' : {
        'Name': 'Baarndancer',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/8/81/036_baarndancer.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Nazcaä'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'sore boar' : {
        'Name': 'Sore Boar',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/5/51/037_sore_boar.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Golden Grove'],
        'Metamorph':['Crashing Boar'],
        'morphLevel' : 15,
        'maxLevel': 30
    },
    'crashing boar' : {
        'Name': 'Crashing Boar',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/0/0e/038_crashing_boar.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['The Pig Iron Plain'],
        'Metamorph':['Hyperboar', 'Full Boar'],
        'morphLevel' : 33,
        'maxLevel': 48
    },
    'hyperboar' : {
        'Name': 'Hyperboar',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/8/8a/039_hyperboar.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Billy Goats Bluff'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'full boar' : {
        'Name': 'Full Boar',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/1/1a/040_full_boar.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Nazcaä'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'inphant' : {
        'Name': 'Inphant',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/d/d1/041_inphant.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Rolling Hills-E'],
        'Metamorph':['Psychophant'],
        'morphLevel' : 17,
        'maxLevel': 28
    },
    'pyschophant' : {
        'Name': 'Psychophant',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/d/d1/041_inphant.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Rolling Hills-E'],
        'Metamorph':['Triumphant', 'Hierophant'],
        'morphLevel' : 32,
        'maxLevel': 55
    },
    'triumphant' : {
        'Name': 'Triumphant',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/6/6c/043_triumphant.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Giants Tabletop'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'hierophant' : {
        'Name': 'Hierophant',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/9/98/044_hierophant.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Nazcaä'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'clubber cub' : {
        'Name': 'Clubber Cub',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/4/48/045_clubber_cub.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Golden Grove'],
        'Metamorph':['Lubber Cub'],
        'morphLevel' : 14,
        'maxLevel': 22
    },
    'lubber cub' : {
        'Name': 'Lubber Cub',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/8/86/046_lubber_cub.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Shipwreck Shore'],
        'Metamorph':['Adamantiger', 'Elgantiger'],
        'morphLevel' : 28,
        'maxLevel': 44
    },
    'adamantiger' : {
        'Name': 'Adamantiger',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/0/0d/047_adamantiger.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Jack Frosts Playground'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'elgantiger' : {
        'Name': 'Elgantiger',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/1/1f/048_elegantiger.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Ivory Tower'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'thumbelemur' : {
        'Name': 'Thumbelemur',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/d/df/049_thumbelemur.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Swan Island'],
        'Metamorph':['Dumbelemur'],
        'morphLevel' : 16,
        'maxLevel': 32
    },
    'dumbelemur' : {
        'Name': 'Dumbelemur',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/2/25/050_dumbelemer.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['The Genies Steps'],
        'Metamorph':['Aye-Aye Sir', 'Aye-Aye Catcher'],
        'morphLevel' : 33,
        'maxLevel': 46
    },
    'aye-aye sir' : {
        'Name': 'Aye-Aye Sir',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/4/41/051_aye-aye_sir.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['None/Metamorph Only'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'aye-aye catcher' : {
        'Name': 'Aye-Aye Catcher',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/7/70/052_aye-aye_catcher.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Ivory Tower'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'sasquish' : {
        'Name': 'Sasquish',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/5/50/053_sasquish.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Glittering Grotto'],
        'Metamorph':['Sasquash'],
        'morphLevel' : 19,
        'maxLevel': 38
    },
    'sasquash' : {
        'Name': 'Sasquash',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/0/08/054_sasquash.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Glittering Grotto'],
        'Metamorph':['Papa Sasquash', 'Mama Sasquash'],
        'morphLevel' : 33,
        'maxLevel': 65
    },
    'papa sasquash' : {
        'Name': 'Papa Sasquash',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/9/9c/055_papa_sasquash.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Glittering Grotto'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'mama sasquash' : {
        'Name': 'Mama Sasquash',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/d/d9/056_mama_sasquash.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Glittering Grotto'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'taddlywink' : {
        'Name': 'Taddlywink',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/4/4e/061_taddlywinky.png',
        'FavoriteFoods' : 'Pie',
        'Location': ['Ding Dong Well'],
        'Metamorph':['Tadolescent'],
        'morphLevel' : 13,
        'maxLevel': 36
    },
    'tadolescent' : {
        'Name': 'Tadolescent',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/f/fe/062_tadolescent.png',
        'FavoriteFoods' : 'Pie',
        'Location': ['The Sea: Southeast of the Summerlands'],
        'Metamorph':['Tadabout', 'Tadorable'],
        'morphLevel' : 30,
        'maxLevel': 55
    },
    'tadabout' : {
        'Name': 'Tadabout',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/f/fe/063_tadabout.png',
        'FavoriteFoods' : 'Pie',
        'Location': ['Sleighbell Isles'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'tadorable' : {
        'Name': 'Tadorable',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/f/f2/064_tadorable.png',
        'FavoriteFoods' : 'Pie',
        'Location': ['None/Metamorph Only'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'splisher' : {
        'Name': 'splisher',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/7/74/065_splisher.png',
        'FavoriteFoods' : 'Pie',
        'Location': ['The Sea: South of the Summerlands'],
        'Metamorph':['Splasher'],
        'morphLevel' : 16,
        'maxLevel': 40
    },
    'splasher' : {
        'Name': 'splasher',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/8/85/066_splasher.png',
        'FavoriteFoods' : 'Pie',
        'Location': ['The Sea: North of Autumnia'],
        'Metamorph':['Snapper', 'Snipper'],
        'morphLevel' : 30,
        'maxLevel': 65
    },
    'snapper' : {
        'Name': 'Snapper',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/2/2f/067_snapper.png',
        'FavoriteFoods' : 'Pie',
        'Location': ['The Sea: North of Winter Isles'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'snipper' : {
        'Name': 'Snipper',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/d/db/068_snipper.png',
        'FavoriteFoods' : 'Pie',
        'Location': ['The Sea: The Spring Realm'],
        'Metamorph':['none'],
        'morphLevel' : 0,
        'maxLevel': 99
    },
    'hooray' : {
        'Name': 'Hooray',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/f/f8/069_hooray.png',
        'FavoriteFoods' : 'Pie',
        'Location': ['The Sea: South of the Summerlands'],
        'Metamorph':['Hip-Hooray'],
        'morphLevel': 17,
        'maxLevel': 35
    },
    'hip-hooray' : {
        'Name': 'Hip-Hooray',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/4/47/070_hip-hooray.png',
        'FavoriteFoods' : 'Pie',
        'Location': ['The Sea: North of the Summerlands'],
        'Metamorph':['Grimray' , 'Springray'],
        'morphLevel': 29,
        'maxLevel': 58
    },
    'grimray' : {
        'Name': 'Grimray',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/2/2b/071_grimray.png',
        'FavoriteFoods' : 'Pie',
        'Location': ['The Sea: Northwest of the Summerlands'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'springray' : {
        'Name': 'Springray',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/5/5f/072_springray.png',
        'FavoriteFoods' : 'Pie',
        'Location': ['The Sea: Southwest of the Spring Realm'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'sparkee' : {
        'Name': 'Sparkee',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/3/35/073_sparkee.png',
        'FavoriteFoods' : 'Pie',
        'Location': ['The Sea: South of the Summerlands'],
        'Metamorph':['Wattee'],
        'morphLevel': 20,
        'maxLevel': 32
    },
    'wattee' : {
        'Name': 'Wattee',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/d/df/074_wattee.png',
        'FavoriteFoods' : 'Pie',
        'Location': ['The Sea: North of Winter Isles'],
        'Metamorph':['Acee', 'Deecee'],
        'morphLevel': 32,
        'maxLevel': 64
    },
    'acee' : {
        'Name': 'Acee',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/2/2c/075_acee.png',
        'FavoriteFoods' : 'Pie',
        'Location': ['The Sea: Northwest of the Summerlands'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'deecee' : {
        'Name': 'Deecee',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/c/c1/076_deecee.png',
        'FavoriteFoods' : 'Pie',
        'Location': ['The Sea: The Spring Realm'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'minor byrde' : {
        'Name': 'Minor Byrde',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/e/e1/077_minor_byrde.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Rolling Hills'],
        'Metamorph':['Major Byrde'],
        'morphLevel': 12,
        'maxLevel': 25
    },
    'major byrde' : {
        'Name': 'Major Byrde',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/a/ae/078_major_byrde.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Skull Mountain'],
        'Metamorph':['Firebyrde', 'Thunderbryde'],
        'morphLevel': 32,
        'maxLevel': 48
    },
    'firebyrde' : {
        'Name': 'Firebyrde',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/a/a9/079_firebyrde.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['The Giants Tabletops'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'thunderbyrde' : {
        'Name': 'Thunderbyrde',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/e/eb/080_thunderbyrde.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Billy Goats Bluff'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'crowhawk' : {
        'Name': 'Crowhawk',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/2/2b/081_crowhawk.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Golden Grove'],
        'Metamorph':['Mohawk'],
        'morphLevel': 11,
        'maxLevel': 32
    },
    'mohawk' : {
        'Name': 'Mohawk',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/4/47/082_mohawk.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Teeheeti'],
        'Metamorph':['Prohawk', 'Snowhawk'],
        'morphLevel': 28,
        'maxLevel': 52
    },
    'prohawk' : {
        'Name': 'Prohawk',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/0/02/083_prohawk.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Billy Goats Bluff'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'snowhawk' : {
        'Name': 'Snowhawk',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/0/01/084_snowhawk.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['The Sea: Southwest of the Spring Realm'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'whambat' : {
        'Name': 'Whambat',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/3/33/085_whambat.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Castaway Coast'],
        'Metamorph':['Wishing Whambat'],
        'morphLevel': 15,
        'maxLevel': 22
    },
    'wishing whambat' : {
        'Name': 'Wishing Whambat',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/5/53/086_wishing_whambat.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Teeheeti'],
        'Metamorph':['Whampire Bat', 'Captain Whamtastic'],
        'morphLevel': 29,
        'maxLevel': 44
    },
    'whampire bat' : {
        'Name': 'Whampire Bat',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/8/82/087_whampire_bat.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Miasma Marshes'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'captain whamtastic' : {
        'Name': 'Captain Whamtastic',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/0/01/088_captain_whamtastic.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['none'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'sleepeafowl' : {
        'Name': 'Sleepeafowl',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/9/91/089_sleepeafowl.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Rolling Hills'],
        'Metamorph':['Hippeafowl'],
        'morphLevel': 15,
        'maxLevel': 50
    },
    'hippeafowl' : {
        'Name': 'Hippeafowl',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/9/9e/090_hippeafowl.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Robinson Island'],
        'Metamorph':['Grumpeafowl', 'Wimpeafowl'],
        'morphLevel': 28,
        'maxLevel': 75
    },
    'grumpeafowl' : {
        'Name': 'Grumpeafowl',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/3/3f/091_grumpeafowl.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Shipwreck Shore'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'wimpeafowl' : {
        'Name': 'Wimpeafowl',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/4/40/092_wimpeafowl.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Jack Frosts Playground'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'drongo' : {
        'Name': 'Drongo',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/e/eb/093_drongo.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Swan Island'],
        'Metamorph':['Strongo'],
        'morphLevel': 14,
        'maxLevel': 29
    },
    'strongo' : {
        'Name': 'Strongo',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/4/4a/094_strongo.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['The Sea: North of Winter Isles'],
        'Metamorph':['Fluorongo', 'Electrongo'],
        'morphLevel': 34,
        'maxLevel': 52
    },
    'fluorongo' : {
        'Name': 'Fluorongo',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/d/dd/095_fluorongo.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['none'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'electrongo' : {
        'Name': 'Electrongo',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/6/6e/096_electrongo.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['none'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'fightingale' : {
        'Name': 'Fightingale',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/c/c6/097_fightingale.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Nazcaä'],
        'Metamorph':['Knightingale'],
        'morphLevel': 17,
        'maxLevel': 28
    },
    'knightingale ' : {
        'Name': 'Knightingale',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/1/11/098_knightingale.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['None'],
        'Metamorph':['Paladin Partridge', 'Bushido Bantam'],
        'morphLevel': 29,
        'maxLevel': 48
    },
    'paladin partridge' : {
        'Name': 'Paladin Partridge',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/7/7a/099_paladin_partridge.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Ivory Tower'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'bushido bantam' : {
        'Name': 'Bushido Bantam',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/e/ed/100_bushido_bantam.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['none'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
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