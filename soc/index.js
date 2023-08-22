document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", saveData);
});

function saveData() {
    const Name = document.getElementById("name").value;
    const date = document.getElementById("Date").value;
    const disease = document.getElementById("Disease").value;

    const xmlString = `
    <details>
    <fullName name='${Name}' >
    <date='${date}'></=>
    <disease ='${disease}' ></disease>
    </fullName>
</details>

    `;

    const blob = new Blob([xmlString], { type: "application/xml" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "details (1).xml";
    link.click();
}