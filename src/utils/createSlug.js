export const slugIt = (text) =>
    convertStrangeChars(text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?¿!¡]/g,"").replaceAll(" ", "-"))

const convertStrangeChars = (text) =>
    text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
