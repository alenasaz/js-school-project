import axios from "axios"
export const get =async (url: string)=> {
    const data =  await axios
    .get(url)
    .then((data) => data.data)
    .catch((err) => console.log(err))
    return data
}