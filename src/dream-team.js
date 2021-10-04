import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let name = Array();
  if (Array.isArray(members)) {
    members.forEach(element => {
      if ((typeof(element) === "string") && (!(parseInt(element)))) {
        name.push(element.toUpperCase().split("").find(value => {
          if (value !== " ")
            return value;
        }))
      }
    });
    return name.sort().join("");  
  }
  else return false
}
