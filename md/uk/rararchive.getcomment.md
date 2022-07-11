- [«RarArchive::close](rararchive.close.md)
- [RarArchive::getEntries »](rararchive.getentries.md)

- [PHP Manual](index.md)
- [RarArchive](class.rararchive.md)
- Отримати текст коментаря з архіву RAR

# RarArchive::getComment

#rar_comment_get

(PECL rar \>u003d 2.0.0)

RarArchive::getComment -- rar_comment_get — Отримати текст коментаря
з архіву RAR

### Опис

Об'єктно-орієнтований стиль (метод):

public **RarArchive::getComment**(): string

Процедурний стиль:

**rar_comment_get**([RarArchive](class.rararchive.md) `$rarfile`):
string

Повертає (глобальний) коментар, збережений в архіві RAR. Він може
бути довжиною до 64 KiB.

> **Примітка**:
>
> Модуль не підтримує коментарі на рівні записів.

### Список параметрів

`rarfile`
Об'єкт [RarArchive](class.rararchive.md), відкритий за допомогою
[rar_open()](rararchive.open.md).

### Значення, що повертаються

Повертає коментар або **`null`**, якщо його немає.

> **Примітка**:
>
> RAR зараз не підтримує коментарі в unicode. Кодування
> результату не визначено, але, можливо, це буде Windows-1252.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php$rar_arch u003d RarArchive::open('commented.rar');echo $rar_arch->getComment();?> `

Результатом виконання цього прикладу буде щось подібне:

Це є коментар до файлу commented.rar.

**Приклад #2 Процедурний стиль**

` <?php$rar_arch u003d rar_open('commented.rar');echo rar_comment_get($rar_arch);?> `
