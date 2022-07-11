- [«parallel\Runtime](class.parallel-runtime.md)
- [parallel\Runtime::run »](parallel-runtime.run.md)

- [PHP Manual](index.md)
- [parallel\Runtime](class.parallel-runtime.md)
- Конструктор класу Runtime

# parallel\Runtime::\_\_construct

(0.8.0)

parallel\Runtime::\_\_construct - Конструктор класу Runtime

### Опис

public **parallel\Runtime::\_\_construct**()

Створює нове виконання без початкового завантаження.

public **parallel\Runtime::\_\_construct**(string `$bootstrap`)

Створює нове середовище виконання з початковим завантаженням.

### Список параметрів

`bootstrap`
Розташування файлу початкового завантаження зазвичай це автозавантажувач.

### Помилки

**Увага**

Викидає parallel\Runtime\Error, якщо потік не може бути створений.

**Увага**

Викидає parallel\Runtime\Bootstrap, якщо початкове завантаження
завершилася з помилкою.
