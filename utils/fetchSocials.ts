import { Social } from "@/typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
*[_type == "social"]
`;

export const fetchSocials = async () => {
  //const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

  const res = await sanityClient.fetch(query);

  //const data = await res.json();
  const socials: Social[] = res;
  //data.socials;

  return socials;
};
