- [«finfo_file](function.finfo-file.md)
- [finfo_set_flags »](function.finfo-set-flags.md)

- [PHP Manual](index.md)
- [Функції модуля Fileinfo](ref.fileinfo.md)
- Створює екземпляр finfo

#finfo_open

# finfo::\_\_construct

(PHP \>u003d 5.3.0, PHP 7, PHP 8, PECL fileinfo \>u003d 0.1.0)

finfo_open -- finfo::\_\_construct — Створює екземпляр finfo

### Опис

Процедурний стиль

**finfo_open**(int `$flags` u003d **`FILEINFO_NONE`**, ?string
`$magic_database` u003d **`null`**): [finfo](class.finfo.md)\|false

Об'єктно-орієнтований стиль (конструктор):

public [finfo::\_\_construct](finfo.construct.md)(int `$flags` u003d
**`FILEINFO_NONE`**, ?string `$magic_database` u003d **`null`**)

Ця функція відкриває магічну базу даних та повертає екземпляр.

### Список параметрів

`flags`
Одна або кілька об'єднаних через бінарне АБО [констант
Fileinfo](fileinfo.constants.md).

`magic_database`
Ім'я файлу магічної бази даних, зазвичай щось на кшталт цього:
`/path/to/magic.mime`. Якщо не вказано повний шлях, буде використано
змінна оточення `MAGIC`. Якщо змінна оточення не вказана, то
використовуватиметься вбудована в PHP магічна база даних.

Передача **`null`** або порожнього рядка еквівалентно значенню за
замовчуванням.

### Значення, що повертаються

(Тільки процедурний стиль) Повертає екземпляр
[finfo](class.finfo.md) у разі успішного виконання або **`false`**
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.1.0 | Повертає екземпляр [finfo](class.finfo.md); раніше повертався ресурс ([resource](language.types.resource.md)). |
| 8.0.3 | `magic_database` тепер допускає значення null. |

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

`<?php$finfo u003d new finfo(FILEINFO_MIME, "/usr/share/misc/magic"); // повертає mime-тип а-ля mimetype розширення/* отримати mime-type для вказаного файла */$filename u003d "/usr/local/something.txt";echo $finfo->file($filename);

**Приклад #2 Процедурний стиль**

` <?php$finfo u003d finfo_open(FILEINFO_MIME, "/usr/share/misc/magic"); // повертає mime-тип а-ля mimetype розширенняif (!$finfo) {    echo "Відкриття бази даних fileinfo не удалося"; exit();}/* отримати mime-type для вказаного файла */$filename u003d "/usr/local/something.txt";echo finfo_file($finfo, $filename);/* закрити з'єднання */f_info );?> `

Результат виконання цього прикладу:

text/plain; charsetu003dus-ascii

### Примітки

> **Примітка**:
>
> Зазвичай використання вбудованої магічної бази даних (при
> невстановлених `magic_database` та `MAGIC`) найкращий вибір, якщо вам не
> Потрібна певна версія магічної бази даних.

### Дивіться також

- [finfo_close()](function.finfo-close.md) - Закриває екземпляр
finfo
