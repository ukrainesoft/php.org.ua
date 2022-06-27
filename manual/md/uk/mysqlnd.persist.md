- [«Несумісності](mysqlnd.incompatibilities.md)
- [Статистика »](mysqlnd.stats.md)

- [PHP Manual](index.md)
- [Mysqlnd](book.mysqlnd.md)
- Постійне з'єднання

# Постійне з'єднання

*Використання постійних з'єднань*

Якщо `mysqli` використовується з `mysqlnd`,\ при створенні постійного
з'єднання воно генерує на сервері запит `COM_CHANGE_USER`
(`mysql_change_user()`). Це гарантує, що при підключенні буде
повторно проведено авторизацію.

Оскільки через виклики `COM_CHANGE_USER` збільшуються накладні
витрати, можна відключити таку поведінку під час компіляції. У такому
у разі повторне використання постійного з'єднання буде генерувати
виклик `COM_PING` (`mysql_ping`), для перевірки можливості повторного
використання з'єднання.

Генерація виклику `COM_CHANGE_USER` може бути вимкнена прапором
компіляції `MYSQLI_NO_CHANGE_USER_ON_PCONNECT`. Наприклад:

shell# CFLAGSu003d"-DMYSQLI_NO_CHANGE_USER_ON_PCONNECT" ./configure --with-mysqlu003d/usr/local/mysql/ --with-mysqliu003d/usr/local/mysql/bin/mysql_config --with-pdo-mysqlu003d/usr /local/mysql/bin/mysql_config --enable-debug && make clean && make -j6

Або альтернативний варіант:

shell# export CFLAGSu003d"-DMYSQLI_NO_CHANGE_USER_ON_PCONNECT"
shell# configure --whatever-option
shell# make clean
shell# make

Зверніть увагу, що тільки `mysqli` спільно з `mysqlnd` використовують
`COM_CHANGE_USER`. Інші комбінації модуль-драйвер використовують
`COM_PING` при початковому використанні постійного з'єднання.
