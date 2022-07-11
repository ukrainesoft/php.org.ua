- [«Зумовлені константи](libxml.constants.md)
- [Функції libxml »] (ref.libxml.md)

- [PHP Manual](index.md)
- [libxml](book.libxml.md)
- Клас libXMLError

# Клас libXMLError

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

Містить різну інформацію про помилки, що викидаються libxml. Коди
помилок описані в офіційній [» xmlError API
документації](http://www.xmlsoft.org/html/libxml-xmlerror.md).

## Огляд класів

class **libXMLError** {

/\* Властивості \*/

public int `$level`;

public int `$code`;

public int `$column`;

public string `$message`;

public string `$file`;

public int `$line`;

}

## Властивості

`level`
Важливість помилки (одна з наступних констант: **`LIBXML_ERR_WARNING`**,
**`LIBXML_ERR_ERROR`** або **`LIBXML_ERR_FATAL`**)

`code`
Код помилки

`column`
Стовпець, у якому сталася помилка.

> **Примітка**:
>
> Ця властивість реалізована в libxml не до кінця, тому здебільшого
> випадків повертатиметься `0`.

`message`
Повідомлення про помилку, якщо є.

`file`
Ім'я файлу чи порожній рядок, якщо XML завантажувався з рядка.

`line`
Рядок, у якому сталася помилка.
