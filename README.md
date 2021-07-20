# UFOs
Creating a UFO website using JavaScript
## Overview:
In this challenge we were given the task to use JavaScript and HTML to create a webpage to display data on UFO sightings. We were giving a data set in the form of a JavaScript object, and we were to use HTML and the open-source CSS framework Bootstrap to present this data in a table. We were then asked to create a filter aspect on the webpage to filter by the date, city, state, country, and/or shape.  

## Purpose:
The purpose of this challenge is familiarizing myself with the power of JavaScript and the use of using JavaScript for front end development. From our previous challenges, we have used python mainly for backend data scraping and now we have learned how to use JavaScript to create webpage interactions. 

## Resources
* Data Source: 
data.js
* Software: 
VSCode 1.58.2
Node.js 14.16.0
Bootstrap 4.0.0

## Analysis:
### Overview of Analysis:
There wasn't so much analysis for this challenge as there were more analysis of the methods, we used to filter our data. This challenge was more of learning how to use JavaScript rather than analyzing a data set. 

### Results:
The results of this challenge were teaching the power of JavaScript and how it affects the interaction of a webpage. Walking through the method and approach for this challenge, we can first start off with the data.js file. This was the data set given to Dana and it was conveniently in JavaScript in which we were able to use its innate language to turn it into a readable table. 

![Data Set](https://github.com/lo7kyle/UFOs/blob/main/static/images/data.PNG) 


The next file to look at would be the index.html. "index.html" is often used as a default name for the name of the homepage of a webpage. Starting from the top, we created a header "UFO Sightings" that links to the index.html file. This is to act as a home button if we ever need to expand on this website.   

![Home Button](https://github.com/lo7kyle/UFOs/blob/main/static/images/home-button.PNG) 

In our HTML file, I used bootstrap and its containers to create the layout of our page with the filters and table sharing the same row. This part is important because the input class is what the app.js file will be looking at for the filtering of the table. The headers of a table needs to be created and using the app.js file we can fill the tables accordingly to the headers. At the bottome of the index.html file we initialize our scripts in a logical order so that our website won't crash. It was organized so that the data will be loaded beforethe app.js file so that the script won't try to make a table without loading the data first.

``` html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.11.0/d3.js"></script>
  <script src="static/js/data.js"></script>
  <script src="static/js/app.js"></script> 
```

If our index.html is our car frame, we can see our app.js file as our engine. In this file I used it to build a table by looping through each data row then appending each row to the table body. This is for the default table without any filtering. Next, we had our updateFilters and filterTable methods. In update filters, we are creating a filters object to keep track of how many filters are active at once. The updateFilters method will be selecting all input in the text box thanks to an event handler that will detect a change on the webpage. 

```js
d3.selectAll("input").on("change", updateFilters);
````
We use the d3 library to listen to the webpage and handles events. As we are typing into the filter search boxes, the data is being logged into our filters object. We then call the filterTable method that will rebuild the table after considering what filters we stored in our object. It is in this function where we use the filter method in JavaScript and filter the values we want. 
```js
    Object.entries(filters).forEach(([key,value]) => { 
      filteredData = filteredData.filter(row => row[key] === value);
    });
```
From the image below we can see that if you only put in one filter criteria, it will only filter by one since there is only one filter in the object. 

![Date Filtering](https://github.com/lo7kyle/UFOs/blob/main/static/images/Date%20Filtering.PNG) 

Once you enter another criterion, now two objects are stored into the object and both filters can be applied.

![2 Criteria Filtering](https://github.com/lo7kyle/UFOs/blob/main/static/images/2%20criteria%20filtering.PNG) 

### Summary:
In summary this challenge was extremely informational, and I struggled a lot with syntax. I am still very unfamiliar with HTML, and I had to refer to my old challenge and exercises. I used Google a lot for the syntax for JavaScript especially during the for loop through the object. I am still unsure on what the purpose of the style.css file does since we can always update the style of the HTML file directly. The in-class problems helped a lot with the syntax and the challenge along with the Hint. Without the hint I can honestly say that this challenge would take at the very least 3 times longer. I am even more excited to practice JavaScript more after seeing how just a few simple lines of code can create something so useful and powerful.
