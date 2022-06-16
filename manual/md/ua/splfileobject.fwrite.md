- [« SplFileObject::ftruncate](splfileobject.ftruncate.md)
- [SplFileObject::getChildren »](splfileobject.getchildren.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- Запис у файл

# SplFileObject::fwrite

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplFileObject::fwrite — Запис до файлу

### Опис

public **SplFileObject::fwrite**(string `$data`, int `$length` u003d 0):
int\|false

Записує вміст рядка `string` у файл

### Список параметрів

`data`
Рядок, який буде записаний у файл.

`length`
Якщо заданий аргумент `length`, запис зупиниться після того, як
`length` байт будуть записані або буде досягнуто кінця рядка `string`,
залежно від того, що станеться раніше.

### Значення, що повертаються

Повертає кількість записаних байт або **`false`** у разі
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ------------------------------------------|
| 7.4.0 | Функція тепер повертає **`false`** замість нуля у разі виникнення помилки. |

### Приклади

**Приклад #1 Приклад використання **SplFileObject::fwrite()****

` <?php$file u003d new SplFileObject("fwrite.txt", "w");$written u003d $file->fwrite("12345");echo "У файл записано $written байт";?> `

Результатом виконання цього прикладу буде щось подібне:

У файл записано 5 байт

### Дивіться також

- [fwrite()](function.fwrite.md) - Бінарно-безпечний запис у файл
