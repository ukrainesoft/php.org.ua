- [«radius_add_server](function.radius-add-server.md)
- [radius_close »](function.radius-close.md)

- [PHP Manual](index.md)
- [Функції Radius](ref.radius.md)
- Створює дескриптор Radius для автентифікації

#radius_auth_open

(PECL radius \>u003d 1.1.0)

radius_auth_open — Створює дескриптор Radius для автентифікації

### Опис

**radius_auth_open**(): resource

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає дескриптор у разі успішного виконання або **`false`**
у разі виникнення помилки. Функція завершиться з помилкою, лише якщо
недостатньо пам'яті.

### Приклади

**Приклад #1 Приклад використання **radius_auth_open()****

` <?php$radh u003d radius_auth_open()    or die ("Не удалося створити дескриптор");echo "Дескриптор успішно створений";?> `
