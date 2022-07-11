- [« Список доступних фільтрів](filters.md)
- [Перетворюючі фільтри »](filters.convert.md)

- [PHP Manual](index.md)
- [Список доступних фільтрів](filters.md)
- Строкові фільтри

## Строкові фільтри

Всі ці фільтри служать для того самого, що мають на увазі їх імена в
відповідно до поведінки вбудованих у PHP функцій для роботи з
рядками. Для отримання додаткової інформації про конкретний фільтр,
Зверніться до сторінки посібника відповідної функції.

## string.rot13

Використання цього фільтра еквівалентно обробці всіх даних потоку
функцією [str_rot13()](function.str-rot13.md).

**Приклад #1 string.rot13**

` <?php$fp u003dfopen('php://output', 'w');stream_filter_append($fp, 'string.rot13');fwrite($fp, "This is a test.
");/* Виведе:  Guvf vf n grfg.   */?> `

## string.toupper

Використання цього фільтра еквівалентно обробці всіх даних потоку
функцією [strtoupper()](function.strtoupper.md).

**Приклад #2 string.toupper**

` <?php$fp u003dfopen('php://output', 'w');stream_filter_append($fp, 'string.toupper');fwrite($fp, "This is a test.
");/* Виведе:  THIS IS A TEST.   */?> `

## string.tolower

Використання цього фільтра еквівалентно обробці всіх даних потоку
функцією [strtolower()](function.strtolower.md).

**Приклад #3 string.tolower**

` <?php$fp u003dfopen('php://output', 'w');stream_filter_append($fp, 'string.tolower');fwrite($fp, "This is a test.
");/* Виведе: this is a test.   */?> `

##string.strip_tags

Використання цього фільтра еквівалентно обробці всіх даних потоку
функцією [strip_tags()](function.strip-tags.md). Він приймає
аргументи в одній із двох форм: Або у вигляді рядка зі списком тегів, як
і другий аргумент функції [strip_tags()](function.strip-tags.md), або
масив назв тегів.

**Увага**

Ця функціональність оголошена *ЗАСТАРЛЕННОЮ*, починаючи з PHP 7.3.0 та її
Вкрай не рекомендується використовувати.

**Приклад #4 string.strip_tags**

` <?php$fp u003dfopen('php://output', 'w');stream_filter_append($fp, 'string.strip_tags', STREAM_FILTER_WRITE, "<b><i><u>");fwrite( $fp, "<b>bolded text</b> enlarged to a <h1>level 1 heading</h1>
");fclose($fp);/*Виведе:bolded|text|enlarged| ', STREAM_FILTER_WRITE, array('b','i','u'));fwrite($fp, "<b>bolded text</b> enlarged to a <h1>level 1 heading</h1>
"); fclose($fp);
