- [«cubrid_commit](function.cubrid-commit.md)
- [cubrid_connect »](function.cubrid-connect.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Створює оточення для з'єднання із сервером CUBRID

#cubrid_connect_with_url

(PECL CUBRID u003d 8.3.1)

cubrid_connect_with_url — Створює оточення для підключення до сервера
CUBRID

### Опис

**cubrid_connect_with_url**(
string `$conn_url`,
string `$userid` u003d ?,
string `$passwd` u003d ?,
bool `$new_link` u003d **`false`**
): resource

Функція **cubrid_connect_with_url()** використовується для створення
оточення для з'єднання з сервером за допомогою інформації заданої в
у вигляді рядка URL. Якщо у CUBRID дозволена функціональність високою
доступності, необхідно встановити інформацію для з'єднання з резервним
сервером, яка буде використовуватися для з'єднання, якщо з основним
щось трапиться. Якщо логін та пароль не задані, то за замовчуванням буде
використовувати з'єднання "PUBLIC".

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

- host : Ім'я хоста або IP-адреса основного сервера
- db_name: ім'я бази даних
- db_user : Ім'я користувача
- db_password: пароль
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
> $conn u003d cubrid_connect_with_url($url, "dba", "12?");
>
> Якщо логін або пароль порожні, необхідно все одно зберігати символи
> "`:`":
>
> $url u003d "CUBRID:localhost:33000:demodb:::";

### Список параметрів

`conn_url`
Рядок, що містить інформацію для з'єднання.

`userid`
Ім'я користувача.

`passwd`
пароль.

`new_link`
Якщо функція **cubrid_connect_with_url()** була викликана повторно
такими ж аргументами, нове з'єднання не буде створено замість нього
буде повернено ідентифікатор існуючого підключення. Параметр
`new_link` змінює таку поведінку і змушує
**cubrid_connect_with_url()** у будь-якому випадку створити нове з'єднання,
навіть якщо функція **cubrid_connect_with_url()** раніше була викликана з
такими самими аргументами.

### Значення, що повертаються

Ідентифікатор підключення у разі успішного виконання або **`false`**
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_connect_with_url()** без
завдання властивостей**

` <?php$conn_urlu003du003d"CUBRID:localhost:33000:demodb:dba::";$con u003d cubrid_connect_with_url($conn_url);if ($con) {   echo "connected successfully"; cubrid_execute($con, "create table person(id int,name char(16))"); $req u003dcubrid_execute($con, "insert into person values(1,'James')"); if ($req) {      cubrid_close_request($req); cubrid_commit($con); } else {      cubrid_rollback($con); }   cubrid_disconnect($con);}?> `

**Приклад #2 Приклад використання **cubrid_connect_with_url()** з
завданням властивостей**

` <?php$conn_urlu003du003d"CUBRID:127.0.0.1:33000:demodb:dba::?login_timeoutu003d100";$con u003d cubrid_connect_with_url ($conn_url);if ($con) {  cubrid_execute($con, "create table person(id int,name char(16))"); $req u003dcubrid_execute($con, "insert into person values(1,'James')"); if ($req) {      cubrid_close_request($req); cubrid_commit($con); } else {      cubrid_rollback($con); }   cubrid_disconnect($con);}?> `

### Дивіться також

- [cubrid_connect()](function.cubrid-connect.md) - Відкриває
з'єднання з сервером CUBRID
- [cubrid_pconnect()](function.cubrid-pconnect.md) - Відкриває
постійне з'єднання із сервером CUBRID
- [cubrid_pconnect_with_url()](function.cubrid-pconnect-with-url.md) -
Відкриває постійне з'єднання із сервером CUBRID
- [cubrid_disconnect()](function.cubrid-disconnect.md) - Закриває
з'єднання з базою даних
- [cubrid_close()](function.cubrid-close.md) - Закриває з'єднання
з базою даних
