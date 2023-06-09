+++
title="inciteful.xyz: easily find more sources based on your current bibliography" 
date=2023-05-18
[taxonomies]
categories=["Search tools"]
tags=["citations", "guides", "tools"]
+++


Most people are used to finding literature by doing keyword searches on platforms like [Scopus](www.scopus.com) or [Google Scholar](scholar.google.com). However, there are lots of other ways to find scholarly works. For example, you can use your current bibliography's citations and references to find more related works. Let's dive into my favorite example: [inciteful.xyz](https://inciteful.xyz/).

<!-- more -->
# inciteful.xyz overview
![inciteful logo](logo.png)

> [inciteful.xyz](https://inciteful.xyz/) 
> 
> Recommends articles based on a large citation graph using simple but powerful queries
> 
> Free & open source
> 
> Uses data from [OpenAlex](https://openalex.org/)

# Screenshots
{{ gallery() }}

[inciteful.xyz](https://inciteful.xyz/) is a wonderful tool that uses a list of papers that you provide to produce a lot of recommendations in clear, concise tables. It's completely free and open source, and also uses completely free and open databases to source its information. 
inciteful has been around for a while. Initally using Microsoft Academic graph, moving on to Semantic Scholar's database afterwards, and recently (february 2023) improved things by switching to using OpenAlex as the main source for papers.

So, how does it work? You start by supplying it with one or multiple papers, books, or any other item indexed by OpenAlex. You can do this either by entering a DOI, paper title, pubmed URL, or arXiv URL; or by importing a BibTeX file containg your sources. If you use Zotero (highly recommended!) you can also [install the inciteful zotero plugin](https://github.com/inciteful-xyz/inciteful-zotero-plugin) that lets you add papers directly from Zotero, which makes things even easier.

Once you've entered your papers, the tool will look up all citations of the papers, both forwards (papers that cite the input papers) and backwards (papers that have been cited by the input papers). Then it will do a second round, grabbing the forwards and backwards citations of *all the papers it found in the first round*. You can imagine this will produce a gigantic list of papers. inciteful doesn't just give this in a list: it produces a graph with the most important papers, including how they are related. In my experience: not -that- useful, and there are better tools to make graphs like that. 

The main draw are the lists it generates, each sorted by a different algorithm or parameter. There's a list with similar papers (they cite the same papers that you used as input), seminal works (older papers with tons of citations), review papers (papers with lots of references), recent gems (new papers with relatively large amounts of citations), and more. See an interesting paper? You can add it to your list by pressing on the purple plus next to it. You can do this as many times as you want. Done? You can run the process again, now with the added papers taken into acount. You can of course also click on each found paper to get more information and a direct link to the page where it's published. 

Still not satisfied? It's even possible to edit the SQL queries that produce the results! Once you're done you can export all the papers you added in the format you like, the easiest option is to use Zotero (as is almost always the case).

*Want to see which tools can help you do research? Check out [the main list](@/list/_index.md) of information tools on this site.*