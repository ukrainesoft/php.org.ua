- [« Threaded::chunk](threaded.chunk.md)
- [Threaded::extend »](threaded.extend.md)

- [PHP Manual](index.md)
- [Threaded](class.threaded.md)
- обробка

# Threaded::count

(PECL pthreads \>u003d 2.0.0)

Threaded::count — Обробка

### Опис

public **Threaded::count**(): int

Повертає кількість властивостей цього об'єкта.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

### Приклади

**Приклад #1 Підрахунок властивостей об'єкта**

` <?php$safe u003d new Threaded();while (count($safe) < 10) {    $safe[] u003d count($safe);}var_dump(count($safe));?> `

Результат виконання цього прикладу:

int(10)
