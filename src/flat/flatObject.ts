function createObject(inputObj) {
  let obj = {}

  // Loop through all properties in the input object
  for (const prop in inputObj) {
    // If the property contains a dot, split it into an array of keys
    if (prop.indexOf('.') !== -1) {
      const keys = prop.split('.')
      let nestedObj = obj

      // Loop through the keys and create nested objects as needed
      for (let i = 0; i < keys.length - 1; i++) {
        let key = keys[i]

        if (!nestedObj.hasOwnProperty(key)) {
          nestedObj[key] = {}
        }

        nestedObj = nestedObj[key]
      }

      // Set the value of the final key to the property value
      nestedObj[keys[keys.length - 1]] = inputObj[prop]
    } else {
      // If the property doesn't contain a dot, set it directly on the object
      obj[prop] = inputObj[prop]
    }
  }

  return obj
}
let obj = {
  name: 'John Doe',
  age: 30,
  'contact.email': 'johndoe@example.com',
  'contact.phone': '123-456-7890',
  'interests.0.name': 'Sports',
  'interests.0.subcategories.0': 'Football',
  'interests.0.subcategories.1': 'Basketball',
  'interests.0.subcategories.2': 'Baseball',
  'interests.1.name': 'Music',
  'interests.1.subcategories.0': 'Rock',
  'interests.1.subcategories.1': 'Pop',
  'interests.1.subcategories.2': 'Hip Hop',
}

console.log(createObject(obj))
