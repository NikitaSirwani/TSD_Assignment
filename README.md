# TSD RSS Feed

After the repository has been cloned into the local machine
Run "npm install" to get all the dependencies

To run the application on web browser run "npm start" and open "localhost:3000" on your browser

# Assumptions
1. User needs to enter the {data} in the input field to complete the URL structure and fetch RSS feed
2. The URL structure is https://api.rss2json.com/v1/api.json?rss_url={data}/feed/ 
3. To test the application, enter the following strings in input for {data}
    a. https://aws.amazon.com/blogs/big-data
    b. http://sukhmanisakhi.com
4. One sample feed is a JavaScript Object which has property named "items"
   The "items" property of the sample feed is an array which holds "title", "pubDate" and "content"
   The data present in "title", "pubDate" and "content" are displayed in the Main Screen 

# Additional Notes
1. Local Storage is used for keeping data persistent
2. Latest entered URL appears at the top of URL history
3. Back button works for navigating to show previously selected URL