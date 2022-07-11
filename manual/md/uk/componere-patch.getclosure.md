- [«Componere\Patch::derive](componere-patch.derive.md)
- [Componere\Patch::getClosures »](componere-patch.getclosures.md)

- [PHP Manual](index.md)
- [Componere\Patch](class.componere-patch.md)
- Отримує замикання

# Componere\Patch::getClosure

(Componere 2 \>u003d 2.1.0)

Componere\Patch::getClosure — Отримує замикання

### Опис

public **Componere\Patch::getClosure**(string `$name`):
[Closure](class.closure.md)

Повинен повернути замикання для вказаного методу

### Список параметрів

`name`
Реєстронезалежне ім'я методу

### Значення, що повертаються

Замикання, прив'язане до правильної області та об'єкту

### Винятки

**Увага**

Викидає виняток [RuntimeException](class.runtimeexception.md)
якщо `name` не знайдено
