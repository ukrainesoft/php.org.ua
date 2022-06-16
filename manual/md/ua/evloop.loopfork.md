- [«EvLoop::io](evloop.io.md)
- [EvLoop::now »](evloop.now.md)

- [PHP Manual](index.md)
- [EvLoop](class.evloop.md)
- Викликається після розгалуження

# EvLoop::loopFork

(PECL ev \>u003d 0.2.0)

EvLoop::loopFork — Викликається після розгалуження

### Опис

public **EvLoop::loopFork**(): void

Повинен викликатися після розгалуження в дочірньому елементі, перед входом
чи продовженням циклу подій. Альтернативою є використання
**`Ev::FLAG_FORKCHECK`**, яка викликає цю функцію автоматично при
деяку втрату продуктивності (дивіться [» документацію
libev](http://pod.tst.eu/http://cvs.schmorp.de/libev/ev.pod#FUNCTIONS_CONTROLLING_EVENT_LOOPS)).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.
