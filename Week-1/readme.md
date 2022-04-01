ASSIGNMENT-1

A - What is the main functionality of the browser?
Explanation – The main functionality of browser is to read the requested HTML-document and render it into the webpage, to render HTML-document into webpage browser go through the sequence of processes as follows.























B - High Level Components of a browser.
Explanation B – Browser’s higher order components are 
1.	The user interface: this includes the “address bar”, back/forward button, bookmarking menu, etc.
2.	The browser engine: marshals actions between the UI and the rendering engine.
3.	The rendering engine : responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
4.	Networking: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
5.	UI backend: used for drawing basic widgets like combo boxes and windows.
6.	JavaScript interpreter. Used to parse and execute JavaScript code.
7.	Data storage. This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies.
following image is showing Browsers main components 



C - Rendering engine and its use.
Explanation C - The responsibility of the rendering engine is well... Rendering, that is display of the requested contents on the browser screen.
Rendering engine use: -
By default, the rendering engine can display HTML and XML documents and images. It can display other types of data via plug-ins or extension; for example, displaying PDF documents using a PDF viewer plug-in. However, in this chapter we will focus on the main use case: displaying HTML and images that are formatted using CS






















D - Parsers (HTML, CSS, etc)
Explanation D - a parser is a program, usually part of a compiler, that receives input in the form of sequential source program instructions, interactive online commands, markup tags, or some other defined interface and breaks them up into parts that can be used by other components in programming.
Parsers usually divide the work between two components: the lexer (sometimes called tokenizer) that is responsible for breaking the input into valid tokens, and the parser that is responsible for constructing the parse tree by analyzing the document structure according to the language syntax rules. The lexer knows how to strip irrelevant characters like white spaces and line breaks.
 


C- Script Processors
Explanation - The Script processor allows you to specify your own processor logic for a simple processor using JavaScript or Groovy. The script is entered as an option on the script processor.
use 
Use the script processor to define some simple processing logic that cannot be achieved easily using any of the provided processors.

D - Tree construction
Explanation – Rendering process has three tree construction first is DOM Tree then CSSOM Tree then Render Tree which consist of DOM and CSSOM Trees.
DOM Tree – 
When the browser reads HTML code, whenever it encounters an HTML element like html, body, div etc., it creates a JavaScript object called a Node. Eventually, all HTML elements will be converted to JavaScript objects.
After the browser has created Nodes from the HTML document, it has to create a tree-like structure of these node objects. Since our HTML elements in the HTML file are nested inside each other, the browser needs to replicate that but using Node objects it has previously created. This will help the browser efficiently render and manage the webpage throughout its lifecycle.


















CSSOM Tree –
After constructing the DOM, the browser reads CSS from all the sources (external, embedded, inline, user-agent, etc.) and construct a CSSOM. CSSOM stands for CSS Object Model which is a Tree Like structure just like DOM.
Each node in this tree contains CSS style information that will be applied to DOM elements that it target (specified by the selector). CSSOM, however, does not contain DOM elements which can’t be printed on the screen like <meta>, <script>, <title> etc.
 





Render Tree –
Render-Tree is also a tree-like structure constructed by combining DOM and CSSOM trees together. The browser has to calculate the layout of each visible element and paint them on the screen, for that browser uses this Render-Tree. Hence, unless Render-Tree isn’t constructed, nothing is going to get printed on the screen which is why we need both DOM and CSSOM trees.
As Render-Tree is a low-level representation of what will eventually get printed on the screen. 

G – Order of script processing
Explanation – 
JavaScript on web page executes based on certain factors and orders, let's consider where and how to add JavaScript to a web page
There are basically three locations into which we can attach JavaScript:
•	Directly into the head of the page
•	Directly into the body of the page
•	From an event handler/listener

Directly into the head of the page and body of the page:
What does it mean to say that JavaScript is directly in the head or body of the page? If the code is not enclosed in a function or object, it is directly in the page. In this case, the code runs sequentially as soon as the file containing the code has loaded sufficiently for that code to be accessed.
Code that is within a function or object is run only when that function or object is called.
Basically, this means that any code inside the head and body of your page that is not inside a function or object will run as the page is loading — as soon as the page has loaded sufficiently to access that code.
That last bit is important and impacts the order in which you place your code on the page: any code placed directly in the page that needs to interact with elements within the page must appear after the elements in the page on which it is dependent.
In general, this means that if you use direct code to interact with your page content, such code should be placed at the bottom of the body.
Code Assigned to Event Handlers and Listeners
Assigning a function to an event handler or listener does not result in the function being run at the point at which it is assigned — provided that you are actually assigning the function itself and not running the function and assigning the value returned. (This is why you generally do not see the () on the end of the function name when it is being assigned to an event since the addition of the parentheses runs the function and assigns the value returned rather than assigning the function itself.)
Functions that are attached to event handlers and listeners run when the event that they are attached to is triggered. Most events are triggered by visitors interacting with your page. Some exceptions exist, however, such as the load event on the window itself, which is triggered when the page finishes loading.
Functions Attached to Events on Page Elements
Any functions attached to events on elements within the page itself will run according to the actions of each individual visitor — this code runs only when a particular event occurs to trigger it. For this reason, it doesn't matter if the code never runs for a given visitor, since that visitor has obviously not performed the interaction that requires it.
All of this, of course, assumes that your visitor has accessed your page with a browser that has JavaScript enabled.





F - Layout and Painting
Explanation – 
Layout:
Once the Render-Tree is constructed, then the browser starts the printing individual elements on the screen.
The first browser creates the layout of each individual Render-Tree node. The layout consists of the size of each node in pixels and where (position) it will be printed on the screen. This process is called layout since the browser is calculating the layout information of each node.
This process is also called reflow or browser reflow and it can also occur when you scroll, resize the window or manipulate DOM elements.
Painting: 
after layout we have a list of geometries that need to be printed on the screen. Since elements (or a sub-tree) in the Render-Tree can overlap each other and they can have CSS properties that make them frequently change the look, position, or geometry (such as animations), the browser creates a layer for it.
Creating layers helps the browser efficiently perform painting operations throughout the lifecycle of a web page such as while scrolling or resizing the browser window. Having layers also help the browser correctly draw elements in the stacking order (along the z-axis) as they were intended by the developer.
Now that we have layers, we can combine them and draw them on the screen. But the browser does not draw all the layers in a single go. Each layer is drawn separately first.
Inside each layer, the browser fills the individual pixels for whatever visible property the element has such as border, background color, shadow, text, etc. This process is also called as rasterization. To increase performance, the browser may use different threads to perform rasterization.


