const questions = [
    {
        question: "Как ты предпочитаешь работать?",
        answers: ["Решать логические задачи и искать оптимальные решения", 
                  "Придумывать и воплощать идеи в жизнь",  
                  "Помогать людям и улучшать их пользовательский опыт",
                  "Управлять процессами и следить за выполнением задач"
                ]
    },

    {
        question: "Что тебе больше нравится?",
        answers:[
                  "Математика и логика",
                  "Искусство и креативность",
                  "Психология и работа с людьми",
                  "Организация и планирование"
                ]
    },
                
    {
        question: "Какую рабочую атмосферу \n     ты предпочитаешь?",
        answers:[
                  "Спокойную, сосредоточенную на задачах",
                  "Свободную и креативную",
                  "Командную, с большим количеством общения",
                  "Динамичную, с множеством проектов и задач"
                ]
    },

    {
        question: "Какие задачи тебе интересны?",
        answers:[
                  "Оптимизировать процессы и писать сложные алгоритмы",
                  "Создавать что-то красивое и визуально привлекательное",
                  "Улучшать удобство использования продуктов",
                  "Распределять ресурсы и анализировать проектные риски"
                ]
    },

    {
        question: "Как ты относишься к рутине?",
        answers:[
                  "Спокойно, если это важно для результата",
                  "Не люблю рутину, предпочитаю творческую работу",
                  "Если это помогает людям, могу с этим справиться",
                  "Я адаптируюсь, главное — результат"
                ]
    },           
        
    {           
        question: "Какие технологии тебя больше \n     привлекают?",
        answers:[
                  "Искусственный интеллект, базы данных, автоматизация",
                  "Графика, веб-дизайн, анимация",
                  "Приложения и сайты с удобным интерфейсом",
                  "Системы управления проектами, аналитика данных"
                ]
    },
                
    {
        question: "Как ты относишься к командной работе?",
        answers:[
                  "Предпочитаю работать самостоятельно",
                  "Готов работать в команде, если она поддерживает мои идеи",
                  "Люблю взаимодействовать и находить общий язык с другими",
                  "Считаю важным координировать действия команды"
                ]
    },
    
    {
        question: "Ты бы хотел:",
        answers:[
                 "Решать глобальные технические задачи",
                 "Создавать визуально красивые проекты",
                 "Работать над удобством пользователей",
                 "Руководить крупными проектами"
                ]
    },

    {
        question: "Какой стиль обучения тебе подходит?",
        answers:[
                 "Глубокое погружение в техническую литературу",
                 "Практические эксперименты и творчество",
                 "Изучение поведения пользователей и их потребносте",
                 "Постоянное изучение новых подходов к управлению"
                ]
    },

    {
        question: "Твоя цель в IT?",
        answers:[
                 "Создавать сложные и эффективные системы",
                 "Воплощать свои идеи в жизнь",
                 "Делать продукты удобными и популярными",
                 "Успешно руководить крупными проектами"
                ]
    },

    {
        question: "Как ты подходишь к решению проблем?",
        answers:[
                 "Анализирую данные и ищу наиболее эффективное решение",
                 "Ищу творческий и нестандартный подход",
                 "Оцениваю, как это повлияет на людей",
                 "Разбиваю проблему на задачи и распределяю их между участниками"
                ]
    },

    {
        question: "Что из перечисленного \n     больше вдохновляет?",
        answers:[
                 "Логика и эффективность",
                 "Красота и эстетика",
                 "Удобство и пользовательский опыт",
                 "Организованность и ясность"
                ]
    },

    {
        question: "Какой стиль общения тебе \n     больше подходит?",
        answers:[
                 "Минимум слов, максимум результата",
                 "Яркая подача своих идей",
                 "Дружелюбие и открытость",
                 "Четкость и конкретика"
                ]
    },

    {
        question: "Как ты относишься к деталям?",
        answers:[
                 "Очень внимательно, детали определяют успех проекта",
                 "Детали важны, но главное — общая идея",
                 "Детали имеют значение, если это улучшает впечатление пользователя",
                 "Детали важны для достижения целей проекта"
                ]
    },

    {
        question: "Что для тебя является главным в работе?",
        answers:[
                 "Решение сложных задач и эффективность",
                 "Творчество и создание нового",
                 "Польза и удобство для людей",
                 "Успешное завершение проекта в срок"
                ]
    },
];

let currentQuestionIndex = 0;
const answerCounts = { a: 0, b: 0, c: 0, b: 0};

