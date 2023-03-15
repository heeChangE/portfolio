import { sanityClient } from "@/sanity";
import { Experience } from "@/typings";
import { groq } from "next-sanity";

const query = groq`
*[_type == "experience"] {
  ...,
  technologies[]->
}
`;

export const fetchExperiences = async () => {
  /** const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);*/

  const res = await sanityClient.fetch(query);

  //const data = await res.json();
  const experiences: Experience[] = res;
  //data.experiences;

  return experiences;
};
