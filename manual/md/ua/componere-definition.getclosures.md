- [«
Componere\Definition::getClosure](componere-definition.getclosure.md)
- [Componere\Patch »](class.componere-patch.md)

- [PHP Manual](index.md)
- [Componere\Definition](class.componere-definition.md)
- Отримує замикання

# Componere\Definition::getClosures

(Componere 2 \>u003d 2.1.0)

Componere\Definition::getClosures — Отримує замикання

### Опис

public **Componere\Definition::getClosures**(): array

Повертає масив замикань

### Значення, що повертаються

Повертає всі методи у вигляді масиву об'єктів Closure, прив'язаних до
коректної області

### Винятки

**Увага**

Викидає виняток [RuntimeException](class.runtimeexception.md),
якщо Definition вже було зареєстровано
