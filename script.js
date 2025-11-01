// List of guides with URLs
const guides = [
  { name: "Burning Your First CD", url: "guides/burning-your-first-cd" },
  { name: "Installing Neon Drift", url: "guides/installing-neon-drift" }
];

// Function to display filtered guides
function searchGuides() {
    const input = document.getElementById("searchBar").value.toLowerCase().trim();
    const list = document.getElementById("guideList");
    list.innerHTML = ""; // clear current list

    if (!input) {
        // show all if search is empty
        guides.forEach(guide => addGuideToList(guide));
        return;
    }

    const searchWords = input.split(/\s+/); // split input by spaces
    const filtered = guides.filter(guide => {
        const guideLower = guide.name.toLowerCase();
        // return true if all words are included
        return searchWords.every(word => guideLower.includes(word));
    });

    if (filtered.length === 0) {
        list.innerHTML = "<li>No guides found!</li>";
        return;
    }

    filtered.forEach(guide => addGuideToList(guide));
}

// Helper function to create list item links
function addGuideToList(guide) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = guide.url;        // go to actual guide page
    a.textContent = guide.name;
    a.className = "retro-link"; // apply your CSS class
    li.appendChild(a);
    document.getElementById("guideList").appendChild(li);
}
