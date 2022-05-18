import {Cast} from "./Cast";

export class KnownFor {
  poster_path!: string;
  adult!: boolean;
  overview!: string;
  release_date!: string;
  original_title!: string;
  genre_ids!: any[];
  id!: number;
  media_type!: string;
  original_language!: string;
  title!: string;
  backdrop_path!: string;
  popularity!: number;
  vote_count!: number;
  video!: boolean;
  vote_average!: number;
  first_air_date!: string;
  origin_country!: string[];
  name!: string;
  original_name!: string;
  imdb_id!: string;
}
export class PersonDetail {
  adult!: boolean;
  also_known_as!: string[];
  biography!: string;
  birthday!: string;
  deathday!: any;
  gender!: number;
  homepage!: string;
  id!: number;
  imdb_id!: string;
  known_for_department!: string;
  name!: string;
  place_of_birth!: string;
  popularity!: number;
  profile_path!: string;
  known_for!: KnownFor[];
}
