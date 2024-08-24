// function CoreConcept(props){
//     return(
//         <li>
//             <img src={props.image} alt={props.title} />
//             <h1>{props.title}</h1>
//             <p>{props.description}</p>
//         </li>
//     );
// }

// function CoreConcept({concept}){
//     return(
//         <li>
//             <img src={concept.image} alt={concept.title} />
//             <h1>{concept.title}</h1>
//             <p>{concept.description}</p>
//         </li>
//     );
// }

// we can also use 'destructuring' instead of 'props' in component.
export default function CoreConcept({image, title = 'TITLE', description}){
    return(
        <li>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <p>{description}</p>
        </li>
    );
}