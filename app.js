async function runScan() {
    const url = document.getElementById("url").value;
    const tokenA = document.getElementById("tokenA").value;
    const tokenB = document.getElementById("tokenB").value;

    const response = await fetch("http://localhost:5000/scan", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            url: url,
            token_a: tokenA,
            token_b: tokenB
        })
    });

    const data = await response.json();

    document.getElementById("output").textContent =
        JSON.stringify(data, null, 2);
}
