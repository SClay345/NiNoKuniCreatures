
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
    'tu-whit' : {
        'Name': 'Tu-Whit',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/5/5f/101_tu-whit.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['The Genies Steps'],
        'Metamorph':['Tu-Whoo'],
        'morphLevel': 14,
        'maxLevel': 42
    },
    'tu-woo' : {
        'Name': 'Tu-Whoo',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/1/1a/102_tu-whoo.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Friday Island'],
        'Metamorph':['Sharp-Hooter', 'Hooting-Star'],
        'morphLevel': 34,
        'maxLevel': 68
    },
    'sharp-hooter' : {
        'Name': 'Bushido Bantam',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/9/97/103_sharp-hooter.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['Ivory Tower'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'hooting-star' : {
        'Name': 'Hooting-Star',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/e/e6/104_hotting-star.png',
        'FavoriteFoods' : 'Ice Cream',
        'Location': ['none'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'floret' : {
        'Name': 'Floret',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/5/57/105_floret.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['Shimmering Sands-W'],
        'Metamorph':['Flummox Floret'],
        'morphLevel': 16,
        'maxLevel': 35
    },
    'flummox floret' : {
        'Name': 'Flummox Floret',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/1/1e/106_flummox_floret.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['Shipwreck Shore'],
        'Metamorph':['Horrid Floret', 'Florid Floret'],
        'morphLevel': 35,
        'maxLevel': 55
    },
    'horrid floret' : {
        'Name': 'Horrid Floret',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/a/a0/107_horrid_floret.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['Russet Island'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'florid floret' : {
        'Name': 'Florid Floret',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/f/f1/108_florid_floret.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['Nazcaä'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'rabbot' : {
        'Name': 'Rabbot',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/e/e5/109_rabbot.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['Ding Dong Well'],
        'Metamorph':['Jackrabbot '],
        'morphLevel': 18,
        'maxLevel': 32
    },
    'jackrabbot' : {
        'Name': 'Jackrabbot',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/3/34/110_jackrabbot.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['The Pig Iron Plain'],
        'Metamorph':['Whackrabbot', 'Hackrabbot'],
        'morphLevel': 34,
        'maxLevel': 52
    },
    'whackrabbot' : {
        'Name': 'Whackrabbot',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/6/64/111_whackrabbot.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['Shipwreck Shore'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'hackrabbot' : {
        'Name': 'Hackrabbot',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/d/da/112_hackrabbot.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['Billy Goats Bluff'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'tyke' : {
        'Name': 'Tyke',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/9/9a/113_tyke.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['Golden Grove'],
        'Metamorph':['Spike Tyke'],
        'morphLevel': 16,
        'maxLevel': 42
    },
    'spike tyke' : {
        'Name': 'Spike Tyke',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/6/69/114_spike_tyke.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['Teeheeti'],
        'Metamorph':['Psych Tyke', 'Pike Tyke'],
        'morphLevel': 33,
        'maxLevel': 62
    },
    'psych tyke' : {
        'Name': 'Psych Tyke',
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/b/b8/115_psych_tyke.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['Rolling Hills-W'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'pike tyke' : {
        'Name': 'Pike Tyke' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/7/7c/116_pike_tyke.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['Spindle'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'turbandit' : {
        'Name': 'Turbandit' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/7/7d/117_turbandit.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['Shimmering Sands-W'],
        'Metamorph':['Turburn'],
        'morphLevel': 12,
        'maxLevel': 42
    },
    'turburn' : {
        'Name': 'Turburn' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/1/15/118_turburn.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['The Genies Steps'],
        'Metamorph':['Turban Myth', 'Turban Legend'],
        'morphLevel': 32,
        'maxLevel': 68
    },
    'turban myth' : {
        'Name': 'Turban Myth' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/5/50/119_turban_myth.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['Shipwreck Shore'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'turban legend' : {
        'Name': 'Turban Legend' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/d/df/120_turban_legend.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['Glittering Grotto'],
        'Metamorph':['none'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'idler' : {
        'Name': 'Idler' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/a/a0/121_idler.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['none'],
        'Metamorph':['Wild Idler'],
        'morphLevel': 18,
        'maxLevel': 34
    },
    'wild idler' : {
        'Name': 'Wild Idler' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/6/60/122_wild_idler.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['none'],
        'Metamorph':['All-Seeing Idler', 'Evil Idler'],
        'morphLevel': 33,
        'maxLevel': 66
    },
    'all-seeing idler' : {
        'Name': 'All-Seeing Idler' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/4/49/123_all-seeing_idler.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['none'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'evil idler' : {
        'Name': 'Evil Idler' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/4/4b/124_evil_idler.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['Old Smoky'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'small fry' : {
        'Name': 'Small Fry' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/0/09/125_small_fry.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['Old Smoky'],
        'Metamorph':['Deep Fry'],
        'morphLevel': 14,
        'maxLevel': 28
    },
    'deep fry' : {
        'Name': 'Deep Fry' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/5/52/126_deep_fry.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['Old Smoky'],
        'Metamorph':['Firefry', 'Flash Fry'],
        'morphLevel': 30,
        'maxLevel': 52
    },
    'firefry' : {
        'Name': 'Firefry' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/0/09/127_firefry.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['Road to Ruin'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'flash fry' : {
        'Name': 'Flash Fry' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/5/5b/128_flash_fry.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['None'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'dinkey' : {
        'Name': 'Dinkey' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/9/9a/129_dinkey.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['The Barrens'],
        'Metamorph':['Turnkey'],
        'morphLevel': 17,
        'maxLevel': 32
    },
    'turnkey' : {
        'Name': 'Turnkey' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/2/26/130_turnkey.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['Nevermore'],
        'Metamorph':['Master Key', 'Don Key'],
        'morphLevel':27,
        'maxLevel': 48
    },
    'master key' : {
        'Name': 'Master Key' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/d/d2/131_master_key.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['None'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'don key' : {
        'Name': 'Don Key' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/3/3b/132_don_key.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['None'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'spitoo' : {
        'Name': 'Spitoo' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/a/a3/133_spitoo.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['Deep Dark Wood'],
        'Metamorph':['Spitooligan'],
        'morphLevel': 19,
        'maxLevel': 44
    },
    'spitooligan' : {
        'Name': 'Spitooligan' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/8/83/134_spitooligan.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['Skull Mountain'],
        'Metamorph':['Lickety-Spitoo', 'Sniper Spitoo'],
        'morphLevel': 37,
        'maxLevel': 59
    },
    'lickety-spitoo' : {
        'Name': 'Lickety-Spitoo' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/8/8a/135_lickety-spitoo.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['Spindle'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'sniper spitoo' : {
        'Name': 'Sniper Spitoo' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/7/76/136_sniper_spitoo.png',
        'FavoriteFoods' : 'Pies',
        'Location': ['Giants Tabletops'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'monolith' : {
        'Name': 'Monolith' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/9/91/137_monolith.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['The Bayous-W'],
        'Metamorph':['Megalith'],
        'morphLevel': 10,
        'maxLevel': 26
    },
    'megalith' : {
        'Name': 'Megalith' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/2/2a/138_megalith.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['Vault of Tears'],
        'Metamorph':['Paleolith' , 'Neolith'],
        'morphLevel': 20,
        'maxLevel': 42
    },
    'paleolith' : {
        'Name': 'Paleolith' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/8/89/139_paleolith.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['Nazcaä'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'neolith' : {
        'Name': 'Neolith' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/3/3f/140_neolith.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['Ivory Tower'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'sprog cog' : {
        'Name': 'Sprog Cog' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/8/8d/141_sprog_cog.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['Teeheeti'],
        'Metamorph':['Hot Cog'],
        'morphLevel': 15,
        'maxLevel': 22
    },
    'hot cog' : {
        'Name': 'Hot Cog' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/6/6d/142_hot_cog.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['The Barrens'],
        'Metamorph':['Supercogductor', 'Cogdenser'],
        'morphLevel': 28,
        'maxLevel': 40
    },
    'supercogductor' : {
        'Name': 'Supercogductor' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/f/ff/143_supercogductor.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['Nazcaä'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'cogdenser' : {
        'Name': 'Cogdenser' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/3/3b/144_cogdenser.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['Jack Frosts Playground'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'tin-man' : {
        'Name': 'Tin-Man' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/d/d8/145_tin-man.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['The Pig Iron Plain'],
        'Metamorph':['Iron-Man'],
        'morphLevel': 15,
        'maxLevel': 22
    },
    'iron-man' : {
        'Name': 'Tin-Man' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/0/0f/146_iron-man.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['No Longer Mine'],
        'Metamorph':['Steam-Man', 'Beam-Man'],
        'morphLevel': 25,
        'maxLevel': 38
    },
    'steam-man' : {
        'Name': 'Steam-Man' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/1/10/147_steam-man.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['Nevermore'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'beam-man' : {
        'Name': 'Beam-Man' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/3/32/148_beam-man.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['Ivory Tower'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'clinketyclank' : {
        'Name': 'Clinketyclank' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/f/f8/149_clinketyclank.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['The Pig Iron Plain'],
        'Metamorph':['Clinketyclank Mk. 2'],
        'morphLevel': 12,
        'maxLevel': 25
    },
    'clinketyclank mk. 2' : {
        'Name': 'Clinketyclank Mk. 2' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/4/40/150_clinketyclank_mk._2.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['none'],
        'Metamorph':['Clinketyclank LX', 'Clinketyclank DX'],
        'morphLevel': 24,
        'maxLevel': 48
    },
    'clinketyclank lx' : {
        'Name': 'Clinketyclank LX' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/e/e6/151_clinketyclank_lx.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['Jack Frosts Playground'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'clinketyclank dx' : {
        'Name': 'Clinketyclank DX' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/8/89/152_clinketyclank_dx.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['none'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'fuddy-daddy' : {
        'Name': 'Fuddy-Daddy' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/4/42/153_fuddy-daddy.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['Nazcaä'],
        'Metamorph':['Big Daddy'],
        'morphLevel': 15,
        'maxLevel': 18
    },
    'big daddy' : {
        'Name': 'Big Daddy' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/d/d9/154_big_daddy.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['none'],
        'Metamorph':['Grand-Daddy', 'Baddy-Daddy'],
        'morphLevel': 26,
        'maxLevel': 50
    },
    'grand-daddy' : {
        'Name': 'Grand-Daddy' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/1/1c/155_grand-daddy.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['none'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'baddy-daddy' : {
        'Name': 'Baddy-Daddy' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/5/5a/156_baddy-daddy.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['none'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'lumberwood' : {
        'Name': 'Lumberwood' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/3/38/157_lumberwood.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['No Longer Mine'],
        'Metamorph':['Limberwood'],
        'morphLevel': 8,
        'maxLevel': 10
    },
    'limberwood' : {
        'Name': 'Limberwood' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/d/de/158_limberwood.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['none'],
        'Metamorph':['Umberwood', 'Wildwood'],
        'morphLevel': 12,
        'maxLevel': 18
    },
    'umberwood' : {
        'Name': 'Umberwood' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/8/89/159_umberwood.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['none'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'wildwood' : {
        'Name': 'Wildwood' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/a/a9/160_wildwood.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['none'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'bubbud' : {
        'Name': 'Bubbud' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/2/2d/161_bubbud.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['Ding Dong Well'],
        'Metamorph':['Sponge Bubbud'],
        'morphLevel': 18,
        'maxLevel': 48
    },
    'sponge bubbud' : {
        'Name': 'Sponge Bubbud' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/2/26/162_sponge_bubbud.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['The Pig Iron Plain'],
        'Metamorph':['Lotus Bubbud', 'Tropic Bubbud'],
        'morphLevel': 31,
        'maxLevel': 65
    },
    'lotus bubbud' : {
        'Name': 'Lotus Bubbud' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/0/0a/163_lotus_bubbud.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['Winter Wonderlands-N'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'tropical bubbud' : {
        'Name': 'Tropical Bubbud' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/b/b9/164_tropical_bubbud.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['Ivory Tower'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },

    'green buncher' : {
        'Name': 'Green Buncher' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/e/e5/165_green_buncher.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['Shimmering Sands-W'],
        'Metamorph':['Yellow Buncher'],
        'morphLevel': 14,
        'maxLevel': 20
    },
    'yellow buncher' : {
        'Name': 'Yellow Buncher' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/9/93/166_yellow_buncher.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['Shipwreck Shore'],
        'Metamorph':['Underripe Buncher', 'Overripe Buncher'],
        'morphLevel': 25,
        'maxLevel': 38
    },
    'underripe buncher' : {
        'Name': 'Underripe Buncher' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/2/2e/167_underripe_buncher.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['The Genies Steps-N'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'overripe buncher' : {
        'Name': 'Overripe Buncher' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/8/8d/168_overripe_buncher.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['none'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },

    'napcap' : {
        'Name': 'Napcap' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/b/b6/169_napcap.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['Golden Grove'],
        'Metamorph':['Duncecap'],
        'morphLevel': 15,
        'maxLevel': 55
    },
    'duncecap' : {
        'Name': 'Duncecap' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/4/4c/170_duncecap.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['No Longer Mine'],
        'Metamorph':['Madcap', 'Nightcap'],
        'morphLevel': 25,
        'maxLevel': 75
    },
    'madcap' : {
        'Name': 'Madcap' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/7/79/171_madcap.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['Billy Goats Bluff'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'nightcap' : {
        'Name': 'Nightcap' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/5/5a/172_nightcap.png',
        'FavoriteFoods' : 'Flans',
        'Location': ['Nazcaä'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    
    'worker bumbler' : {
        'Name': 'Worker Bumbler' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/9/97/173_worker_bumbler.png',
        'FavoriteFoods' : 'Sundaes',
        'Location': ['Golden Grove'],
        'Metamorph':['Drone Bumbler'],
        'morphLevel': 11,
        'maxLevel': 46
    },
    'drone bumbler' : {
        'Name': 'Drone Bumbler' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/7/70/174_drone_bumbler.png',
        'FavoriteFoods' : 'Sundaes',
        'Location': ['The Genies Steps'],
        'Metamorph':['Soldier Bumbler', 'Queen Bumbler'],
        'morphLevel': 31,
        'maxLevel': 68
    },
    'soldier bumbler' : {
        'Name': 'Soldier Bumbler' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/b/b7/175_soldier_bumbler.png',
        'FavoriteFoods' : 'Sundaes',
        'Location': ['Skull Mountain'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'queen bumbler' : {
        'Name': 'Queen Bumbler' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/7/78/176_queen_bumbler.png',
        'FavoriteFoods' : 'Sundaes',
        'Location': ['None'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },

    'whippersnapper' : {
        'Name': 'Whippersnapper' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/7/75/177_whippersnapper.png',
        'FavoriteFoods' : 'Sundaes',
        'Location': ['Deep Dark Wood'],
        'Metamorph':['Trapper Snapper'],
        'morphLevel': 18,
        'maxLevel': 32
    },
    'trapper snapper' : {
        'Name': 'Trapper Snapper' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/0/05/178_trapper_snapper.png',
        'FavoriteFoods' : 'Sundaes',
        'Location': ['The Pig Iron Plain'],
        'Metamorph':['Snaptrap', 'Claptrap'],
        'morphLevel': 33,
        'maxLevel': 55
    },
    'snaptrap' : {
        'Name': 'Snaptrap' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/c/c8/179_snaptrap.png',
        'FavoriteFoods' : 'Sundaes',
        'Location': ['Russet Island'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'claptrap' : {
        'Name': 'Claptrap' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/e/e0/180_claptrap.png',
        'FavoriteFoods' : 'Sundaes',
        'Location': ['Billy Goats Bluff'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },


    'sillymander' : {
        'Name': 'Sillymander' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/c/c2/181_sillymander.png',
        'FavoriteFoods' : 'Sundaes',
        'Location': ['Vault of Tears'],
        'Metamorph':['Slamander'],
        'morphLevel': 13,
        'maxLevel': 40
    },
    'slamander' : {
        'Name': 'Slamander' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/e/e6/182_slamander.png',
        'FavoriteFoods' : 'Sundaes',
        'Location': ['Road to Ruin'],
        'Metamorph':['Pyromander', 'Petramander'],
        'morphLevel': 29,
        'maxLevel': 58
    },
    'petramander' : {
        'Name': 'Petramander' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/1/11/184_petramander.png',
        'FavoriteFoods' : 'Sundaes',
        'Location': ['Nazcaä'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'pyromander' : {
        'Name': 'Pyromander' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/1/1d/183_pyromander.png',
        'FavoriteFoods' : 'Sundaes',
        'Location': ['None'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },



    
    'oroboros' : {
        'Name': 'Oroboros' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/b/bb/185_oroboros.png',
        'FavoriteFoods' : 'Sundaes',
        'Location': ['Rolling Hills'],
        'Metamorph':['Chloroboros'],
        'morphLevel': 12,
        'maxLevel': 45
    },
    'chloroboros' : {
        'Name': 'Chloroboros' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/c/c0/186_chloroboros.png',
        'FavoriteFoods' : 'Sundaes',
        'Location': ['Vault of Tears'],
        'Metamorph':['Obscuroboros', 'Fluoroboros'],
        'morphLevel': 34,
        'maxLevel': 68
    },
    'obscuroboros' : {
        'Name': 'Obscuroboros' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/e/e6/187_obscuroboros.png',
        'FavoriteFoods' : 'Sundaes',
        'Location': ['Vault of Tears'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'fluoroboros' : {
        'Name': 'Fluoroboros' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/7/7f/188_fluoroboros.png',
        'FavoriteFoods' : 'Sundaes',
        'Location': ['Billy Goats Bluff'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },



    'incy' : {
        'Name': 'Incy' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/1/16/189_incy.png',
        'FavoriteFoods' : 'Sundaes',
        'Location': ['Golden Grove'],
        'Metamorph':['Wincy'],
        'morphLevel': 12,
        'maxLevel': 48
    },
    'wincy' : {
        'Name': 'Wincy' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/c/c5/190_wincy.png',
        'FavoriteFoods' : 'Sundaes',
        'Location': ['Russet Island'],
        'Metamorph':['Web Master', 'Weaver Diva'],
        'morphLevel': 33,
        'maxLevel': 63
    },
    'web Master' : {
        'Name': 'Web Master' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/e/e8/191_web_master.png',
        'FavoriteFoods' : 'Sundaes',
        'Location': ['Spindle'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'weaver diva' : {
        'Name': 'Weaver Diva' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/9/9c/192_weaver_diva.png',
        'FavoriteFoods' : 'Sundaes',
        'Location': ['Nazcaä'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },



    'lagoon naiad' : {
        'Name': 'Lagoon Naiad' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/5/5d/193_lagoon_naiad.png',
        'FavoriteFoods' : 'Cakes',
        'Location': ['Friday Island'],
        'Metamorph':['Sea Naiad'],
        'morphLevel': 14,
        'maxLevel': 42
    },
    'sea naiad' : {
        'Name': 'Sea Naiad' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/d/d0/194_sea_naiad.png',
        'FavoriteFoods' : 'Cakes',
        'Location': ['Shipwreck Shore'],
        'Metamorph':['Lesser Spotted Naiad', 'Greater Naiad'],
        'morphLevel': 34,
        'maxLevel': 65
    },
    'lesser spotted naiad' : {
        'Name': 'Lesser Spotted Naiad' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/b/bb/195_lesser_spotted_naiad.png',
        'FavoriteFoods' : 'Cakes',
        'Location': ['The Sea: The Spring Realm'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'greater naiad' : {
        'Name': 'Greater Naiad' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/4/4b/196_greater_naiad.png',
        'FavoriteFoods' : 'Cakes',
        'Location': ['None'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },


    
    'airhead' : {
        'Name': 'Airhead' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/2/20/197_airhead.png',
        'FavoriteFoods' : 'Cakes',
        'Location': ['The Sea: South of the Summerlands'],
        'Metamorph':['Beachhead'],
        'morphLevel': 18,
        'maxLevel': 50
    },
    'beachhead' : {
        'Name': 'Beachhead' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/0/0e/198_beachhead.png',
        'FavoriteFoods' : 'Cakes',
        'Location': ['Shipwreck Shore'],
        'Metamorph':['Fountainhead', 'Thunderhead'],
        'morphLevel': 35,
        'maxLevel': 60
    },
    'fountainhead' : {
        'Name': 'Fountainhead' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/a/a9/199_fountainhead.png',
        'FavoriteFoods' : 'Cakes',
        'Location': ['The Sea: North of Winter Isles'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },
    'thunderhead' : {
        'Name': 'Thunderhead' ,
        'image' : 'https://static.wikia.nocookie.net/ninokuni/images/4/44/200_thunderhead.png',
        'FavoriteFoods' : 'Cakes',
        'Location': ['The Sea: Southwest of the Spring Realm'],
        'Metamorph':['None'],
        'morphLevel': 0,
        'maxLevel': 99
    },






    'unknown' : {
        'Name': 'unknown',
        'FavoriteFoods' : 'unknown',
        'Location': ['unknown'],
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