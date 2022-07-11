- [« yaz_es_result](function.yaz-es-result.md)
- [yaz_get_option »](function.yaz-get-option.md)

- [PHP Manual](index.md)
- [Функції YAZ](ref.yaz.md)
- готує Extended Service Request

# yaz_es

(PECL yaz \>u003d 0.9.0)

yaz_es — Підготовка Extended Service Request

### Опис

**yaz_es**( resource `$id` , string `$type` , array `$args` ): void

Функція готує Extended Service Request. Extended Services - це
сімейство різних засобів Z39.50, таких як оновлення записів,
порядок елементів, адміністрування баз даних тощо.

> **Примітка**:
>
> Багато серверів Z39.50 не підтримують Extended Services.

**yaz_es()** створює пакети Extended Service Request і поміщає їх у
черга операцій. Використовуйте [yaz_wait()](function.yaz-wait.md) для
надсилання запиту(ів) на сервер. Після завершення
[yaz_wait()](function.yaz-wait.md), результату операцій Extended
Service слід очікувати за допомогою дзвінка
[yaz_es_result()](function.yaz-es-result.md).

### Список параметрів

`id`
Ресурс підключення, що повертається
[yaz_connect()](function.yaz-connect.md).

`type`
Рядок, що представляє тип Extended Service: `itemorder` (Item Order),
`create` (Create Database), `drop` (Drop Database), `commit` (Commit
Operation), `update` (Update Record), `xmlupdate` (XML Update). Кожен
тип вказано у наступному розділі.

`args`
Масив з Extended Service та параметрами для конкретних пакетів.
Параметри ідентичні тим, що пропонуються в C API ZOOM C.
ZOOM [» Extended Services](http://www.indexdata.dk/yaz/doc/zoom.tkl).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання Record Update**

` <?php$con u003d yaz_connect("myhost/database");$args u003d array (   "record" u003d> "<gils><title>some title</title></gils>",    "syntax" "xml",    "action" u003d> "specialUpdate");yaz_es($con, "update", $args);yaz_wait();$result u003d yaz_es_result($id);?> `

### Дивіться також

- [yaz_es_result()](function.yaz-es-result.md) - Перевіряє результат
Extended Service
