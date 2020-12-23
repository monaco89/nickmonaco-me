import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GlobalStateContext } from "../utils/context"

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme.color};
  }
`

const BookDisplay = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 30px;
  height: 400px;
  margin-top: 50px;

  display: flex;
  align-items: top;
  justify-content: space-between;
  flex-direction: row;

  img {
    height: 100%;
    width: auto;
  }

  @media (max-width: 767px) {
    height: 220px;
    p {
      font-size: 0.8rem;
    }
  }
`
const BookInformation = styled.div`
  text-align: left;
  box-shadow: ${(props) => props.theme.boxShadow};
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  padding: 50px;
  border-radius: 8px;

  @media (max-width: 767px) {
    padding: 25px 10px 25px 10px;
  }
`

const BookTitle = styled.h2`
  font-size: 2rem;

  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`

const BookAuthor = styled.h3`
  font-size: 1.2rem;
  font-weight: normal;

  @media (max-width: 767px) {
    font-size: 0.9rem;
  }
`

// TODO Store ISBNs in md file, query using gatsby
const Books = ({ isbns = [9781524731663, 9781942788768] }) => {
  const state = useContext(GlobalStateContext)
  const [books, setBooks] = useState({})

  useEffect(async () => {
    const fetchData = async () => {
      const result = await axios(
        `https://openlibrary.org/api/books?bibkeys=${isbns.map(
          (isbn) => `ISBN:${isbn},`
        )}&jscmd=data&format=json`
      )

      setBooks(result.data)
    }

    fetchData()
  }, [])

  return (
    <Layout>
      <SEO title="Books" keywords={[`nick`, `monaco`, `books`]} />
      <OuterContainer theme={{ ...state.themeLoaded }}>
        <h1>Bookshelf</h1>
        {books &&
          Object.keys(books)
            .map((key) => [Number(key), books[key]])
            .map((book) => <Book book={book[1]} key={book[1].title} />)}
      </OuterContainer>
    </Layout>
  )
}

const Book = ({ book }) => {
  const state = useContext(GlobalStateContext)

  return (
    <BookDisplay>
      {book.cover && (
        <a href={book.url}>
          <img src={book.cover.large} alt={book.title} />
        </a>
      )}
      <BookInformation theme={{ ...state.themeLoaded }}>
        <BookTitle>
          <i>{book.title}</i>
        </BookTitle>
        <BookAuthor>
          By
          {book.authors[0].name}
        </BookAuthor>
        <p>{book.subtitle}</p>
        <p>{book.publish_date}</p>
        {/* // TODO Subject "tags" */}
        {/* <p>
          {book.subjects.slice(0, 3).map((sub) => (
            <span>{sub.name}, </span>
          ))}
        </p> */}
      </BookInformation>
    </BookDisplay>
  )
}

export default Books
