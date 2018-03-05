## Project Idea

News/video collection for fans of Liverpool Football Club to read and share new items or find information about league standings or upcoming games.

## Features

* ability for Users to read posts - follow links to external content
* ability for Users to post new items including links to external content/videos
* pages to display upcoming matches and league table (fetched from API)

## Wireframes included:

1.  Home Page: Header with page logo/name, login link, nav bar. Main content includes recent posts and upcoming games.

2.  List View: Basic list view for all posts.

3.  New Post: Create a new item. Provide content or links to external content with description.

4.  Edit/Delete Post: Edit an existing post. Also includes button to delete a post.

5.  Standings: I will pull the live league standings from an API and display a box with all 20 teams + wins/losses etc.

## Model

1.  Post: this model will contain information pertaining to:
    * author: required
    * content: required
    * link to external content: optional
    * date created: default value
    * comments: (new schema with author/content?)

## MVP

* Users can read all posts - completed 3/5
* Users can add a new post - completed 3/5
* Users can edit an existing post - completed 3/5

## Bronze

* Users can embed videos on a video page similars to news page completed 3/5
* API fetch for information (league standings + upcoming matches) -completed 3/5

## Silver

* Users can create an account and sign in. all edits/deletes to that users content will be authenticated for only that user.
* Users can comment on other posts

## Gold

* keyword searching of all posts
* display further information (player profiles, etc.)
