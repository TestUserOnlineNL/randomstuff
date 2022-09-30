const showimport = document.querySelector(".showimport");
const input = document.querySelector("input");
const previewdata = document.querySelector("#previewdata");
const showdata = document.querySelector("#showdata");

previewdata.value = "";

// function dateTimestamp
const dateTimestamp = () => {
  options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone: "Europe/Amsterdam"
  };
  return new Intl.DateTimeFormat("nl-NL", options).format();
};
// function showData
const showData = (keyname) => {
  if (keyname) {
    const txt = localStorage.getItem(keyname);
    const displaydata = document.createElement("section");
    displaydata.classList.add("show_data");
    displaydata.innerText = txt;
    body.append(displaydata);
    return txt;
  }
};
// function saveFile
const saveFile = (data) => {
  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], {
    type: "text/plain"
  });
  const sFileName = `datafile-${dateTimestamp()}.json`; // The file to save the data.
  let newLink = document.createElement("a");
  newLink.download = sFileName;
  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }
  newLink.click();
};
//
input.addEventListener("change", () => {
  //remove old data from localstorage
  localStorage.removeItem("films");
  //
  let files = input.files;
  if (files.length == 0) return;
  //
  const file = files[0];
  let reader = new FileReader();
  reader.onload = (e) => {
    // read and split
    const file = e.target.result;
    const lines = file.split(/\r\n|\n/);
    previewdata.value = lines.join("\n");
    // transform
    const arr = [];
    try {
      for (var line = 0; line < lines.length; line++) {
        let transform = `{"watched_order":"${line + 1}","title":"${lines[
          line
        ].replace(/\s\(/, '","year":"(')}"}`;
        arr.push(JSON.parse(transform));
      }
    } catch (err) {
      alert(err);
      return;
    }
    // number of lines imported
    const imported = document.createElement("div");
    imported.classList.add("info");
    imported.innerText = `Imported ${lines.length} lines from file.`;
    showimport.appendChild(imported);
    // number of lines processed
    const processed = document.createElement("div");
    processed.classList.add("info");
    processed.innerText = `Processed ${arr.length} lines in memory.`;
    showimport.appendChild(processed);
    // storing data in localstorage
    try {
      localStorage.setItem("films", JSON.stringify(arr));
      const stored = document.createElement("div");
      stored.classList.add("info");
      stored.innerText = "Data stored in localStorage.";
      showimport.appendChild(stored);
    } catch (error) {
      console.log(error);
      const stored = document.createElement("div");
      stored.innerText = error;
      showimport.appendChild(stored);
    }
    // save data
    saveFile(showData("films"));
  };
  //
  reader.onerror = (e) => alert(e.target.error.name);
  reader.readAsText(file);
});
