import { FormEvent, useState } from "react";
import { NewsArticle } from "@/models/NewsArticle";
import { Button, Form, Spinner, Alert } from "react-bootstrap";
import NewsArticlesGrid from "@/components/NewsArticlesGrid";
import Head from "next/head";

const SearchNewsPage = () => {
  // 01 create state
  // initial value to null - as in no value at first
  //  typescript doesn't know what searchResults value supposed to have
  //  by adding explicit value beside the useState
  //  a NewsArticle[] or null value - <NewsArticle[] | null>
  const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(
    null
  );
  // 02 Loding search results state to false
  // no need for type it is already a boolean value
  const [searchResultsLoading, setSearchResultsLoading] = useState(false);
  // 03 state when there is an error
  const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] =
    useState(false);

  // 04 form submit handler
  // when submit button is click it will trigger the form and it will call the handleSubmit function
  // this function will run
  // it will pass data with variable e
  // e for event with type of FormEvent import from react
  // FormEvent has type argument also HTMLFormElement
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // by default html forms refresh the page when submit button is clicked
    e.preventDefault();
    // will make a fetch request to the server
    const formData = new FormData(e.target as HTMLFormElement);
    // from the formData we will get the searchQuery
    // searchQueary from get method is from the Form name field
    // .toString() turn to string - ?.string means it can be null
    // .trim() removes any spaces in fromt and back
    const searchQuery = formData.get("searchQuery")?.toString().trim();

    // check if searchQuery is falsy or not
    if (searchQuery) {
      // test thru alert
      // alert(searchQuery)
      // 05
      try {
        setSearchResults(null);
        setSearchResultsLoadingIsError(false);
        setSearchResultsLoading(true);
        const response = await fetch("/api/search-news?q=" + searchQuery);
        const articles: NewsArticle[] = await response.json();
        setSearchResults(articles);
      } catch (error) {
        console.error(error);
        setSearchResultsLoadingIsError(true);
      } finally {
        setSearchResultsLoading(false);
      }
    }
  }

  return (
    <>
      {/* 06 add meta data */}
      <Head>
        {/* key overwrites other title value */}
        <title key="title">Search News App - NextJS</title>
      </Head>
      <main>
        <h1>Search News</h1>
        <Alert>
          This page uses <strong>client-side data fetching</strong> to show
          fresh data for every search. Request are handled by our backend via{" "}
          <strong>API troutes</strong>
        </Alert>
        <Form onSubmit={handleSubmit}>
          {/* controlId connects the label to input field */}
          {/* when the label is clicked it will redirect to the input box */}
          <Form.Group className="mb-3" controlId="search-input">
            <Form.Label>Search Query</Form.Label>
            {/* Imput box for bootstrap */}
            <Form.Control
              // passed into the searchQuery function
              name="searchQuery"
              placeholder="E.g. politics, sport, ..."
            />
          </Form.Group>
          {/* type=submit connects the button to the Form */}
          <Button
            type="submit"
            className="mb-3"
            // disabled when searchResultsLoading is true
            disabled={searchResultsLoading}
          >
            Search
          </Button>
        </Form>
        <div className="d-flex flex-column align-items-center">
          {searchResultsLoading && <Spinner animation="border" />}
          {searchResultsLoadingIsError && (
            <p>Something went wrong. Please try again</p>
          )}
          {searchResults?.length === 0 && (
            <p>Nothing Found. Try Different Query</p>
          )}
          {searchResults && <NewsArticlesGrid articles={searchResults} />}
        </div>
      </main>
    </>
  );
};

export default SearchNewsPage;
