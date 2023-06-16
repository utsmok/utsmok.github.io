+++
title="A free scholarly search engine that blows competitors out of the water: The Lens" 
date=2023-06-09
draft = true
[taxonomies]
categories=["Search tools"]
tags=["systematic search", "guides", "scholarly database", "patents"]

+++

!!! update metadata
text below is from a mail sent to Thomas Hugen - 6 june 2023
Grab some ideas from this mail to make a new post

Some pointers for using boolean/keyword-search based tools & databases:

Scopus is an abstract-database and has a heavily curated selection of items. The info you need might be described in other parts of articles, e.g. in the methods area, without being mentioned in the title or abstract. It might also be possible that Scopus doesn't index the papers you're looking for.
Your topic isn't constrained to a single subject: it sits on the overlap of mathematics & computer science. 
This makes it hard to recommend a single database to search for info, luckily it isn't that difficult to translate search queries to multiple databases once we have one set up. 
Even if a database is fully indexed by Scopus (like IEEE for instance) it's a good idea to repeat the search in the underlying database for 3 reasons: Scopus could be behind in updates; the original database lets you search in more detail (e.g. full text or specific keyword options); and the original database could have more options/filters/keywords which will give you different results. The same goes the other way: an aggregator like Scopus will add extra info themselves as well, like SciVal topics or keyword analyses. 
Specific databases for math & compsci include:
 https://mathscinet.ams.org/, https://epubs.siam.org/search/advanced, https://zbmath.org/, https://arxiv.org, https://ieeexplore.ieee.org/Xplore/home.jsp, https://dblp.org/

