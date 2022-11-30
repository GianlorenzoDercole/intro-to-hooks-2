// import {
//     useState,
//     useEffect
// } from 'react'
// export default function F() {


// //////////////////////////
//     const [recipes, setRecipes] = useState([])
//     const [item, setItem] = useState({
//         name: 'pie',
//         pic: '',
//         label: ''
//     })
// ////////////////////////////
//     const [showItem, setShowItem] = useState(true)
//     const [pic, setPic] = useState({pic: ''})
//     // const submitHandler = (e, item, setItem) => {
//     //     e.preventDefault()
//     //     setItem({name: e.target.value})
//     // }
//     // fetch the API data when the component mounts for the first time
//     // useEffect(() => {
//     //     // fetch data
//     //     fetch('https://api.edamam.com/api/food-database/v2/parser?app_id=01a47d3c&app_key=%20e804c10482b38a9d08949ceb033d51a2&ingr=milk&nutrition-type=cooking')
//     //     .then(res => res.json())
//     //         // console.log(response.json())
//     //     .then(information => {
//     //         console.log(information.parsed[0].food.nutrients.ENERC_KCAL)
//     //         // setInformation(information.text)
//     //     })
//     //     //set it in state
//     // }, []) // empty dependancy array means only run one time on initial component mount

//     useEffect(() => {

//         fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${item.name}&app_id=750505cc&app_key=4d9f46de2a4199d804217a16f108cf24`)
//         .then(res => res.json())
//         .then(information => {
//             console.log(information.hits[0].recipe.image)
//             // console.log(information.hits[1].recipe.label)
//             // console.log(information.hits[3].recipe.label)
//             const recipeInformation = [ information.hits[2].recipe.label  ]
//             // setRecipes( recipeInformation )
//             setItem({...item, pic: information.hits[2].recipe.image, label: recipeInformation})
//             // console.log(recipes)

//         })
//     }, [item.name])


//     const handleSubmit = (e) => {
//         e.preventDefault()

//             setShowItem(true)


//         }
//     return (
//         <div>

//             <div>
//                 <form onSubmit={e => handleSubmit(e, item, setItem)}>
//                     <label htmlFor='name-input'>name</label>
//                     <input
//                         type='text'
//                         // placeholder='name'
//                         id='name-input'
//                         value={item.name}
//                         onChange={(e) => { setItem({ ...item, name: e.target.value })
//                         setShowItem(false)}}
//                     />
//                     <button type='submit' >add</button>
//                 </form>
//             </div>


//             {/* <div>
//                 {item.name}
//             </div> */}



//             {/* {recipes[1]} */}

