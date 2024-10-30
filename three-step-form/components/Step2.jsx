export default function Step2({ values, saveValues, handleNext, handlePrevious }) {
    return (
        <>
            <div>
                <label htmlFor="age">Age</label>
                <input
                    type="text"
                    id="age"
                    name="age"
                    value={values.age}
                    onChange={(e) => saveValues({ age: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="gender">Gender</label>
                <input
                    type="text"
                    id="gender"
                    name="gender"
                    value={values.gender}
                    onChange={(e) => saveValues({ gender: e.target.value })}
                />
            </div>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </>
    );
}
