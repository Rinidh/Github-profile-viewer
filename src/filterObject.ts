export function filterObject(
  originalObject: { [key: string]: any }, //first param is an object with many keys (of type string) holding values of any type
  keysToInclude: string[] //2nd param is an array of strings
  ): { [key: string]: any } //the return value of the filterObject func is an obj with many keys (of type string) holding values of any type
  
  {
    let shortenedObject: { [key: string]: any } = {}

    for(const key of keysToInclude) {
      if(originalObject.hasOwnProperty(key)) { //hasOwnProperty() returns true if that key is found
        shortenedObject[key] = originalObject[key];//set new value if key already exists, or create a new key in shortenedObject with the value
      }
    }

    return shortenedObject;
}