# beerproject

This is intended to be a full-stack web application to search for UK beers matching certain criteria. It has a node.js backend which connects to MongoDB and a React frontend. 

The concept behind the project was to make it easier for people to discover other beers they might like to try. The website has the user create a theoretical perfect beer for them by choosing their preferred flavours, brewery, style, country of origin, etc. as well as certain dietry requirements like vegan, gluten-free, low-calorie, and alcohol-free. 

This is somewhat similar to Untappd, a popular beer app, but Untappd is focused much more on social media aspects and isn't actually great for beer discovery apart from suggesting beers similar to those the user has tried and rated highly. That's a lot smarter than mine and I'd love to implement similar features once I learn how to make them, but it doesn't really allow any customization of what the user wants. I haven't been able to find a site that actually contains a substantial database of all the information people might want to know about beers.

Creating the database is obviously the biggest issue and almost certainly why this doesn't exist anywhere else. Short of having at least a couple dozen employees working under me to make it, it seems like an impossible challenge. But, if nothing else, this is a good way to practice my webdev skills with a subject I enjoy, so here's the code for now and we'll see what happens.

Current major issues:

1. import isn't working on React pages.
2. matchScores aren't really being calculated correctly, which is fixed with a bandaid solution for now.
