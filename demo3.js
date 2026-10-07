const DEFAULT_ITEMS = [
  { finished: false, label: "wake up" },
  { finished: false, label: "eat" },
  { finished: false, label: "go to school" },
  { finished: false, label: "sleep" },
  { finished: false, label: "repeat" },
];

let items = [...DEFAULT_ITEMS];

function checkItem(index) {
  items = items.map((item, i) => {
    if (i === index) return { ...item, finished: !item.finished };
    else return item;
  });
}

function addItem() {
  const input = document.getElementById("new-item");
  if (!input || input.value === "") return;

  items.push({ finished: false, label: input.value });
  renderItems();
  input.value = "";
}

function clearList() {
  items.length = 0;
  renderItems();
}

function renderItems() {
  const list = document.getElementById("list");

  if (!list) return;

  list.innerHTML = "";

  if (!items.length) {
    const div = document.createElement("div");
    div.style.textAlign = "center";
    div.textContent = "No items";
    div.style.fontSize = "20px";
    list.appendChild(div);
  }

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    const container = document.createElement("div");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");

    checkbox.type = "checkbox";
    container.style.display = "flex";
    container.style.flexDirection = "row";
    container.style.gap = "20px";
    label.style.fontSize = "20px";

    label.textContent = item.label;
    checkbox.checked = item.finished;

    checkbox.onchange = () => checkItem(i);

    container.appendChild(checkbox);
    container.appendChild(label);

    list.appendChild(container);
  }
}
