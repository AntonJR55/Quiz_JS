const questions = [
    {
        id: 0,
        title: "React - это ... ?",
        variants: ["библиотека", "фреймворк", "приложение"],
    },
    {
        id: 1,
        title: "Компонент - это ... ",
        variants: [
            "приложение",
            "часть приложения или страницы",
            "то, что я не знаю что такое",
        ],
    },
    {
        id: 2,
        title: "Что такое JSX?",
        variants: [
            "Это простой HTML",
            "Это функция",
            "Это тот же HTML, но с возможностью выполнять JS-код",
        ],
    },
];

let step = 0;
let correct = 0;
let question = questions[0];

const onClickVariant = (index) => {
    if (index === question.id) {
        correct = correct + 1;
    }
    step = step + 1;
    question = questions[step];
    render();
};

function render() {
    const appDiv = document.getElementById("app");
    if (step !== questions.length) {
        const gameDiv = document.createElement("div");
        gameDiv.className = "game"

        const progressDiv = document.createElement("div");
        progressDiv.className = "progress";

        const progressInnerDiv = document.createElement("div");
        const percentage = Math.round((step / questions.length) * 100);
        progressInnerDiv.style.width = `${percentage}%`;
        progressInnerDiv.className = "progress__inner";
        
        progressDiv.appendChild(progressInnerDiv);

        const h1 = document.createElement("h1");
        h1.textContent = question.title;

        const ul = document.createElement("ul");
        question.variants.forEach((text, index) => {
            const li = document.createElement("li");
            li.textContent = text;
            li.addEventListener("click", () => onClickVariant(index));
            ul.appendChild(li);
        });

        gameDiv.appendChild(progressDiv);
        gameDiv.appendChild(h1);
        gameDiv.appendChild(ul);

        appDiv.innerHTML = "";
        appDiv.appendChild(gameDiv);
    } else {
        const resultDiv = document.createElement("div");
        resultDiv.className = "result";

        const img = document.createElement("img");
        img.src = "https://cdn-icons-png.flaticon.com/512/2278/2278992.png";

        const h2 = document.createElement("h2");
        h2.textContent = `Вы правильно ответили на ${correct} вопроса из ${questions.length}`;

        const a = document.createElement("a");
        a.href = "/";

        const button = document.createElement("button");
        button.textContent = "Попробовать снова";

        a.appendChild(button);

        resultDiv.appendChild(img);
        resultDiv.appendChild(h2);
        resultDiv.appendChild(a);

        appDiv.innerHTML = "";
        appDiv.appendChild(resultDiv);
    }
}

render();
