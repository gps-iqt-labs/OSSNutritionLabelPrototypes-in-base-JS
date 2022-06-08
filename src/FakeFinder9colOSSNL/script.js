const parsed = Papa.parse(document.querySelector('#data').textContent, {
  dynamicTyping: true,
  header: true,
  skipEmptyLines: true });

const dump = JSON.parse(document.querySelector('#dump').textContent);

const lineup = LineUpJS.
builder(parsed.data).
deriveColumns(parsed.meta.fields).
deriveColors().
restore(dump).
build(document.body);