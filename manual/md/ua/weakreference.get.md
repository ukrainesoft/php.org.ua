- [« WeakReference::create](weakreference.create.md)
- [WeakMap »](class.weakmap.md)

- [PHP Manual](index.md)
- [WeakReference](class.weakreference.md)
- Отримує об'єкт із слабким посиланням

# WeakReference::get

(PHP 7 \>u003d 7.4.0, PHP 8)

WeakReference::get — Отримує об'єкт із слабким посиланням

### Опис

public **WeakReference::get**(): ?object

Отримує об'єкт із слабким посиланням. Якщо об'єкт вже було знищено,
повертається **`null`**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає посилання object або **`null`**, якщо об'єкт було знищено.
