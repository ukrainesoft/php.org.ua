- [«mysql_thread_id](function.mysql-thread-id.md)
- [Mysqlnd »](book.mysqlnd.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Надсилає запит MySQL без авто-обробки результату та його
буферизації

# mysql_unbuffered_query

(PHP 4 \>u003d 4.0.6, PHP 5)

mysql_unbuffered_query — Надсилає запит MySQL без авто-обробки
результату та його буферизації

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- See: [Буферизовані та не буферизовані
запити](mysqlinfo.concepts.buffering.md)

### Опис

**mysql_unbuffered_query**(string `$query`, resource `$link_identifier`
u003d NULL): resource

**mysql_unbuffered_query()** посилає запит MySQL `query` без
автоматичної обробки та буферизації її результату, на відміну від
функції [mysql_query()](function.mysql-query.md). Це дозволяє
зберегти досить велику кількість пам'яті для SQL-запитів,
що повертають велику кількість даних. Крім того, ви можете почати
роботу з отриманими даними відразу після того, як перший ряд був
отримано: вам не доведеться чекати до кінця SQL-запиту. При використанні
**mysql_unbuffered_query()** з кількома з'єднаннями MySQL, ви повинні
вказати необов'язковий параметр `link_identifier`.

### Список параметрів

`query`
SQL-запит, що запускається.

Дані у запиті мають бути [коректно
проекрановані](function.mysql-real-escape-string.md).

`link_identifier`
З'єднання MySQL. Якщо ідентифікатор з'єднання не було вказано,
використовується останнє з'єднання, відкрите
[mysql_connect()](function.mysql-connect.md). Якщо таке з'єднання не
було знайдено, функція спробує створити таке, якби
[mysql_connect()](function.mysql-connect.md) була викликана без
параметрів. Якщо з'єднання не було знайдено і не змогло бути створено,
генерується помилка рівня **`E_WARNING`**.

### Значення, що повертаються

Для SELECT, SHOW, DESCRIBE та EXPLAIN запитів
**mysql_unbuffered_query()** повертає resource у разі успішного
виконання, або **`false`** у разі виникнення помилки.

Для інших типів SQL-запитів, UPDATE, DELETE, DROP і т.д.
**mysql_unbuffered_query()** повертає **`true`** у разі успіху та
**`false`** у разі виникнення помилки.

### Примітки

> **Примітка**:
>
> Однак плюси використання **mysql_unbuffered_query()** мають свою
> ціна: ви не можете використовувати функції
> [mysql_num_rows()](function.mysql-num-rows.md) та
> [mysql_data_seek()](function.mysql-data-seek.md) з результатом
> запиту, повернутим цією функцією, доки не будуть отримані всі ряди.
> Крім того, ви повинні обробити всі ряди запиту до відправки
> нового запиту, використовуючи той самий `link_identifier`.

### Дивіться також

- [mysql_query()](function.mysql-query.md) - Надсилає запит MySQL
