- [«bzcompress](function.bzcompress.md)
- [bzerrno »](function.bzerrno.md)

- [PHP Manual](index.md)
- [Функції Bzip2](ref.bzip2.md)
- Розпаковує дані, стислі з використанням bzip2

#bzdecompress

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

bzdecompress — Розпаковує дані, стиснуті з використанням bzip2

### Опис

**bzdecompress**(string `$data`, bool `$use_less_memory` u003d **`false`**):
string\|int\|false

**bzdecompress()** розпаковує переданий рядок, що містить стислі
bzip2 дані.

### Список параметрів

`data`
Рядок, що розпаковується.

`use_less_memory`
Якщо **`true`**, то буде використано альтернативний алгоритм
розпакування, що використовує менше пам'яті (максимально потрібна пам'ять
знаходиться в районі 2300K), але працює приблизно вдвічі повільніше.

Дивіться [документацію по bzip2](https://www.sourceware.org/bzip2/)
для більш детальної інформації про цю можливість.

### Значення, що повертаються

Розпакований рядок або **`false`** або код помилки у разі
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- --------------------------------------------|
| 8.0.0 | Тип use_less_memory змінений з int на bool. Раніше значенням за промовчанням був '0'. |

### Приклади

**Приклад #1 Розпакування рядка**

` <?php$start_str u003d "This is not an honest face?";$bzstr u003d bzcompress($start_str);echo "Compressed String: ";echo $bzstr;echo "
<br>
";$str u003dbzdecompress($bzstr);echo "Decompressed String: ";echo $str;echo "
<br>
";?> `

### Дивіться також

- [bzcompress()](function.bzcompress.md) - Стисне рядок з
використанням bzip2
