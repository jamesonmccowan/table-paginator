## Table Paginator

A small JavaScript function for taking large tables and breaking them into pages.
This function can also paginate pretty much anything that you can provide an element selector function for.

### How to Use It
* Download the "pagination.js" file
* Include it in a script tag on the html page you want to use it on
* Run the paginator function with a proper configuration object
* Done

Check out the _examples.html_ file for examples of this in use.

### Configuration Object Attributes
**get\_rows** : Function used to select rows to do pagination on.
If no function is provided, checks for a config.table element and looks for rows in there to page.

**box** : Empty element that will have page buttons added to it.
If no config.box is provided, but a config.table is, then the page buttons will be added using the table.

**table** : Table element to be paginated not required if a get\_rows function is provided.

**rows\_per\_page** : Number of rows to display per page. default number is 10.

**page** : Page to display. Default page is 1.

**box_mode** : "list", "buttons", or function. determines how the page number buttons are built.
 * "list" builds the page index in list format and adds class "pagination" to the ul element. Meant for use with bootstrap
 * "buttons" builds the page index out of buttons
 * If this field is a function, it will be passed the configuration object as its only param and assumed to build the page index buttons

**page\_options** : false or `[{text: , value: }, ... ]` used to set what the dropdown menu options are available, resets rows\_per\_page value.
False prevents the options from being displayed.
`[{text: , value: }, ... ]` allows you to customize what values can be chosen, a value of 0 will display all the table's rows.

The default setup is
`[
    { value: 5,  text: '5'   },
    { value: 10, text: '10'  },
    { value: 20, text: '20'  },
    { value: 50, text: '50'  },
    { value: 100,text: '100' },
    { value: 0,  text: 'All' }
]`

**active_class** : Set the class for page buttons to have when active. Defaults to "active".

**disable** : true or false, shows all rows of the table and hides pagination controlls if set to true.

**tail\_call** : Function to be called after paginator is done, and after every turn of the page, or changing of the number of rows per page.

