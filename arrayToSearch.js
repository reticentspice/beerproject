const searchArray = ["0121 BREW-ONE West Coast IPA", "1664", "1857 Pale Ale", "1906 Black Courage", "1906 Reserva Especial", "54 Lager", "8 Ball Rye IPA", "AM:PM Session IPA", "Abbot Ale", "Abbot Reserve", "Admiral's Reserve", "Adnams Both Barrels", "Adnams Dry-Hopped Lager", "Adnams Explorer", "Adnams Ghost Ship", "Adnams Innovation IPA", "Adnams Lighthouse", "Adnams Old Ale", "Adnams Tally-Ho", "Adnams Triple Knot", "Adnams X Verdant: Evening Dreams", "After DIPA", "Alba - Barrel Aged", "Alba Scots Pine Ale", "Albion Cream Stout", "Alien Form AF", "Allagash North Sky", "Alloa Gold", "Alpaca DDH IPA", "American Brown Ale", "Amstel", "Ancho & Morita Chilli Imperial Stout", "Anthem British Pale Ale", "Apricity", "Armada Ale", "Artesian Pale Ale", "Asahi Super Dry", "Asahi Super Dry 0.0%", "Ashfield British Lager", "Aston Villa Purity Pale", "Astryd Juicy Pale Ale", "Atlantic American Pale Ale", "Atlantic Pale Ale", "Avena Oat IPA", "BOLO", "Bad Habit", "Badger Best Bitter", "Bananas", "Banks's Amber Bitter", "Banks's Barley Gold", "Banks's Golden", "Banks's Mild", "Baobab", "Barista Stout", "Barrel Aged Milk Spey", "Bath Gem", "Bavaria 0.0%", "Bayern Late Hopped Pils", "Bear Island Triple Hopped Lager", "Beavertown Neck Oil", "Becks Blue Alcohol Free", "Before IPA", "Belhaven 80 Shilling", "Belhaven Best", "Belhaven Black Scottish Stout", "Belhaven Craft Pilsner", "Belhaven McCallum's Sweet Scottish Stout", "Belhaven Robert Burns Brown Ale", "Belhaven Scottish Ale", "Belhaven Scottish Oak Stout", "Belhaven Twisted Thistle IPA", "Belhaven Wee Heavy", "Bellwoods - Barn Owl 22", "Bellwoods - Barn Owl 23", "Bellwoods - Farmageddon Cherry", "Bellwoods - Grandma's Boy 2021 Prune", "Bellwoods - Grandma's Boy 2021 Shiro", "Benediktiner Festbier", "Benediktiner Hell", "Benediktiner Weissbier Alcohol Free", "Benediktiner Weissbier Dark", "Benediktiner Weissbier Naturtrub", "Between the Sheets", "Big Bang IPA", "Big Job Double IPA", "Birds & Bees", "Birra Moretti L'Autentica", "Birra Moretti Zero", "Birrificio Angelo Poretti 4 Hops", "Bishops Farewell", "Bishops Finger", "Bitburger Drive 0.0%", "Bitburger Pils", "Bitburger Radler", "Bitter & Twisted Golden Ale", "Bitter Brummie", "Black Sheep Ale", "Black Sheep Best Bitter", "Black Sheep Blonde Ale", "Black Sheep Milk Stout", "Black Square Imperial Stout", "Blackberry & Cherry Sour", "Blackberry & Plum Sour", "Blackberry Farm - En Honneur de Toi", "Blackshore Stout", "Blandford Fly", "Bling Mixer", "Blitzen Beer", "Boltmaker", "Bones Lager", "Boundary - I Like to Be Liked", "Boundary - Unnecessary Symmetry", "Bracia", "Brakspear Gravity", "Brakspeare Oxford Gold", "Brewdog Ald IPA", "Brewdog Almost Famous", "Brewdog Arcade Made", "Brewdog Black Heart", "Brewdog Cake Cartel", "Brewdog Candy Kittens", "Brewdog Dead Pony Club", "Brewdog Double Hazy Jane", "Brewdog Elvis AF", "Brewdog Elvis Juice", "Brewdog Grind Coffee Stout", "Brewdog Hazy AF", "Brewdog Hazy Jane", "Brewdog Hazy Jane Guava", "Brewdog Hop Frenzy", "Brewdog Hoppy Xmas", "Brewdog Jack Hammer", "Brewdog Lost AF", "Brewdog Lost Lager", "Brewdog Mr. President", "Brewdog Nanny State", "Brewdog Nanodog #0009", "Brewdog Neon Dream", "Brewdog Planet Pale Ale", "Brewdog Punk AF", "Brewdog Punk IPA", "Brewdog Rattle & Rum", "Brewdog Shore Leave", "Brewdog Silk Road", "Brewdog Speedbird OG", "Brewdog Triple Hazy Jane", "Brewpoint Foghorn", "Brewpoint Lodestar", "Brewpoint Supernova Helles Lager", "Brightside IPA", "Bring Out The Imp", "Broken Dream", "Brooklyn Defender", "Brooklyn Lager", "Brooklyn Pilsner", "Brooklyn Special Effects", "Bud Light", "Budweiser Lager", "Bure Gold", "Burrow's Blonde Beer", "Butty Bacch", "Caesar AF", "Caesar Augustus", "Call of the Void", "Camden Hells Lager", "Camden Pale Ale", "Camden Stout", "Camel Valley Pilsner", "Captain Smiths", "Capuccino Stout", "Caramel Fudge Stout Cognac", "Cardinal Sin", "Caribbean Chocolate Cupcake 2023", "Caribbean Salted Cherry Chocolate Cake 2023", "Carlsberg 0.0", "Carlsberg Danish Pilsner", "Carlsberg Export", "Carlsberg Special Brew", "Cellar Aged Furthest City Light", "Celtic Nectar", "Chalky's Bite", "Charisma", "Che Guava", "Cherry Porter", "Cherry Porter Grand Reserve", "Cherry Porter Grand Reserve Amaretto Infused", "Chillax Cold IPA", "Chimay Cent Cinquante", "Chimay Cinq Cents", "Chimay Gold", "Chimay Grande Reserve", "Chimay Grande Reserve Barrel Fermented", "Chimay Premiere", "Chiron", "Chocolate & Vanilla Stout", "Chokka Blokka", "Chula Vista", "Cloudwater Fresh Alcohol Free IPA", "Cobra Premium", "Cobra Zero", "Cocoa Wonderland", "Cold Harbour Lager", "Conquest Imperial Lager", "Cook Lane IPA", "Coors", "Cornish Best", "Corona Extra", "Coronation Golden Ale", "Counter Table Beer", "Courage Best Bitter", "Courage Directors Superior Ale", "Courage Light Ale", "Crackendale", "Cranberry Poacher", "Creme Bearlee", "Cruzcampo", "Cry Wolf Beer", "Crystallography the Original", "Czech Mates", "Czechvar Czech Lager", "Czechvar Dark Lager", "DDH Halcyon", "DDH Jaipur", "DDH Soundwave", "Dark & Perilous Nights", "Dark Mild", "Dark Star American Pale Ale", "Dark Star Hophead", "Dark Star Hophead Wai-Iti", "Dark Star Prize Old Ale", "Dark Star Red Giant", "Dark Star Revelation IPA", "Daura Damm Gluten Free", "David's Not So Bitter", "Days of Creation", "Death by Cherries", "Death by Margarita", "Debowe Mocne", "Desperados Lime", "Desperados Mojito", "Desperados Red", "Desperados Tequila Flavoured Lager Beer", "Desperados Virgin 0.0%", "Deuchars IPA", "Diamond Cutter Lager", "Diceman Stout", "Distant Sonder IPA", "Dive In Pale Ale", "Divine Intervention", "Don't Hold Back", "Doom Bar Amber Ale", "Dope Style", "Double Barrel Select - Black Wax", "Double Barrel Select - Purple Wax", "Double Barrel Select - Red Wax", "Double Dope", "Double Joker", "Double Tonka Frappe", "Double Whammy", "Dry Neck Golden Beer", "Dub C", "Duration - Depth of Field", "Eagle Banana Bread Beer", "Eagle IPA", "Ease Up IPA Gluten Free", "East Coast Pale Ale", "Easy Rider", "Eazy Hazy IPA", "Ebulum Elderberry Ale", "Eclipse Black IPA", "El Perro Negro", "Electric West Coast IPA", "Embers Rye ESB", "Ensueno Hazy IPA", "Erdinger Alkoholfrei", "Erdinger Alkoholfrei Grapefruit", "Erdinger Dunkel", "Erdinger Weissbier", "Estrella Damm", "Estrella Galicia 0.0% Lager", "Estrella Galicia Gluten-Free", "Estrella Galicia World Lager", "Expressions: Idaho 7", "Fire Catcher Golden Beer", "Flex California Pale Ale", "Flint Eye Dry Hopped Lager", "Forward Lager", "Foster's Lager", "Fractional BA Mauna Loa", "Fraoch Barrel Aged", "Fraoch Heather Ale", "Free Damm Lager", "Freedom Helles", "Freedom Lager", "Freedom NZ Pale", "Freedom Pils", "Freedom Sesh", "Frizzle IPA", "Fuller's 1845", "Fuller's Bengal Lancer", "Fuller's Black Cab Stout", "Fuller's ESB", "Fuller's Frontier Lager", "Fuller's Golden Pride", "Fuller's London Porter", "Fuller's London Pride", "Fuller's Old Winter Ale", "Fuller's Organic Honey Dew Golden Ale", "Fursty Ferret", "Futurist Gluten Free Session IPA", "Fuzzy Hazy Pale", "Gamma Ray American Pale Ale", "Ghost Ship 0.5%", "Glide NEIPA", "Gluten-Free Greene King IPA", "Gluten-Free Old Speckled Hen", "Gold Brummie", "Golden Best", "Golden Champion", "Golden Glory", "Golden Sheep Ale", "Green Devil", "Green Mountain", "Greene King East Coast IPA", "Greene King IPA", "Greene King IPA Gold", "Greene King IPA Reserve", "Greene King Light Ale", "Greenock Cut", "Grimbergen Blonde", "Grolsch Premium Pilsner", "Grozet Gooseberry Ale", "Guava Christmas", "Guinness 0.0", "Guinness Cold Brew Coffee Beer", "Guinness Draught", "Guinness Foreign Extra Stout", "Guinness Original", "Guinness West Indies Porter", "Gulder Extra Mature Beer", "Guzzler Pale Ale", "HOPO 6.2 IPA", "HOPO Blonde Lager", "HOPO Double IPA", "HOPO Proper IPA", "HOPO Session IPA", "Hadern Dunkel", "Hairy Bikers Triple Hop Best Bitter", "Happy Easy Pale", "Harvey's Best Bitter", "Harvey's Bonfire Boy", "Harvey's Christmas Ale", "Harvey's Dark Mild", "Harvey's Elizabethan Ale", "Harvey's IPA", "Harvey's Imperial Extra Double Stout", "Harvey's Old Ale", "Harvey's Old Ale Low Alcohol", "Harvey's Porter", "Hatchet Peak", "Headcracker", "Heavy Gravity IPA", "Hebden Lager", "Heineken 0.0%", "Heineken Original", "Heineken Silver", "Heliolater", "Helles Classic Lager", "Heverlee Belgian Lager", "Hicks Special Draught", "Highland Jock", "Hipsway", "Hirundo", "Hobgoblin Gold", "Hobgoblin IPA", "Hobgoblin Ruby", "Hobgoblin Session IPA", "Hobgoblin Stout", "Holsten Pils", "Holsten Super", "Holsten Vier", "Hooked on Idaho 7", "Hopfather", "Hopical Storm", "Hopping Hare", "Huckaback NEIPA", "Huntington California IPA", "I Have Become the Boat", "I Wish It Could Be Citra Every Day", "Ice Breaker Pale Ale", "Ice Cream Pale Ale", "Ikat DDH DIPA", "Immortal Memory 2.0", "Impale IPA", "Imperial May Contain Sixpencce", "Imperial Naughty & Nice", "Imperial Naughty & Nice 10.6%", "Imperial Yorkshire Stout", "Inferno Blonde Ale", "Infinite Space Juicy IPA", "Intuition Pale Ale", "Jaipur", "Jaipur X", "Jamestown NEIPA", "Jeffrey Hudson Bitter", "Jennings Cumberland", "Jennings Night Vision", "John Smith's Extra Smooth", "John Smith's Original", "Joker AF", "Joker IPA", "Jubel Beer Cut With Elderflower", "Jubel Beer Cut With Grapefruit", "Jubel Beer Cut With Peach", "Juice Do It", "Juice Tygrr", "Juicy Joker NEIPA", "Just Like Paradise", "Jute Session IPA", "Katmai American Brown Ale", "Kinder Double NEIPA", "King Cobra", "King Goblin", "Kingfisher Premium Lager", "Kings Canyon", "Kirin Ichiban", "Knack Dark Mild", "Knowle Spring", "Kobold English Lager", "Konig Pilsener", "Korev Lager", "Kostritzer Black Lager", "Kostritzer Kellerbier", "Kostritzer Pale Ale", "Kostritzer Schwarzbier", "Krombacher 0.0%", "Krombacher Dark", "Krombacher Hell", "Krombacher Pils", "Krombacher Weizen", "Krombacher Weizen Non Alcoholic", "Kronenbourg 1664 Blanc", "Kronenbourg 1664 Blanc 0.0%", "Kronenbourg 1664 Rose", "Kuba Mojito Sour", "L.A. Spey", "Lagunitas IPA", "Lancaster Bomber", "Landlord Dark", "Landlord Pale Ale", "Lansdown West Coast IPA", "Lawless Lager", "Lazer Crush Alcohol Free", "Lazy SIPA Cold Session", "Leadmill IPA", "Lech", "Legacy 25 Amber Ale", "Let Me Be Your Galaxy", "Level Head Session IPA", "Long Ridge West Coast IPA", "Look Closer Session IPA", "Loom Pale", "Lord Marples", "Love Among the Ruins", "Low Alcohol Old Speckled Hen", "Low Voltage Session IPA", "Lucid AF Pale", "Lukas Lager", "Lumina Session IPA", "Lunar Haze", "Lupuloid IPA", "Mad Goose", "Madri Excepcional", "Maisel's Weisse", "Maisel's Weisse Alkohol Frei", "Malabar", "Mandarin & Papaya Sour", "Manns Brown Ale", "March of the Penguins", "Market Porter", "Marshall - Amped Up Lager", "Marshall - Full Stack IPA", "Marshall - Jim's Treble", "Marston's 61 Deep", "Marston's EPA", "Marston's Owd Roger", "Marston's Pearl Jet", "Marston's Pedigree", "Marston's Resolution", "Masham Ale", "Master Brew", "Master Stoat", "May Contain Sixpence", "McEwan's Champion", "McEwan's Export", "Meantime Anytime IPA", "Meantime Bier Garden", "Meantime Double Groove", "Meantime Greenwich Lager", "Meantime Now IPA", "Meantime Prime Pale", "Meantime Yakima Red Ale", "Megawatt Double IPA", "Memento", "Mena Dhu Stout", "Merlin's Scottish Pale Ale", "Merry & Bright", "Mesmerist", "Midnight Sun", "Midwinter Chocolate Orange Stout", "Mikan Shimoda Pale", "Mind Games", "Modern Times - Palace Of Paper Sacks Nectarine Sour", "Monterey California Pale Ale", "Monty Python's Holy Grail Beer", "More Is More", "Mosaic Pale Ale", "Motueka Vermont Session IPA", "Munchner Hell", "Murphy's Irish Stout", "My Continuous Improvement", "Nanodog #0011", "Nanodog #0013", "Naughty & Nice Chocolate Caramel Cookie", "Naughty & Nice Chocolate Stout", "Naughty & Nice Double Coconut Macaroon", "Nelson's Bitter", "New Tricks Golden Ale", "Newcastle Brown Ale", "Nightjar", "Nitro Caribbean Chocolate Cake 2023", "Nog", "Nollaig Winter Spruce IPA", "Norada", "Noughty Bear 0.5% IPA", "Nth Degree Double IPA", "Nuts + Bolts Peanut Stout", "Oakham Citra", "Off Menu IPA", "Offshore Pilsner", "Old Crafty Hen", "Old Empire", "Old Golden Hen", "Old Jock", "Old Speckled Hen", "Olympia Golden Ale", "One Way Mirror", "Orders NEIPA", "Origins IPA", "Out of Nowhere", "Outland Ginger Pale Ale", "Outland Hazy IPA", "Outland Milk Stout", "Outland Peach Lager", "Outland West Coast IPA", "Pachamama", "Pale Brummie", "Pale Rider", "Pardus NYC Blueberry Cheesecake", "Pastel Pils", "Paulaner Oktoberfest Bier", "Paulaner Salvator", "Paulaner Weissbier", "Paulaner Weissbier 0,0%", "Paulaner Weissbier Dunkel", "Pavlov's Dog", "Pekin Pale Ale", "Peroni Nastro Azzurro", "Peroni Nastro Azzurro 0.0%", "Peroni Nastro Azzurro Gluten Free", "Peroni Nastro Azzurro Stile Capri", "Phoenix Porter", "Piccadilly Gold", "Piccadilly Pilsner", "Piccadilly Porter", "Pilsner Urquell", "Plum Porter Grand Reserve", "Pompelmocello", "Portobello London Pale", "Portobello London Pilsner", "Portobello Star", "Poulter's Porter", "Proper Black Black IPA", "Proper DIPA Sabro", "Proper Job IPA", "Pulling Down the Sun IPA", "Purity Best Bitter", "Purity Bunny Hop", "Purity Craft Lager", "Purity Everyday Pale", "Purity Longhorn IPA", "Purity NEIPA", "Purity Point Five", "Purity Pure Gold", "Purity Pure Helles", "Purity Pure UBU", "Purity Session IPA", "Quiet Storm African Queen", "Quiet Storm Ahtanum", "Quiet Storm Cashmere", "Quiet Storm Chinook", "Quiet Storm Eclipse", "Quiet Storm Tradition", "Quiet Storm Vista", "Red Berry Rhapsody", "Red Stripe", "Reedlighter", "Reliance Pale Ale", "Renegade Snares", "Respire Beer", "Riggwelter Beer", "Ringwood Boondoggle", "Ringwood Circadian", "Ringwood Forty Niner", "Ringwood Old Thumper", "Ringwood Razor Back", "Rock City IPA", "Rocking Rudolph Christmas Ale", "Roisin Tayberry Beer", "Rollin' Waves Gluten Free Pale", "Ruddles Best", "Ruddles County", "SKOL", "SKOL Super", "Sacred Profane Dark Lager", "Sacred Profane Pale Lager", "Saddle Tank", "Sagres", "Salt NFT #2", "Saltaire Amarillo", "Saltaire Best", "Saltaire Blonde", "Saltaire Cafe Culture", "Saltaire Cascade", "Saltaire Citra", "Saltaire El Dorado", "Saltaire Full Tilt", "Saltaire Halo", "Saltaire Helles", "Saltaire New World", "Saltaire No. 5", "Saltaire Northern Light", "Saltaire Pilsner", "Saltaire South Island", "Saltaire Speedway", "Saltaire Timberwolf", "Saltaire Titus", "Saltaire Triple Choc", "Saltaire Unity", "Saltaire Velocity", "Saltaire Zipwire", "Salted Caramel Lucaria", "San Miguel 0,0", "San Miguel Especial", "San Miguel Gluten Free", "Santo", "Sapien", "Sapporo Premium Beer", "Satellite Low Alcohol IPA", "Sayzon", "Sea Fury", "Sebright Golden Ale", "Serge Citra IPA", "Seven Giraffes", "Shangri Lager - River Cottage", "Shattered Dream: Nitro", "Shed Head", "Shipyard American IPA", "Shipyard American Low Tide", "Shipyard American Pale Ale", "Shoreditch Blonde", "Shrubs Hedgerow Sour", "Side Quest Hazy Pale Ale", "Signals IPA", "Singha Lager", "Single Hop Series Amarillo Edition", "Siren Calypso", "Siren Decades", "Skinny IPA", "Skinny Lager", "Slam Duck", "Small Pleasures West Coast IPA", "Smart Casual Juicy IPA", "Smog Rocket Smoked Porter", "Snapback West Coast Pilsner", "Snowflake Beer", "SoCal Bright Pale", "Sober Brummie", "Sol", "Solar Flare", "Solar Wave", "Soundwave IPA", "South Facing IPA", "Southdown Harvest", "Southwold Bitter", "Space Hulk NEIPA", "Spey's Cadet", "Speyside Lager", "Spitfire Amber Ale", "Spitfire Golden Ale", "Spitfire Lager", "Spresso Coffee Stout", "St. Bernardus Abt 12", "St. Bernardus Christmas Ale", "St. Bernardus Extra 4", "St. Bernardus Pater 6", "St. Bernardus Prior 8", "St. Bernardus Tokyo", "St. Bernardus Tripel", "St. Bernardus Wit", "Stag Lager", "Star Finest Lager", "Star of Eastbourne", "Staropramen 0.0%", "Staropramen Dark", "Staropramen Granat", "Staropramen Non-Alcoholic", "Staropramen Praha", "Staropramen Premium", "Staropramen Unfiltered", "Stella Artois Alcohol Free", "Stella Artois Gluten Free", "Stella Artois Original", "Stella Artois Premium Lager", "Stella Artois Unfiltered", "Sticky Toffee Pudding", "Stiff Lip IPA", "Stiff Peaks", "Stillman's IPA", "Stirchley Lager", "Stout Brummie", "Stout Jock", "Strong Suffolk", "Sun God Tropical IPA", "Sunshine on Keith", "Super Bock Lager", "Super Moon IPA", "Sussex Best", "Sweet Temptation", "Switch - Alcohol Free Pale Ale", "Talking Head", "Tangle Foot", "Tangled Up in Blue", "Ten Cents", "Ten Storey Malt Bomb", "Tennent's 1885 Lager", "Tennent's Gluten Free", "Tennent's India Pale Ale", "Tennent's Lager", "Tennent's Light", "Tennent's Scotch Ale", "Tennent's Whiskey Oak", "Tennent's Zero", "Tesco Biere d'Or", "Tetley's Original Bitter", "Tetley's Original Cask", "Tetley's Smooth Flow", "The Bee 17", "The Bruery - Hoppy Horsey", "The Bruery - Horse In The Orchard", "The Final Straw", "The Heart Desires", "The Hexagon Project #18", "The Lawnmower", "The Wednesday Pale Ale", "Theakston Best Bitter", "Theakston Crowning Glory", "Theakston Lightfoot", "Theakston Mild", "Theakston Old Peculier", "Theakston Pale", "Theakston Peculier IPA", "Theakston Quencher", "Theakston SUMMIT", "Theakston XB", "Thornbridge Market Porter", "Tiger Beer", "Tin Man Tropical IPA", "Tinsel Toes", "Titanic Iceberg", "Titanic Plum Porter", "Titanic Steerage", "Titanic Stout", "Titanic White Star", "Toast Pale Ale", "Tom Paine", "Toucan Tropic", "Tram Double NEIPA", "Tribute Extra", "Tribute Pale Ale", "Trillium - Fated Farmer Cranberry", "Trillium - Fated Farmer Nectarine", "Trillium - Fated Farmer Peach", "Tropical Swan", "Tropigamma", "Tuborg Green", "Tyskie", "Tzara", "Uncle Zester", "Vanilla Face Off", "Victoria Malaga Lager", "Vintage Nectar", "Vocation Aoraki", "Vocation Bread & Butter", "Vocation Crush Hour", "Vocation Day Trip", "Vocation Folklore", "Vocation Heart & Soul", "Vocation Imperial Orange Stout", "Vocation Life & Death", "Vocation Living the Dream", "Vocation Love & Hate", "Vocation Roll With It", "Vocation Solstice", "Vocation Tahoma", "Volt Premium IPA", "Voltage Session IPA", "Waggle Dance", "Wainwright Altitude", "Wainwright Amber", "Wainwright Golden Ale", "Warsteiner Premium Beer", "Watou Tripel", "Wee Jock", "West Side Glory", "Westway Pale Ale", "Whamageddon", "Wharf IPA", "What Is There to Doubt?", "What Is There to Think About?", "When They Bring Back the Riff But Slower", "Wherry", "Whitstable Bay Black Stout", "Whitstable Bay Blonde Lager", "Whitstable Bay Organic Ale", "Whitstable Bay Pale Ale", "Wholesome Stout", "Wild Hare Gluten Free Pale Ale", "Williams Brothers Craft Lager", "Wingman Session IPA", "Wolfpack Lager", "Wolfpack Pilsner", "Wolfpack Sesh IPA", "Wye Valley 1985", "Wye Valley Bitter", "Wye Valley Fandango", "Wye Valley HPA", "XX Mild", "Yakima Pilsner", "Yardbird Pale Ale", "Yorkshire Terrier Beer", "You Can Arrive Strata & Idaho 7 Pale Ale", "Young's Double Chocolate Stout", "Young's London Original", "Young's London Special", "Young's London Stout", "Yu Lu Session Pale Ale", "Zero Five", "Zubr"]

module.exports = searchArray