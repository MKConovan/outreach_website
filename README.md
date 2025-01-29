# UTeach Map Viewer

**Contributors**:  
F2024-S2025: Nilava S  

## Description  
**Purpose**  
This website contains a rudimentary HTML website. It is designed to help UTeach students with their early weeks of logistics and make their transition to teaching easier by informing them about parking routes and general locations of their campuses. This website is currently hosted on Git Hub with the idea of transitioning to UTeach's web hosting network.
## Features

- **Interactable Map**: An interactable map using leaflet's open source mapping software
- **Video Guides**: Video guides explaining how to park and find your way around campus
- **Markers**: That indicate key points of intrests apparent in the said video guides.

## Installation

**To install and run this project:** Nothing is required as of yet but please keep it so that nothing needs to be done.  

Implementation of Flask and React may sound like a good idea but the complexity of this project will make it more difficult to maintain.

For now javascript is our friend and lets keep it so.

## Documentation

- ### HTML + CSS
The index.html file holds the general layout of the website without any formatting while the CSS holds all the design and alignment aspects of the website. Keep these well labeled and clear as clutter is horrendous to sift through.  

_If figuring out what div does what is difficult, I reccomend inspect elementing the website and seeing what is highlighted -Nil_

- ### JavaScript
The JS file contains the main code and processing of the map. This js file does all the back end of the website as it initially loads the map and handles button presses as well. To simplify reading the code, explains the code.  

_I have attempted to comment some stuff hopefully it helps -Nil_

- ### JSON
The actual meat of project, so lets break it down  
- **Format**  
<pre>
{
    "School 1"[
        {
            "lat": the latitude of the main school marker,
            "lng": the longitude of the main school marker,
            "data": an html script exerpt that has a clickable link of the address linking to google maps.,
            "label": what is this marker pointing to,
            "link": currently is being used to set up the html for the video guide
        },
        {
            "lat": latitude of another marker
            "lng": longitude of another marker
            "label": what is this marker pointing to?
            "data": why is this marker important
        },
        ...
    ],
    "School 2":[
        ...
    ],
    ...
}
</pre>