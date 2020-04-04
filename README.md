# Welcome to “The Guardian” Web application!
## Story
As a user, I would like to search for interesting articles from the The Guardian.
## Requirements
Create the “The Guardian” web application with the following details.

## Client Side
  ### Home-page
  - This page by default should display all articles without any search filter applied
  - Has a search input (without submit button) that allows a user to search articles by a
  search string
  - Automatically update the list given this search results without reloading the page
  - Has an option to order the search results by newest first or oldest first
  - It should display a detail-page when select on each single result article
  ### Details-page
  - Show the article detail
  - Able to navigate back to the home-page.

## Server Side
  - Data-source is The Guardian API
  - Two End points:
    - Create one endpoint that returns list of Articles for the front-end Home-page
    - Create another endpoint to get Details of the specific Article for Details-page
  - Articles are to be fetched from The Guardian API
  - Endpoint should support search and Pagination