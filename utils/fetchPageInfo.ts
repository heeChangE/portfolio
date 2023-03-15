import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { PageInfo } from "../typings";

const query = groq`
*[_type == "pageInfo"][0]
`;

export const fetchPageInfo = async () => {
  /**const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  ); */

  const res = await sanityClient.fetch(query);

  //const data = await res.json();
  const pageInfo: PageInfo = res;

  return pageInfo;
};
