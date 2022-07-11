- [« PDO::pgsqlGetPid](pdo.pgsqlgetpid.md)
- [PDO::pgsqlLOBOpen »](pdo.pgsqllobopen.md)

- [PHP Manual](index.md)
- [PostgreSQL (PDO)] (ref.pdo-pgsql.md)
- Створити новий великий об'єкт (LOB)

# PDO::pgsqlLOBCreate

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL pdo_pgsql u003d 1.0.2)

PDO::pgsqlLOBCreate — Створити новий великий об'єкт (LOB)

### Опис

public **PDO::pgsqlLOBCreate**(): string

Функція **PDO::pgsqlLOBCreate()** створює великий об'єкт (LOB) та
повертає його OID. Ви можете відкрити потік для читання чи зміни
об'єкта, використовуючи функцію [PDO::pgsqlLOBOpen()](pdo.pgsqllobopen.md).
OID можна зберегти в стовпці типу OID і використовувати як посилання на LOB
не викликаючи неконтрольованого збільшення розміру рядків. LOB житиме в
базі даних поки не буде видалено за допомогою функції
[PDO::pgsqlLOBUnlink()](pdo.pgsqllobunlink.md).

Великі об'єкти можуть бути до 2ГБ розміром, але дуже громіздкі. Ви
повинні переконатися, що виконали
[PDO::pgsqlLOBUnlink()](pdo.pgsqllobunlink.md), перш ніж видалити
останній рядок у вашій БД, яка посилається на його OID. До того ж,
великі об'єкти немає контролю доступу. Як альтернатива
спробуйте використати тип даних bytea. Останні версії PostgreSQL
дозволяють стовпці типу bytea до 1ГБ розміром і прозоро керують
табличним простором для оптимізації довжини рядків.

> **Примітка**: Використовуйте цю функцію в транзакції.

### Список параметрів

**PDO::pgsqlLOBCreate()** не приймає параметрів.

### Значення, що повертаються

Повертає OID створеного об'єкта або **false**.

### Приклади

**Приклад #1 Приклад використання **PDO::pgsqlLOBCreate()****

У цьому прикладі створюється LOB і заповнюється даними з файлу. Після цього
його OID зберігається у таблиці.

` <?php$db u003d new PDO('pgsql:dbnameu003dtest hostu003dlocalhost', $user, $pass);$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);$db->beginTransaction ();$oidu003du003d$db->pgsqlLOBCreate();$streamu003du003d$db->pgsqlLOBOpen($oid, 'w');$local u003d fopen($filename, rb');stream_copy_to_stream($local, $ stream);$localu003du003dnull;$streamu003du003dnull;$stmtu003du003d$db->prepare("INSERT INTO BLOBS (ident, oid) VALUES (?, ?)");$stmt->execute(array($so , $oid));$db->commit();?> `

### Дивіться також

- [PDO::pgsqlLOBOpen()](pdo.pgsqllobopen.md) - Відкриває потік для
існуючого великого об'єкту
- [PDO::pgsqlLOBUnlink()](pdo.pgsqllobunlink.md) - Видалити великий
об'єкт
- [pg_lo_create()](function.pg-lo-create.md) - Створює великий
об'єкт
