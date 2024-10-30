export default function Step3({ values, saveValues, handlePrevious, handleSave }) {
    return (
        <>
            <div>
                <label htmlFor="company-name">Company name</label>
                <input
                    type="text"
                    id="company-name"
                    name="company-name"
                    value={values.companyName}
                    onChange={(e) => saveValues({ companyName: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="company-code">Company code</label>
                <input
                    type="text"
                    id="company-code"
                    name="company-code"
                    value={values.companyCode}
                    onChange={(e) => saveValues({ companyCode: e.target.value })}
                />
            </div>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleSave}>Save</button>
        </>
    );
}
