# To_do_list
The To-Do List App is a web application built using Node.js, Express.js, and EJS (Embedded JavaScript) templating engine. It allows users to create and manage their to-do items in an organized manner. The app provides separate routes for the home ("/home") and work ("/work") to differentiate between personal and work-related tasks.
## Features
1. User-friendly interface: The app has a clean and intuitive user interface, making it easy for users to interact with their to-do list.
2. Dynamic rendering: The EJS templating engine dynamically renders the HTML templates, displaying the current date and the list of to-do items.
3. Multiple lists: Users can create separate lists for their home and work tasks, helping them stay organized and focused.
4. Item management: Users can add new items to their to-do list, mark items as completed, and remove items from the list.
5. Persistence: The app stores the to-do items in memory, ensuring the list is preserved as long as the server is running. However, the data is not persisted beyond the server session.
## Routes
1. /home: This route displays the to-do list for personal tasks. Users can add, mark as completed, or remove items in this list.
2. /work: This route displays the to-do list for work-related tasks. Users can add, mark as completed, or remove items specific to their work list.
## Prerequisites
Node.js: Ensure that you have Node.js installed on your system. You can download and install Node.js from the official website: https://nodejs.org
## Technologies Used
Node.js
Express.js
EJS (Embedded JavaScript) templating engine
