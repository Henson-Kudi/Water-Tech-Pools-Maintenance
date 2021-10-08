// import React, {useState} from 'react'
// import './NewProject.css'
// import {storage} from './firebase/index'
// import {baseURL} from './axios'

// function NewProject() {

//     const [project, setProject] = useState({})
//     const [image, setImage] = useState(null)
//     const [imageUrl, setImageUrl] = useState(null)

//     const handleChange = async (e)=>{
//         const file = e.target.files[0]
//         const storageRef = await storage.ref(`${file.lastModified}`)
//         const fileRef = await storageRef.child(`${file.lastModified}`)
//         await fileRef.put(file).then(async(res)=>{
//             const response = await res
//             console.log('Uploaded image : ', response)
//         })
//         await setImageUrl(await fileRef.getDownloadURL())
//         // setImage(file)
//     }
//     console.log(imageUrl);
//     const handleChange1 = (e)=>{
//         const {name, value} = e.target
//         setProject(prev => ({
//             ...prev,
//             [name] : value,
//         }))
//     }

//     const postProject = async(data)=>{
//         await baseURL.post('/new-project', data).then(async res =>{
//             const response = await res.data
//             console.log(response);
//         })
//     }

//     const getImageUrl = async(imageObject) => {
        
//     }

//     const postFunction = async ()=>{
//         const submitData = {
//             ...project,
//             imageUrl : imageUrl
//         }

//         await postProject(submitData)
//     }

//     const handleSubmit = async()=>{
        
//         await getImageUrl(image)
        
//         await postFunction()
//     }

//     return (
//         <div>
//             <input type="file" name="project" onChange={handleChange} />
//             <input type="text" name="title" id="title" value={project.title} onChange={handleChange1} placeholder='Enter image title' /> <br/>
//             <input type="text" name="description" id="description" value={project.description} onChange={handleChange1} placeholder='Enter image description' /> <br/>

//             <img src={imageUrl || ''} alt={project.title} /> <br/>
//             <button className="btn" onClick={handleSubmit} style={{
//                 backgroundColor: imageUrl ? 'blue' : 'gray'
//             }}>Submit</button>
//         </div>
//     )
// }

// export default NewProject
