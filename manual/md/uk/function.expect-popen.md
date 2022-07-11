- [«expect_expectl](function.expect-expectl.md)
- [PCNTL »](book.pcntl.md)

- [PHP Manual](index.md)
- [Функції Expect](ref.expect.md)
- Запускає команду через командну оболонку Bourne та відкриває для
процесу потік PTY

#expect_popen

(PECL expect u003d> 0.1.0)

expect_popen — Запускає команду через командну оболонку Bourne та
відкриває для процесу потік PTY

### Опис

**expect_popen**(string `$command`): resource

Запускає команду через командну оболонку Bourne та відкриває для
процесу потік PTY.

### Список параметрів

`command`
Команда для запуску

### Значення, що повертаються

Повертає потік PTY для 'stdio', 'stdout', і 'stderr' процесу.

У разі виникнення помилки повертає **`false`**.

### Приклади

**Приклад #1 Приклад використання **expect_popen()****

` <?php// Сполука з CVS репозиторієм PHP.net:$stream u003d expect_popen ("cvs -d :pserver:anonymous@cvs.php.net:/repository login");sleep$ (3) "phpfi
"); fclose ($stream);?> `

### Дивіться також

- [popen()](function.popen.md) - Відкриває файловий покажчик
процесу
