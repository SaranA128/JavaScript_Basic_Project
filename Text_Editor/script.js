document.getElementById('applyButton').addEventListener('click', function() {
    // Get selected values
    const fontType = document.getElementById('fontSelect').value;
    const fontSize = document.getElementById('sizeSelect').value;
    const textColor = document.getElementById('colorPicker').value;

    // Apply styles to the paragraph
    const paragraph = document.getElementById('textParagraph');
    paragraph.style.fontFamily = fontType;
    paragraph.style.fontSize = fontSize;
    paragraph.style.color = textColor;
});