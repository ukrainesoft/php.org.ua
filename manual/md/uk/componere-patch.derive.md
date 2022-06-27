- [«Componere\Patch::isApplied](componere-patch.isapplied.md)
- [Componere\Patch::getClosure »](componere-patch.getclosure.md)

- [PHP Manual](index.md)
- [Componere\Patch](class.componere-patch.md)
- Отримання патчу

# Componere\Patch::derive

(Componere 2 \>u003d 2.1.1)

Componere\Patch::derive — Отримання патча

### Опис

public **Componere\Patch::derive**(object `$instance`): Patch

Повинен отримати Patch для заданого екземпляра `instance`

### Список параметрів

`instance`
Призначення для отриманого патчу

### Значення, що повертаються

Patch для `instance` виходить з поточного Patch

### Винятки

**Увага**

Викидає виняток
[InvalidArgumentException](class.invalidargumentexception.md) якщо
`instance` не сумісний
