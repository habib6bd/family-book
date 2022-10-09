// const title = "To Do Title"
// const description = "This is my description. Here I have everyting i have input"
const date = new Date();
const dateName = date.getDate();
const dateMonth = date.getMonth();
const currentYear = date.getFullYear();

function Card(props) {
    const {titleText, desText} = props;
    return <div className='card'>
        <h3 className='cardTitle'>{titleText}</h3>
        <p className='cardDes'>{desText}</p>
        <p className='cardFooter'>{dateName + "/" + dateMonth + "/" + currentYear}</p>
    </div>
}
export default Card;