let textBox = document.getElementById('textBox');

textBox.addEventListener(
    'input' , () => {

        var text = textBox.value;
        let char = text.length;
        document.getElementById('char').innerHTML = char;

        text = text.trim();
        let word = text.split(" ");

        let cleanList = word.filter((elm) => {
        return  elm != "";
        });

        document.getElementById('word').innerHTML = cleanList.length;
    }
)
document.getElementById('reset').addEventListener(
    'click',() => {
         textBox.value = "";
         document.getElementById('char').innerHTML = 0;
         document.getElementById('word').innerHTML = 0;
    }
)