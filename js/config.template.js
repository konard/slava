// Конфигурация для уведомлений
// Скопируйте этот файл в config.js и заполните своими данными

window.emailjsConfig = {
    // EmailJS конфигурация
    // Для настройки с Яндекс SMTP:
    // 1. Зарегистрируйтесь на https://www.emailjs.com/
    // 2. Создайте Email Service:
    //    - Выберите "Add New Service"
    //    - Выберите "Custom SMTP Server"
    //    - SMTP Server: smtp.yandex.ru
    //    - Port: 465 (SSL) или 587 (TLS)
    //    - Username: ваш email на Яндексе
    //    - Password: пароль приложения (создайте в настройках Яндекс.Почты)
    // 3. Создайте Email Template:
    //    - В шаблоне используйте переменную {{email_body}} для текста письма
    //    - Остальные поля (тема, получатель) настройте по необходимости
    // 4. Получите Public Key в разделе Account
    emailjs: {
        enabled: false, // Установите true после настройки
        serviceId: 'YOUR_SERVICE_ID', // Замените на ваш Service ID
        templateId: 'YOUR_TEMPLATE_ID', // Замените на ваш Template ID
        publicKey: 'YOUR_PUBLIC_KEY' // Замените на ваш Public Key
    },

    // Шаблон письма (текстовый формат)
    // Этот шаблон используется для формирования тела письма
    // Доступные переменные: {name}, {email}, {phone}, {artwork}, {message}
    emailTemplate: {
        subject: 'Новый запрос с сайта Вячеслава Пешкина',
        body: `Здравствуйте!

Получен новый запрос с сайта.

--- Данные отправителя ---
Имя: {name}
Email: {email}
Телефон: {phone}

--- Интересующая картина ---
{artwork}

--- Сообщение ---
{message}

---
Это письмо отправлено автоматически с сайта Вячеслава Пешкина.`
    },

    // Telegram Bot конфигурация
    // Для настройки:
    // 1. Создайте бота через @BotFather в Telegram
    // 2. Получите Bot Token
    // 3. Узнайте ваш Chat ID (можно через @userinfobot)
    telegram: {
        enabled: false, // Установите true после настройки
        botToken: 'YOUR_BOT_TOKEN', // Замените на токен вашего бота
        chatId: 'YOUR_CHAT_ID' // Замените на ваш Chat ID
    }
};

// ВАЖНО: Добавьте config.js в .gitignore чтобы не выложить секретные данные!
