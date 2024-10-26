import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosAPI from "../axiosAPI.ts";

interface Quote {
  id: string;
  quote: string;
  text: string;
  author: string;
}

const Quotes = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getQuotes = async () => {
      try {
        const url = categoryId
          ? `/quotes.json?orderBy="category"&equalTo="${categoryId}"`
          : `/quotes.json`;

        const quotesResponse = await axiosAPI.get(url);
        const data = quotesResponse.data;

        const quotes = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setQuotes(quotes);
      } catch (error) {
        console.error(error);
      }
    };
    getQuotes();
  }, [categoryId]);

  return (
    <div>
      {quotes.map((quote) => (
        <div key={quote.id} className="border rounded-4 border-2 p-3 mb-4">
          <p>{quote.text}</p>
          <p className="mb-0"> - {quote.author} - </p>
        </div>
      ))}
    </div>
  );
};

export default Quotes;
