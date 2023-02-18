import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const client = new ApolloClient({
    uri: "https://api.hashnode.com/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query {
        user(username: "dgnydn") {
          publication {
            posts(page: 0) {
              _id
              coverImage
              slug
              title
              brief
              dateAdded
              dateUpdated
            }
          }
        }
      }
    `,
  });

  return NextResponse.json(data);
}