//             {/* <img src='https://edamam-product-images.s3.amazonaws.com/web-img/847/847f01b1c8ade1d802f913e2c7981ba5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLWVhc3QtMSJIMEYCIQCnAry5Yerw55zcpoLhP2V2d%2F0RXeUkhZgOSmFMB5JgLQIhANBOfeHxFX1z2feO1Q13AJtUZRspar7K%2F6FPQ13DihnCKswECGYQABoMMTg3MDE3MTUwOTg2IgwuIvm%2FzkjH5ZcXnkAqqQQ1BbbYpLQfHEXD7gRr5qRJ5P8LlSD71JJyBStWzZRAvcnVodhqdNh9y%2F7WwZ%2BYQMPkCpX%2FAvPE1zgtJaO5O5XNN7AJ%2FT5EAExw4unEI4xODeaiBQh3xD3rWjKUkoWzXTPWtJL9OBSaLldl870CeK0aCYiQS03yw8jXdhJqWxI5T%2B64A22UORfd0QcQaAshYiYmWH4bECFEKKk0YytFGXYE4nn9UqiomsPrjOQUAYcpMvDnxt3nzpoq24QJMksChpyC3WCfcyoEX4NvFk%2BrROszwlaKJj1TSVaQKcsCTrFVUO1Sro%2Ffn2dmVPfq1WkyF9wpJjG4Ra0RxBeTObDcbjYXhAOh7CmgjVGqNSGS6Sp%2FEmNMZME0I2A%2Fod3M9vzKyhriuLK2jHIXc%2BBjC7nyNxLqmUaCTxYPIYo8SHzt5MnfWILc3rSEEj7ZRao%2BFE3uSv8GHik6Kqq8KNMwb3pyz%2B%2BFZXgEaO10rf7xqQ0oTgpV0Kd9gWZnghRjhyjOZtR5thVWoukGO67ZqTRjX0uu%2FsX%2BvSLsP1zUhf4hC%2BSjYFtNgR0xwryceRKJz6uFZRme1fqCB%2BqyvzUljZUaXpbPQzv%2Bl0Q7mMILikyFxRL1f%2BhV8RtqFSKvmivfzwxdbX%2BcUW7Vrm7w422qjvRozH6k3hcd%2Fr2XfayQuEfvYZqq117jkWyflMPk9c77Bg9Qjnus99z5JWCTxTyXkNuhp3hFQHeVgIG%2BsSne6v4oMNLUmZwGOqgBvrNstuPu8vHi4nwhvCqiEKMcBz3%2F7E84LHCifJ7C8kQhzwwKvGoCsR7kqHeR0B8Y5cNo2t9rtSi2Iqnw06AEkS5Y%2BSbwNS6ygMQvKz6YIkl2pyZldLIZFjmGRQrg9jK3a6onJtBnwou6SsQ29ADycgeK%2FxxXlwy43csuCHDDJsc77DLi%2BOmHHw7AJlqzmTS6qdmSSBiBN9odEmgiKCaYRBAu2vI8eWMy&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221129T212530Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFES6CXUOY%2F20221129%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=60b44a0e4aac12b67c6bebcda7341669468bf24a1406889750ee9726af52d47b'></img> */}
//           { showItem ?
//             <img src={item.pic}></img> : ''

//             }

//             { showItem ? <div>
//                 {item.label}
//             </div> : '' }


//         </div>

//     )
// }


// import {
//     useState,
//     useEffect
// } from 'react'
// export default function Recipe() {

// //
// //////////////////////////
//     const [input, setInput] = useState('pie')
//     const [recipes, setRecipes] = useState([])
//     const [item, setItem] = useState({
//         pic: '',
//         label: ''
//     })
//     const [showItem, setShowItem] = useState(true)



//     useEffect(() => {

//         fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${input}&app_id=750505cc&app_key=4d9f46de2a4199d804217a16f108cf24`)
//         .then(res => res.json())
//         .then(information => {
//             // console.log(information.hits[0].recipe.image)

//             const recipeInformation = [ information.hits[2].recipe.label  ]

//             setItem({...item, pic: information.hits[2].recipe.image, label: recipeInformation})
//             const newRecipes = []
//             newRecipes.push(item)
//             console.log(newRecipes)
//             // setRecipes([...recipes, information.hits[2].recipe.label, information.hits[2].recipe.label])





//         })
//     }, [input])


//     const handleSubmit = (e) => {
//         e.preventDefault()

//             setShowItem(true)
//             // console.log(recipes)
//         }
//     return (
//         <div>

//             <div>
//                 <form onSubmit={e => handleSubmit(e, input, setInput)}>
//                     <label htmlFor='name-input'>name</label>
//                     <input
//                         type='text'
//                         // placeholder='name'
//                         id='name-input'
//                         value={input}
//                         onChange={(e) => { setInput(e.target.value)
//                         setShowItem(false)}}
//                     />
//                     <button type='submit' >add</button>
//                 </form>
//             </div>


//         { showItem ?
//             <img src={item.pic}></img> : ''

//         }

//         { showItem ?
//             <div>
//                 {item.label}
//             </div> : ''
//         }

//         </div>

//     )
// }
