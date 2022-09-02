import './findCharForm.scss';

const FindCharForm = () => {
    return (
        <form className="form">
            <h2 className="form__text">Or find a character by name:</h2>
            <input 
            id="name"
            type="text" />
            <button className="form__button">FIND</button>
        </form>
    )
}

export default FindCharForm;