function updateProgress()
{
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = document.getElementById('progress-percentage');
    const progress = ((currentQuestionIndex / questions.length)*100).toFixed(0);
    progressBar.style.width = `${progress}%`;
    progressPercentage.innerText = `${progress}%`;
}

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const answerButtons = document.getElementById('answer-buttons');

    // Очистка предыдущих ответов
    answerButtons.innerHTML = '';

    // Показать текущий вопрос
    questionContainer.innerText = questions[currentQuestionIndex].question;

    // Создание кнопок для ответов
    for (let i = 0; i < 4; i++)
    {
        const button = document.createElement('button');
        button.innerText = questions[currentQuestionIndex].answers[i]; // Здесь можно использовать произвольные ответы
        button.classList.add('btn');

        button.addEventListener('click', () => {
            if (i == 0) answerCounts.a++;
            if (i == 1) answerCounts.b++;
            if (i == 2) answerCounts.c++;
            if (i == 3) answerCounts.d++;

            currentQuestionIndex++;
            // Если есть еще вопросы, показать следующий
            if (currentQuestionIndex < questions.length) 
            {
                showQuestion();
            } 
            else 
            {
                showResults();
            }
            updateProgress();
        });
        answerButtons.appendChild(button);
    } 
    updateProgress();
}

function showResults()
{
    const questionContainer = document.getElementById('question-container');
    const answerButtons = document.getElementById('answer-buttons');
    const progressContainer = document.getElementById('progress-container');
    const progressPercentage = document.getElementById('progress-percentage');

    answerButtons.innerHTML = '';
    progressContainer.style.display = 'none';
    progressPercentage.style.display = 'none';

    const maxAnswer = Object.keys(answerCounts).reduce((a, b) => answerCounts[a] > answerCounts[b] ? a : b);
    let resultTest = '';
    let resultLink = '';

    switch (maxAnswer)
    {
        case 'a':
            resultTest = 'Тест пройден!<br>Вам подходит профессия: Разработчик/Программист. <br>Рекомендуемые языки: Python, Java, C++<br>Полезные ссылки:';
            resultLink = `<a href="https://yandex.ru/yaintern/schools/useful?mindbox-message-key=2252151664635346944&mindbox-click-id=4238cbc7-b6ce-4424-89c6-551e9772490c&utm_source=mindbox&utm_medium=email&utm_campaign=sschool24&utm_content=promo_main" target="_blank">Полезные материалы</a><br><a href="https://pythonru.com/baza-znanij/python-obuchenie-s-nulya" target = "_blank">План изучения Python</a><br><a href="https://tproger.ru/articles/java-roadmap" target = "_blank">План изучения Java</a>`;
            break;
        case 'b':
            resultTest = 'Тест пройден!<br>Вам подходит профессия: Веб - дизайнер или Frontend - разработчик. <br>Рекомендуемые языки: JavaScript, HTML, CSS<br>Полезные ссылки:';
            resultLink = `<a href="https://yandex.ru/yaintern/schools/useful?mindbox-message-key=2252151664635346944&mindbox-click-id=4238cbc7-b6ce-4424-89c6-551e9772490c&utm_source=mindbox&utm_medium=email&utm_campaign=sschool24&utm_content=promo_main" target="_blank">Полезные материалы</a><br><a href="https://miro.com/app/board/uXjVKwnvVl8=/?share_link_id=268862119750" target = "_blank">План изучения Frontend</a>`;
            break;
        case 'c':
            resultTest = 'Тест пройден!<br>Вам подходит профессия: UX/UI - дизайнер или Продуктовый аналитик. <br>Рекомендуемые языки: JavaScript, SQL<br>Полезные ссылки:';
            resultLink = `<a href="https://yandex.ru/yaintern/schools/useful?mindbox-message-key=2252151664635346944&mindbox-click-id=4238cbc7-b6ce-4424-89c6-551e9772490c&utm_source=mindbox&utm_medium=email&utm_campaign=sschool24&utm_content=promo_main" target="_blank">Полезные материалы</a><br><a href="https://miro.com/app/board/uXjVKwnvVl8=/?share_link_id=268862119750" target = "_blank">План изучения JS</a><br><a href="https://habr.com/ru/articles/709116/" target = "_blank">Полезные материалы SQL</a>`;
            break;
        case 'd':
            resultTest = 'Тест пройден!<br>Вам подходит профессия: Менеджер проектов или Data Analyst. <br>Рекомендуемые языки: SQL, Python<br>Полезные ссылки:';
            resultLink = `<a href="https://yandex.ru/yaintern/schools/useful?mindbox-message-key=2252151664635346944&mindbox-click-id=4238cbc7-b6ce-4424-89c6-551e9772490c&utm_source=mindbox&utm_medium=email&utm_campaign=sschool24&utm_content=promo_main" target="_blank">Полезные материалы</a><br>
            <a href="https://pythonru.com/baza-znanij/python-obuchenie-s-nulya" target = "_blank">План изучения Python</a><br><a href="https://habr.com/ru/articles/709116/" target = "_blank">Полезные материалы SQL</a>`;
            break;
    }

    questionContainer.innerHTML = `<p>${resultTest}</p><p>${resultLink}</p>`;

}

// Запуск теста
showQuestion();