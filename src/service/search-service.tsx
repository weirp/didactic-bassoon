export function doSearch(
                  text: string, 
                  subtext: string, 
                  caseSensitive: boolean,
                  multipleMatches: boolean): number[] {
  if (text === "" || subtext === "") {
    return [];
  }
  return srchHelper(0,
    caseSensitive ? text : text.toLowerCase(),
    caseSensitive ? subtext : subtext.toLowerCase(),
    multipleMatches);
}

function srchHelper(offset: number, stringToSearch: string, searchFor: string,
  multipleMatches: boolean): number[] {
  let r = stringToSearch.search(searchFor);
  if (r === -1 || stringToSearch === "") {
    return [];
  } else {
    let pos: number = (r + offset + 1);
    if (!multipleMatches) {
      return [pos];
    }
    let recurs = srchHelper(r + offset + 1, stringToSearch.substr(r + 1), searchFor, multipleMatches);

    recurs.unshift(pos);
    return recurs;
  }
}