const copy_input = document.getElementById("copy-input");
const copy_output = document.getElementById("copy-output");
const convert = document.getElementById("convert");


copy_input.addEventListener("click", () => {
    let text_for_convert_area = document.getElementById("text-for-convert").select();
    document.execCommand("copy");
    alert("Copied");
});

copy_output.addEventListener("click", () => {
    let converted_text_area = document.getElementById("converted-text").select();
    document.execCommand("copy");
    alert("Copied");
});

convert.addEventListener("click", () => {
    let text_for_conv = document.getElementById("text-for-convert").value;
    let output_text = "";

    for (i = 0; i < text_for_conv.length; i++) {
        if (text_for_conv[i] in SYMBOLS) { output_text += SYMBOLS[text_for_conv[i]] }
        else { output_text += text_for_conv[i] }
    }

    document.getElementById("converted-text").value = output_text;
});
