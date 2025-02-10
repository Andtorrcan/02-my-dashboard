export interface Pokemon {
   abilities:                Ability[];
   base_experience:          number;
   cries:                    Cries;
   forms:                    Form[];
   game_indices:             GameIndex[];
   height:                   number;
   held_items:               any[];
   id:                       number;
   is_default:               boolean;
   location_area_encounters: string;
   moves:                    Array<MoveClass | string>;
   name:                     string;
   order:                    number;
   past_abilities:           string;
   past_types:               string;
   species:                  string;
   sprites:                  string;
   stats:                    string;
   types:                    string;
   weight:                   number;
}

export interface Ability {
   ability:   Form;
   is_hidden: boolean;
   slot:      number;
}

export interface Form {
   name: string;
   url:  string;
}

export interface Cries {
   latest: string;
   legacy: string;
}

export interface GameIndex {
   game_index: number;
   version:    Form;
}

export interface MoveClass {
   move:                  Form;
   version_group_details: Array<VersionGroupDetailClass | string>;
}

export interface VersionGroupDetailClass {
   level_learned_at:  number;
   move_learn_method: Form;
   version_group:     Form;
}
