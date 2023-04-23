import fetch from "node-fetch";
const url = 'https://jsonplaceholder.typicode.com/posts'

const getResult = async () => {
  try {
    const resp = await fetch(url)
    if (!resp.ok) {
      const msg = `There was an error "${resp.status} ${resp.statusText}"`
     throw new Error(msg)
    }

    const result = await resp.json()
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
getResult();

   


