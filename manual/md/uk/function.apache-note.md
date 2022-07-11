- [« apache_lookup_uri](function.apache-lookup-uri.md)
- [apache_request_headers »](function.apache-request-headers.md)

- [PHP Manual](index.md)
- [Функції Apache](ref.apache.md)
- Повертає та встановлює повідомлення до запиту Apache

#apache_note

(PHP 4, PHP 5, PHP 7, PHP 8)

apache_note — Повертає та встановлює повідомлення до запиту Apache

### Опис

**apache_note**(string `$note_name`, ?string `$note_value` u003d
**`null`**): string\|false

Ця функція є обгорткою для `table_get` та `table_set`. З її
можна редагувати таблицю повідомлень (apache notes table),
яка створюється під час надсилання запиту. Таблиця повідомлень
дозволяє модулям Apache обмінюватись даними.

Основне призначення **apache_note()** - передавати інформацію з одного
модуля в іншому всередині одного запиту.

### Список параметрів

`note_name`
Назва повідомлення.

`note_value`
Значення повідомлення.

### Значення, що повертаються

Якщо `note_value` опущений або **`null`**, функція повертає поточне
значення повідомлення `note_name`. Інакше вона встановлює
значення повідомлення `note_name` в `note_value` та повертає попереднє
значення `note_name`. Якщо значення повідомлення не може бути отримано,
буде повернуто **`false`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ------|
| 8.0.0 | `note_value` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад передачі інформації між PHP та Perl**

` <?phpapache_note('name', 'Fredrik Ekengren');// Виклик perl-скриптаvirtual("/perl/some_script.pl");$result u003d apache_note("resultdata");?> `

`` perlcode
# Отримуємо об'єкт запиту Apache
my $r u003d Apache->request()->main();

# Отримуємо передані дані
my $name u003d $r->notes('name');

# Деякі дії з даними

# Передача результату назад у PHP
$r->notes('resultdata', $result);
````

**Приклад #2 Приклад запису значень у access.log**

` <?phpapache_note('sessionID', session_id());?> `

apachecode
# "%{sessionID}n" може бути використаний у директиві LogFormat
````

### Дивіться також

- [virtual()](function.virtual.md) - Виконує підзапит Apache
