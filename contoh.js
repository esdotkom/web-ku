<script>
fetch("https://docs.google.com/spreadsheets/d/ID_SHEET/pub?output=csv")
    .then(res => res.text())
    .then(csv => {
        const rows = csv.split("\n").map(r => r.split(","));
        console.log(rows); // data dalam array
    });
</script>
