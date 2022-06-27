- [«cubrid_num_rows](function.cubrid-num-rows.md)
- [cubrid_pconnect »](function.cubrid-pconnect.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Відкриває постійне з'єднання із сервером CUBRID

#cubrid_pconnect_with_url

(PECL CUBRID u003d 8.3.1)

cubrid_pconnect_with_url — Відкриває постійне з'єднання із сервером
CUBRID

### Опис

**cubrid_pconnect_with_url**(string `$conn_url`, string `$userid` u003d ?,
string `$passwd` u003d ?): resource

Встановлює постійне з'єднання із сервером CUBRID.

**cubrid_pconnect_with_url()** діє дуже схоже на
[cubrid_connect_with_url()](function.cubrid-connect-with-url.md) з
двома основними відмінностями:

По-перше, при підключенні функція спочатку намагатиметься знайти (постійну)
посилання, яке вже відкрито з тим самим хостом, портом, ім'ям бази даних
та ідентифікатором користувача. Якщо з'єднання буде знайдено, замість
відкриття нового буде повернуто його ідентифікатор.

По-друге, з'єднання з SQL-сервером не буде закрито після закінчення
виконання скрипту. Замість цього посилання залишиться відкритим для
використання у майбутньому ([cubrid_close()](function.cubrid-close.md)
або [cubrid_disconnect()](function.cubrid-disconnect.md) не закриє
посилання, встановлені **cubrid_pconnect_with_url()**).

Тому цей тип посилання називається "постійним".

\<url\> ::u003d
CUBRID:\<host\>:\<db_name\>:\<db_user\>:\<db_password\>:\[?\<properties\>\]

\<properties\> ::u003d \<property\> \[&\<property\>\]

\<properties\> ::u003d alhostsu003d\<alternative_hosts\>\[ &rctimeu003d\<time\>\]

\<properties\> ::u003d login_timeoutu003d\<milli_sec\>

\<properties\> ::u003d query_timeoutu003d\<milli_sec\>

\<properties\> ::u003d disconnect_on_query_timeoutu003dtrue\|false

\<alternative_hosts\> ::u003d \<standby_broker1_host\>:\<port\>
\[,\<standby_broker2_host\>:\<port\>\]

\<host\> :u003d HOSTNAME \| IP_ADDR

\<time\> :u003d SECOND

\<milli_sec\> :u003d MILLI SECOND

- host : Ім'я хоста або IP-адреса основної бази даних
- db_name : Ім'я бази даних
- db_user : Ім'я користувача бази даних
- db_password : Пароль користувача бази даних
- alhosts : Задає інформацію про брокера резервного сервера, який
буде використовуватись у разі недоступності основного. Якщо ви
задайте кілька резервних брокерів, то спроби з'єднання будуть
відбуватися у тому порядку, як вони описані в URL.
- rctime : Інтервал між спробами підключення до активного брокера,
якому стався збій. після виникнення помилки, система
з'єднається з резервним брокерам, зазначеним у althosts (failover),
відкотить незавершені транзакції, а потім спробує з'єднатися з
активним брокером основного вузла через кожні rctime. Значення по
замовчуванням 600 секунд.
- login_timeout : Максимальний час (мілісекунди) очікування
авторизації. За замовчуванням 0, що означає нескінченний час
очікування.
- query_timeout : Максимальний час (мілісекунди) очікування
виконання запиту. Після вичерпання цього часу на сервер буде
надіслано повідомлення про припинення запиту. Повернене значення
запит буде залежати від налаштування disconnect_on_query_timeout;
навіть якщо буде надіслано повідомлення про припинення запиту, він все ще
може завершитися успішно.
- disconnect_on_query_timeout : Визначає, чи буде відразу після
перевищення часу очікування запиту повернуто помилку. За замовчуванням
**`false`**.

> **Примітка**:
>
> Символи `?` та `:` є спеціальними в URL з'єднання і не можуть
> використовувати у паролі. Приклад некоректного пароля, який
> не можна використовувати в рядку з'єднання, тому що в ньому
> використовуються символи "?:".
>
> $url u003d "CUBRID:localhost:33000:tdb:dba:12?:?login_timeoutu003d100";
>
> Паролі, що містять `?` або `:` можуть бути надіслані окремо.
>
> $url u003d "CUBRID:localhost:33000:tbd:::?login_timeoutu003d100";
>
> $conn u003d cubrid_pconnect_with_url ($url, "dba", "12?");
>
> Якщо логін або пароль порожні, необхідно все одно зберігати символи
> "`:`":
>
> $url u003d "CUBRID:localhost:33000:demodb:::";

### Список параметрів

`conn_url`
Рядок, що містить інформацію для з'єднання.

`userid`
Ім'я користувача бази даних.

`passwd`
Пароль користувача.

### Значення, що повертаються

Ідентифікатор з'єднання у разі успішного виконання або **`false`**
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_pconnect_with_url()** без
завдання властивостей**

` <?php$conn_urlu003du003d"CUBRID:127.0.0.1:33000:demodb:dba::";$con u003d cubrid_pconnect_with_url ($conn_url);if ($con) уповнено| cubrid_execute($con, "create table person(id int,name char(16))"); $req u003dcubrid_execute($con, "insert into person values(1,'James')"); if ($req) {      cubrid_close_request ($req); cubrid_commit ($ con); } else {      cubrid_rollback ($con); }  cubrid_disconnect ($con);}?> `

**Приклад #2 **cubrid_pconnect_with_url()** url with properties example**

`<?php$conn_urlu003du003d"CUBRID:127.0.0.1:33000:demodb:dba::?althostu003d10.34.63.132:33088&rctimeu003d100";$con u003d cubrid_pconnect_with_url   з'єднання успішно виконано"; $req u003dcubrid_execute($con, "insert into person values(1,'James')"); if ($req) {      cubrid_close_request ($req); cubrid_commit ($ con); } else {      cubrid_rollback ($con); }  cubrid_disconnect ($con);}?> `

### Дивіться також

- [cubrid_connect()](function.cubrid-connect.md) - Відкриває
з'єднання з сервером CUBRID
- [cubrid_connect_with_url()](function.cubrid-connect-with-url.md) -
Створює оточення для з'єднання із сервером CUBRID
- [cubrid_pconnect()](function.cubrid-pconnect.md) - Відкриває
постійне з'єднання із сервером CUBRID
- [cubrid_disconnect()](function.cubrid-disconnect.md) - Закриває
з'єднання з базою даних
- [cubrid_close()](function.cubrid-close.md) - Закриває з'єднання
з базою даних
