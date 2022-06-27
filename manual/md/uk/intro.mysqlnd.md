- [«Mysqlnd](book.mysqlnd.md)
- [Огляд »](mysqlnd.overview.md)

- [PHP Manual](index.md)
- [Mysqlnd](book.mysqlnd.md)
-   Вступ

# Вступ

MySQL Native Driver є заміною для клієнтської бібліотеки MySQL
(libmysqlclient). MySQL Native Driver є частиною офіційних
вихідних кодів PHP, починаючи з PHP 5.3.0.

Модулі баз даних MySQL `mysqli` та PDO MYSQL з'єднуються з сервером
MySQL. У минулому це робилося за допомогою модуля, що використовує послуги,
які надає клієнтська бібліотека MySQL. Такі модулі
компілювалися з клієнтською бібліотекою MySQL для того, щоб
використовувати власний клієнт-серверний протокол.

З появою MySQL Native Driver з'явилася альтернатива, оскільки модулі
баз даних можуть компілюватися для використання MySQL Native Driver
замість клієнтської бібліотеки MySQL.

MySQL Native Driver написаний на C як модуля PHP.
