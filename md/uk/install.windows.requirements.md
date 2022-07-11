- [« Встановлення у системах Windows](install.windows.md)
- [PECL »](install.windows.pecl.md)

- [PHP Manual](index.md)
- [Установка Windows](install.windows.md)
- Вимоги до встановлення

## Вимоги до встановлення

Для PHP потрібно як мінімум Windows 2008/Vista. 32-bit або 64-bit (AKA
X86 чи X64. PHP не працює на Windows RT/WOA/ARM). Починаючи з PHP
7.2.0, Windows 2008 та Vista більше не підтримуються.

PHP вимагає наявності Visual C runtime (CRT). Багато програм вимагають,
щоб це вже було встановлене.

Microsoft Visual C++, що розповсюджується, для Visual Studio 2019 підходить
для всіх цих версій PHP, дивіться
[»https://visualstudio.microsoft.com/downloads/](https://visualstudio.microsoft.com/downloads/).

Ви повинні завантажити x86 CRT для складання PHP x86 і x64 CRT для складання PHP
x64.

Якщо CRT вже встановлено, інсталятор скаже вам про це і нічого не буде
встановлювати.

Інсталятор CRT підтримує опції командного рядка /quiet та /norestart,
Ви можете використовувати їх під час запуску скрипта.
