- [« Функції Radius](ref.radius.md)
- [radius_add_server »](function.radius-add-server.md)

- [PHP Manual](index.md)
- [Функції Radius](ref.radius.md)
- Створює дескриптор Radius для обліку

#radius_acct_open

(PECL radius \>u003d 1.1.0)

radius_acct_open — Створює дескриптор Radius для обліку

### Опис

**radius_acct_open**(): resource

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає дескриптор у разі успішного виконання або **`false`**
у разі виникнення помилки. Функція завершиться з помилкою, лише якщо
недостатньо пам'яті.

### Приклади

**Приклад #1 Приклад використання **radius_acct_open()****

` <?php$res u003d radius_acct_open ()    or die ("Не удалося створити дескриптор");print("Дескриптор успішно створений");?> `
