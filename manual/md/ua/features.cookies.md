- [« HTTP-автентифікація в PHP](features.http-auth.md)
- [Сесії»](features.sessions.md)

- [PHP Manual](index.md)
- [Відмінні риси](features.md)
- Cookies

# Cookies

PHP прозоро підтримує HTTP cookies. Cookies – це механізм зберігання
даних браузером віддаленої машини для відстеження або ідентифікації
відвідувачів, що повертаються. Ви можете встановити cookies за допомогою
функцій [setcookie()](function.setcookie.md) або
[setrawcookie()](function.setrawcookie.md). Cookies є частиною
HTTP-заголовка, тому [setcookie()](function.setcookie.md) має
викликатись до будь-якого виведення даних у браузер. Це теж саме
обмеження, яке має функція [header()](function.header.md). Ви
Ви можете використовувати [функції буферизації виводу](ref.outcontrol.md),
щоб затримати виведення результатів роботи скрипта до того моменту, коли
буде відомо, чи знадобиться встановлення cookies або інших заголовків.

Будь-які cookie, надіслані серверу браузером клієнта, будуть
автоматично включені в суперглобальний масив `$_COOKIE`, якщо
директива [variables_order](ini.core.md#ini.variables-order) містить
літеру "C". Для призначення кількох значень одного cookie просто
додайте `[]` до її імені.

Додаткова інформація, зокрема особливості реалізації
браузерів, наведена в описі функцій
[setcookie()](function.setcookie.md) та
[setrawcookie()](function.setrawcookie.md).
