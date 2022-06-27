- [« Встановлення та налаштування](mysqli.setup.md)
- [Установка »](mysqli.installation.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](mysqli.setup.md)
- Вимоги

## Вимоги

Щоб ці функції були доступні, PHP має бути зібраний за допомогою
модуля mysqli

*MySQL 8*

При запуску PHP до версії 7.1.16 або PHP 7.2 до 7.2.4 встановіть плагін
за замовчуванням MySQL 8 Server в *mysql_native_password*, інакше ви побачите
помилки, схожі на *The server requested authentication method unknown
to the client \[caching_sha2_password\]*, навіть коли
*caching_sha2_password* не використовується.

Це пов'язано з тим, що MySQL 8 за замовчуванням використовує
caching_sha2_password, і плагін не розпізнається старими версіями PHP
(Mysqlnd). Натомість змініть це, встановивши
`default_authentication_pluginu003dmysql_native_password` в `my.cnf`. Плагін
*caching_sha2_password* буде підтримуватись у майбутній версії PHP. Бувай
А модуль [mysql_xdevapi](book.mysql-xdevapi.md) підтримує його.
