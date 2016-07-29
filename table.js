function create_sample_table(parentNode, head, body, foot, data) {
    if (typeof head == "undefined") {head = true;}
    if (typeof body == "undefined") {body = true;}
    if (typeof foot == "undefined") {foot = true;}
    if (!data) {
        data = {
            "head": [ "Title", "Author", "Publishing Date" ],
            "body": [
                [ "On Becoming a Person: A Therapist's View of Psychotherapy",  "Carl Rogers",                      "September 7, 1995"     ],
                [ "Psychoanalysis and Religion",                                "Erich Fromm",                      "September 10, 1959"    ],
                [ "The Farther Reaches of Human Nature",                        "Abraham H. Maslow",                "October 1, 1993"       ],
                [ "What Life Should Mean to You",                               "Ludwig Hain, Alfred Adler",        "November 10, 2010"     ],
                [ "Walden Two",                                                 "B. F. Skinner",                    "1948"                  ],
                [ "Childhood and Society",                                      "Erik H. Erikson",                  "September 17, 1993"    ],
                [ "The Doctor and The Soul: An Introduction to Logotherapy",    "Victor E. Frankl",                 "1962"                  ],
                [ "Our Inner Conflicts: A Constructive Theory of Neurosis",     "Karen Horney",                     "October 17, 1992"      ],
                [ "Cognitive therapy and the emotional disorders",              "Aaron T. Beck",                    "October 1, 1979"       ],
                [ "Humanistic Psychotherapy: The Rational-Emotive Approach",    "Albert Ellis",                     "October, 1974"         ],
                [ "The Basic Writings of Sigmund Freud",                        "Sigmund Freud",                    "July 10, 1995"         ],
                [ "I Ching, The Oracle of the Cosmic Way",                      "Carol K. Anthony",                 "November 25, 2002"     ],
                [ "Baboon Mothers and Infants",                                 "Jeanne Altmann",                   "1980"                  ],
                [ "The Autobiography of Charles Darwin: 1809-1882",             "Charles Darwin",                   "September 17, 1993"    ],
                [ "A sacred unity: Further steps to an ecology of mind",        "Gregory Bateson",                  "1991"                  ],
                [ "Life Cycles: Reflections of an Evolutionary Biologist",      "John Tyler Bonner",                "April 3, 1995"         ],
                [ "Family Evaluation: An Approach Based on Bowen Theory",       "Michael E. Kerr, Murray Bowen",    "October 17, 1988"      ],
                [ "A Secure Base",                                              "John Bowlby",                      "August 22, 1990"       ],
                [ "The Integrative Neurobiology of Affiliation",                "Carol Sue Carter",                 "June 15, 2006"         ],
                [ "Psychobiology of reptilian reproduction",                    "David Crews",                      "September 26, 1975"    ],
                [ "Descartes Error: Emotion, Reason and the Human Brain",       "Antonio R Damasio",                "2006"                  ],
                [ "Homicide",                                                   "Martin Daly, Margo Wilson",        "January 1, 1988"       ],
                [ "On the Origin of Species",                                   "Charles Darwin",                   "November 24, 1859"     ],
                [ "The Descent of Man",                                         "Charles Darwin",                   "February 24, 1871"     ],
                [ "Out of the Crisis",                                          "W Edwards Deming",                 "October 2, 2000"       ],
                [ "Good Natured",                                               "Frans B. M. de Waal",              "October 1997"          ],
                [ "Ideas And Opinions",                                         "Albert Einstein",                  "June 6, 1995"          ],
                [ "Time Frames:The Evolution of Punctuated Equilibria",         "Niles Eldredge",                   "1989"                  ],
                [ "Shot in the Heart",                                          "Mikal Gilmore",                    "August 1, 1995"        ],
                [ "Emotional Intelligence: Why It Can Matter More Than IQ",     "Daniel Goleman",                   "September 27, 2005"    ],
                [ "The Chimpanzees of Gombe: Patterns of Behavior",             "Jane Goodall",                     "September, 1986"       ],
                [ "Why males exist: An inquiry into the evolution of sex",      "Fred H. Hapgood",                  "1979"                  ],
                [ "The Roots of Human Behavior",                                "Myron A. Hofer",                   "July 1981"             ],
                [ "Sacred Hoops: Spiritual Lessons of a Hardwood Warrior",      "Phil Jackson",                     "November 7, 1996"      ],
                [ "The Possible and the Actual",                                "Francois Jacob",                   "January 12, 1982"      ],
                [ "The Undiscovered Self",                                      "Carl G. Jung",                     "February 7, 2006"      ],
                [ "Out of Control",                                             "Kevin Kelly",                      "April 14, 1995"        ],
                [ "The Emotional Brain",                                        "Joseph Ledoux",                    "March 27, 1998"        ],
                [ "Families and Family Therapy",                                "Salvador Minuchin",                "1974"                  ],
                [ "Will Therapy and Truth and Reality",                         "Otto Rank",                        "January 1, 1917"       ],
                [ "Sex and Friendship in Baboons",                              "Barbara B. Smuts",                 "December 15, 1999"     ],
                [ "The Alchemy of Finance",                                     "George Soros",                     "August 1, 2003"        ],
                [ "Lives of a Cell: Notes of a Biology Watcher",                "Lewis Thomas",                     "February 23, 1978"     ],
                [ "The Holy Bible: King James Version",                         "Various Authors",                  "1611"                  ],
                [ "The Battered Women",                                         "Lenore Edna Walker",               "1979"                  ],
                [ "The Beak of the Finch: A Story of Evolution in Our Time",    "Jonathan Weiner",                  "May 30, 1995"          ],
                [ "Beyond Natural Selection",                                   "Robert Wesson",                    "January 29, 1993"      ],
                [ "The Moral Sense",                                            "James Q. Wilson",                  "November 6, 1997"      ],
                [ "Anna Freud: A Biography",                                    "Elisabeth Young-Bruehl",           "July, 1994"            ],
            ],
            "foot": [ "Title", "Author", "Publishing Date" ],
        };
    }
    var table = document.createElement("table");
    var tr, th, td;
    // header
    tr = document.createElement("tr");
    var headers = data.head || [];
    for (var i=0;i<headers.length;i++) {
        th = document.createElement("th");
        th.innerHTML = headers[i];
        tr.appendChild(th);
    }
    if (head) {
        var thead = document.createElement("thead");
        thead.appendChild(tr);
        table.appendChild(thead);
    } else {
        table.appendChild(tr);
    }
    // end header

    // body
    var table_body = data.body || [];
    if (body) {
        var tbody = document.createElement("tbody");
    }
    for (var i=0;i<table_body.length;i++) {
        tr = document.createElement("tr");
        for (var j=0;j<table_body[i].length;j++) {
            td = document.createElement("td");
            td.innerHTML = table_body[i][j];
            tr.appendChild(td);
        }
        if (body) {
            tbody.appendChild(tr);
        } else {
            table.appendChild(tr);
        }
    }
    if (body) {
        table.appendChild(tbody);
    }
    // end body

    // footer
    if (foot) {
        var tfoot = document.createElement("tfoot");
        tr = document.createElement("tr");
        var footer = data.foot || [];
        for (var i=0;i<footer.length;i++) {
            th = document.createElement("th");
            th.innerHTML = footer[i];
            tr.appendChild(th);
        }
        tfoot.appendChild(tr);
        table.appendChild(tfoot);
    }
    // end footer

    if (parentNode) {
        parentNode.appendChild(table);
    }
    //return table;
}
