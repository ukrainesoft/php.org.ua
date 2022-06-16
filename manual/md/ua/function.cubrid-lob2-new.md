- [« cubrid_lob2_import](function.cubrid-lob2-import.md)
- [cubrid_lob2_read »](function.cubrid-lob2-read.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Створює об'єкт LOB

#cubrid_lob2_new

(PECL CUBRID u003d 8.4.1)

cubrid_lob2_new — Створює об'єкт LOB

### Опис

**cubrid_lob2_new**(resource `$conn_identifier` u003d ?, string `$type` u003d
"BLOB"): resource

Функція **cubrid_lob2_new()** використовується для створення об'єкта LOB (як
BLOB, і CLOB). Її слід використовувати перед прив'язкою до об'єкта LOB.

### Список параметрів

`conn_identifier`
Ідентифікатор підключення. Якщо ідентифікатор з'єднання не вказано,
передбачається останнє підключення, відкрите за допомогою
[cubrid_connect()](function.cubrid-connect.md) або
[cubrid_connect_with_url()](function.cubrid-connect-with-url.md).

`type`
Значення має бути "BLOB" або "CLOB", регістр не враховується. за
використовується значення "BLOB".

### Значення, що повертаються

Ідентифікатор LOB у разі успішного виконання або **`false`** у разі
виникнення помилки.

### Дивіться також

- [cubrid_lob2_close()](function.cubrid-lob2-close.md) - Закриває
об'єкт LOB
