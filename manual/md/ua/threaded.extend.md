- [« Threaded::count](threaded.count.md)
- [Threaded::isRunning »](thread.isrunning.md)

- [PHP Manual](index.md)
- [Threaded](class.threaded.md)
- обробка під час виконання

# Threaded::extend

(PECL pthreads \>u003d 2.0.8)

Threaded::extend — Обробка під час виконання

### Опис

public **Threaded::extend**(string `$class`): bool

Робить потокобезпечний стандартний клас під час виконання.

### Список параметрів

`class`
Клас розширення.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Спадкування під час виконання**

` <?phpclass My {}Threaded::extend(My::class);$my u003d new My();var_dump($my instanceof Threaded);?> `

Результат виконання цього прикладу:

bool(true)