Another highly recommended step is to use other aggregated search engines in addition to Scopus. Web of Science (https://www.webofscience.com/wos/woscc/advanced-search) is the most well-known competitor: it has a different database than Scopus so you will get different results, and on top of that it's also a full-text database with again different options for searching.  
You're probably also familiar with Google Scholar, which I wouldn't recommend for systematic searches, but can be very helpful in an exploratory phase. It has (probably??) the largest collection of papers of any scholarly database, Google doesn't share details about their algorithm and database unfortunately. Semantic Scholar (https://www.semanticscholar.org/) is a useful alternative to try as well: its queries are not structured at all, but it uses LLM's to find relevant works which can be helpful in the same way as google scholar. It's also a bit more curated than google scholar and it has quite powerful citation linking options. 
Another awesome (free!) option is the Lens (https://www.lens.org/lens/search/scholar/structured) which is built on top of openly available databases. It has a larger collection than scopus or web of science, and has great options for structured searching (also full-text) and analysing the results to improve your queries. 
To give you an example using lens.org, I copied over your query and found 79 results,  but a lot of them are duplicates (same articles but pulled from different back-end databases mostly). I see a lot of overlap, but maybe you'll find a new relevant source in the list. However, it's still a small number of results: it could be that this field is -extremely- niche, or it could be that your term already narrows your results too much. 

Most of the time it's a good idea to first do a very broad search, with only a few terms and no filters to see how much hits we get before we go any further. For example, when I reduce the search to look for graph colouring & decision diagrams  (I used the ~ operator for fuzzy and/or proximity search here) I get 80 results, including a lot of overlap with your query. This indicates to me that this is a tiny field of study and/or researchers are using different words to describe this subject. 

 

It's also possible to use completely different search processes: for instance, we can open up the list of papers that cite the papers that were found by the query, to see if there's any relevant works in there. There are also tools available that are specifically tailored for these types of searches, like https://inciteful.xyz/. Example: I started inciteful by inputting W-J van Hoeve's 2021 paper, and added some papers that I recognized from the searches and others that seemed relevant based on the titles only, and got the following list:

 

[1]

M. P. Castro, A. A. Cire, and J. C. Beck, “Decision diagrams for discrete optimization: A survey of recent advances,” INFORMS J. Comput., vol. 34, no. 4, pp. 2271–2295, Jul. 2022, doi: 10.1287/ijoc.2022.1170.

[2]

L. Ferrarini and S. Gualandi, “Total coloring and total matching: Polyhedra and facets.,” arXiv: Discrete Math., vol. 303, no. 1, pp. 129–142, Nov. 2022, doi: 10.1016/j.ejor.2022.02.025.

[3]

P. Galinier, J.-P. Hamiez, J.-K. Hao, and D. Porumbel, “Recent advances in graph vertex coloring,” in Intelligent systems reference library, I. Zelinka, V. Snášel, and A. Abraham, Eds., 2013, pp. 505–528. [Online]. Available: http://doi.org/https://doi.org/10.1007/978-3-642-30504-7_20

[4]

A. Karahalios and W.-J. Van Hoeve, “Variable ordering for decision diagrams: A portfolio approach,” Constraints, vol. 27, no. 1–2, pp. 116–133, Apr. 2022, doi: 10.1007/s10601-021-09325-6.

[5]

D. R. Morrison, E. C. Sewell, and S. H. Jacobson, “Solving the pricing problem in a branch-and-price algorithm for graph coloring using zero-suppressed binary decision diagrams,” arXiv: Data Struct. Algorithms, 2014, doi: 10.48550/arxiv.1401.5820.

[6]

W.-J. Van Hoeve, “Graph coloring with decision diagrams,” Math. Programming, vol. 192, no. 1–2, pp. 631–674, Mar. 2022, doi: 10.1007/s10107-021-01662-x.

[7]

D. C. Porumbel, “Heuristic algorithms and learning techniques: applications to the graph coloring problem,” 4OR, vol. 10, no. 4, pp. 393–394, Dec. 2012, doi: 10.1007/s10288-011-0193-5.

[8]

D. Bergman and L. Lozano, “Decision diagram decomposition for quadratically constrained binary optimization,” INFORMS J. Comput., vol. 33, no. 1, pp. 401–418, Jan. 2021, doi: 10.1287/ijoc.2019.0938.

[9]

D. Chalupa and P. Nielsen, “Parameter-free and cooperative local search algorithms for graph colouring,” Soft Comput., vol. 25, no. 24, pp. 15035–15050, Dec. 2021, doi: 10.1007/s00500-021-06347-3.

[10]

D. R. Morrison, J. J. Sauppe, E. C. Sewell, and S. H. Jacobson, “A wide branching strategy for the graph coloring problem,” INFORMS J. Comput., vol. 26, no. 4, pp. 704–717, Nov. 2014, doi: 10.1287/ijoc.2014.0593.

[11]

S. F. Galán, “Simple decentralized graph coloring,” Comput. Optim. Appl., vol. 66, no. 1, pp. 163–185, Jan. 2017, doi: 10.1007/s10589-016-9862-9.

[12]

M. Horn, J. Maschler, G. R. Raidl, and E. Rönnberg, “A∗-based construction of decision diagrams for a prize-collecting scheduling problem,” Comput. Oper. Res., vol. 126, p. 105125, Feb. 2021, doi: 10.1016/j.cor.2020.105125.

[13]

D. Davarnia and W.-J. Van Hoeve, “Outer approximation for integer nonlinear programs via decision diagrams,” Math. Programming, vol. 187, no. 1–2, pp. 111–150, May 2021, doi: 10.1007/s10107-020-01475-4.

[14]

D. R. Morrison, E. C. Sewell, and S. H. Jacobson, “Solving the pricing problem in a branch-and-price algorithm for graph coloring using zero-suppressed binary decision diagrams,” INFORMS J. Comput., vol. 28, no. 1, pp. 67–82, Feb. 2016, doi: 10.1287/ijoc.2015.0667.

[15]

R. Lewis, J. Thompson, C. Mumford, and J. Gillard, “A wide-ranging computational comparison of high-performance graph colouring algorithms,” Comput. Oper. Res., vol. 39, no. 9, pp. 1933–1950, Sep. 2012, doi: 10.1016/j.cor.2011.08.010.

[16]

S. Gualandi and F. Malucelli, “Exact solution of graph coloring problems via constraint programming and column generation,” INFORMS J. Comput., vol. 24, no. 1, pp. 81–100, Feb. 2012, doi: 10.1287/ijoc.1100.0436.

[17]

D. Brélaz, “New methods to color the vertices of a graph,” Commun. ACM, vol. 22, no. 4, pp. 251–256, Apr. 1979, doi: 10.1145/359094.359101.

