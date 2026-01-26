const Practice = () => {

    const submitData = (event) => {
        event.preventDefault()
        const Form = "Nothi"
        alert(`${Form} Submitted Succesfully`);
    }
    return (
        <div>
            <form onSubmit={submitData}>
                <input type="text"  placeholder="Write Here"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Practice;