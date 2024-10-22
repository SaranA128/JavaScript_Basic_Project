// function to add new item to combo box
function addItem() {
    var newItem = document.getElementById("new-item").value;
    var comboBox = document.getElementById("combo-box");
    var option = document.createElement("option");
    option.text = newItem;
    comboBox.add(option);
    document.getElementById("new-item").value = ""; // clear input field
  }
  
  // function to remove selected item from combo box
  function removeItem() {
    var comboBox = document.getElementById("combo-box");
    var selectedIndex = comboBox.selectedIndex;
    if (selectedIndex !== -1) {
      comboBox.remove(selectedIndex);
    }
  }
  
  // function to display selected item
  function displaySelectedItem() {
    var comboBox = document.getElementById("combo-box");
    var selectedIndex = comboBox.selectedIndex;
    if (selectedIndex !== -1) {
      var selectedItem = comboBox.options[selectedIndex].text;
      document.getElementById("selected-item").innerHTML = "Selected Item: " + selectedItem;
    }
  }