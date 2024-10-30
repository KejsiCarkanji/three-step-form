export default function Step1({ values, saveValues, handleNext }) {
    return (
        <>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={values.name}
                    onChange={(e) => saveValues({ name: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="surname">Surname</label>
                <input
                    type="text"
                    id="surname"
                    value={values.surname}
                    onChange={(e) => saveValues({ surname: e.target.value })}
                />
            </div>
            <button onClick={handleNext}>Next</button>
        </>
    );
}
