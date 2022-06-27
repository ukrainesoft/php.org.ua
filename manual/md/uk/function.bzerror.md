- [«bzerrno](function.bzerrno.md)
- [bzerrstr »](function.bzerrstr.md)

- [PHP Manual](index.md)
- [Функції Bzip2](ref.bzip2.md)
- Повертає код та рядок помилки роботи з bzip2 у вигляді масиву

# bzerror

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

bzerror — Повертає код та рядок помилки роботи з bzip2 у вигляді масиву

### Опис

**bzerror**(resource `$bz`): array

Повертає асоціативний масив з кодом та рядком помилки, що сталася
переданим файловим покажчиком.

### Список параметрів

`bz`
Вказівник файлу. Повинен бути коректним і вказувати на файл успішно
відкритий [bzopen()](function.bzopen.md).

### Значення, що повертаються

Повертає асоціативний масив з кодом помилки з ключем `errno`, та
рядком помилки з ключем `errstr`.

### Приклади

**Приклад #1 Приклад використання **bzerror()****

` <?php$error u003d bzerror($bz);echo $error["errno"];echo $error["errstr"];?> `

### Дивіться також

- [bzerrno()](function.bzerrno.md) - Повертає код помилки роботи з
bzip2
- [bzerrstr()](function.bzerrstr.md) - Повертає рядок помилки
роботи з bzip2
