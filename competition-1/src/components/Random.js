function Random({ min, max }) {
    let number = Math.floor(Math.random() * (max - min + 1) ) + min;
    return (
        <section className="Random">
        <p>Random value between {min} and {max} = {number}</p>
        </section>
    );
}

export default Random; 
