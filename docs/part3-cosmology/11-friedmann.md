# 11. Уравнения Фридмана и модели

В [главе 10](10-frw.md) симметрия свела геометрию Вселенной к одной функции \(a(t)\)
и знаку кривизны \(k\). Теперь мы найдём, как \(a(t)\) определяется содержимым
Вселенной. Подставив метрику FLRW в уравнения Эйнштейна, получим два обыкновенных
дифференциальных уравнения — **уравнения Фридмана** (1922), — к которым добавляется
закон сохранения энергии. Мы разберём однокомпонентные модели, введём параметры
плотности \(\Omega_i\), а затем построим стандартную космологическую модель ΛCDM и
вычислим возраст Вселенной.

## 11.1. Вывод уравнений Фридмана

Источник, совместимый с однородностью и изотропией, — идеальная жидкость, покоящаяся
относительно фундаментальных наблюдателей, \(U^\mu = (1,0,0,0)\):

\begin{equation}
T^\mu{}_\nu = \mathrm{diag}(-\rho,\ p,\ p,\ p), \qquad \rho = \rho(t),\ p = p(t).
\label{eq:Tmunu}
\end{equation}

Вычислим тензор Эйнштейна для метрики
\(\d s^2 = -\d t^2 + a^2\gamma_{ij}\d x^i\d x^j\), где \(\gamma_{ij}\) — метрика пространства
постоянной кривизны \(k\). Ненулевые символы Кристоффеля:

\begin{equation}
\Gamma^0_{ij} = a\dot a\,\gamma_{ij}, \qquad
\Gamma^i_{0j} = \frac{\dot a}{a}\,\delta^i_j, \qquad
\Gamma^i_{jk} = {}^{(3)}\Gamma^i_{jk}.
\label{eq:christoffel}
\end{equation}

Прямое вычисление (задача 11.1) с учётом \({}^{(3)}\!R_{ij} = 2k\gamma_{ij}\) даёт

\begin{equation}
R_{00} = -3\frac{\ddot a}{a}, \qquad
R_{ij} = \left(a\ddot a + 2\dot a^2 + 2k\right)\gamma_{ij}, \qquad
R = 6\left(\frac{\ddot a}{a} + \frac{\dot a^2}{a^2} + \frac{k}{a^2}\right).
\label{eq:ricci}
\end{equation}

Отсюда смешанные компоненты тензора Эйнштейна:

\begin{equation}
G^0{}_0 = -3\left(\frac{\dot a^2}{a^2} + \frac{k}{a^2}\right), \qquad
G^i{}_j = -\left(2\frac{\ddot a}{a} + \frac{\dot a^2}{a^2} + \frac{k}{a^2}\right)\delta^i_j .
\label{eq:einstein-tensor}
\end{equation}

Подставляя в \(G^\mu{}_\nu + \Lambda\delta^\mu_\nu = 8\pi G\,T^\mu{}_\nu\), получаем:

!!! theorem "Уравнения Фридмана"

    \begin{equation}
    H^2 \equiv \left(\frac{\dot a}{a}\right)^2 = \frac{8\pi G}{3}\rho - \frac{k}{a^2} + \frac{\Lambda}{3},
    \label{eq:friedmann1}
    \end{equation}

    \begin{equation}
    \frac{\ddot a}{a} = -\frac{4\pi G}{3}\left(\rho + 3p\right) + \frac{\Lambda}{3}.
    \label{eq:friedmann2}
    \end{equation}

Первое уравнение — связь (\(00\)-компонента не содержит вторых производных), второе
(уравнение Райчаудхури для FLRW) получено комбинацией \(ii\)- и \(00\)-компонент.
Обратите внимание: в \(\eqref{eq:friedmann2}\) источником гравитации служит \(\rho + 3p\),
а не только \(\rho\). Давление гравитирует; среда с \(p < -\rho/3\) вызывает
**ускоренное** расширение.

!!! example "Ньютоновская аналогия"
    Рассмотрим однородный пылевой шар радиуса \(R(t) = a(t)\chi\). Пробная частица на
    его поверхности имеет энергию \(\tfrac12\dot R^2 - GM/R = E\), \(M = \tfrac{4\pi}{3}\rho R^3\).
    Деля на \(\tfrac12 R^2\), получаем \(H^2 = \tfrac{8\pi G}{3}\rho + 2E/(a\chi)^2\), т. е.
    \(\eqref{eq:friedmann1}\) с \(k = -2E/\chi^2\): кривизна играет роль полной энергии. Однако
    вклад давления в \(\eqref{eq:friedmann2}\) и геометрический смысл \(k\) — чисто
    релятивистские эффекты.

## 11.2. Уравнение непрерывности и уравнения состояния

Закон сохранения \(\nabla_\mu T^{\mu}{}_0 = 0\) с символами \(\eqref{eq:christoffel}\) даёт

\begin{equation}
\dot\rho + 3H\left(\rho + p\right) = 0 .
\label{eq:continuity}
\end{equation}

Это первое начало термодинамики \(\d(\rho a^3) = -p\,\d(a^3)\) для сопутствующего объёма.
Уравнения \(\eqref{eq:friedmann1}\), \(\eqref{eq:friedmann2}\), \(\eqref{eq:continuity}\) не независимы:
дифференцируя первое по времени и используя третье, получаем второе (тождество Бьянки).

Для замыкания системы нужно **уравнение состояния**. В космологии обычно \(p = w\rho\),
\(w = \mathrm{const}\). Тогда \(\eqref{eq:continuity}\) интегрируется:

\begin{equation}
\rho \propto a^{-3(1+w)} .
\label{eq:rho-of-a}
\end{equation}

| Компонента | \(w\) | \(\rho(a)\) | Физика |
|---|---|---|---|
| Нерелятивистское вещество (барионы, тёмная материя) | \(0\) | \(a^{-3}\) | число частиц сохраняется, объём \(\propto a^3\) |
| Излучение (фотоны, безмассовые нейтрино) | \(1/3\) | \(a^{-4}\) | плюс красное смещение каждого кванта \(\propto 1/a\) |
| Космологическая постоянная / энергия вакуума | \(-1\) | \(a^0\) | \(T_{\mu\nu} = -\rho_\Lambda g_{\mu\nu}\) |
| «Кривизна» (формально) | \(-1/3\) | \(a^{-2}\) | член \(-k/a^2\) в \(\eqref{eq:friedmann1}\) |

Космологическую постоянную удобно перенести в правую часть как жидкость с
\(\rho_\Lambda = \Lambda/(8\pi G)\), \(p_\Lambda = -\rho_\Lambda\). Далее так и будем делать.

## 11.3. Параметры плотности

При \(k=0\) уравнение \(\eqref{eq:friedmann1}\) связывает \(H\) и полную плотность.
Определим **критическую плотность** и параметры плотности:

\begin{equation}
\rho_{\rm cr}(t) = \frac{3H^2}{8\pi G}, \qquad
\Omega_i(t) = \frac{\rho_i(t)}{\rho_{\rm cr}(t)}, \qquad
\Omega_k(t) = -\frac{k}{a^2H^2}.
\label{eq:omegas}
\end{equation}

Тогда \(\eqref{eq:friedmann1}\) принимает вид «правила сумм»

\begin{equation}
\sum_i \Omega_i + \Omega_k = 1 ,
\label{eq:sum-rule}
\end{equation}

а знак кривизны определяется полной плотностью: \(\Omega_{\rm tot} > 1 \Leftrightarrow k > 0\)
(замкнутая Вселенная), \(\Omega_{\rm tot} < 1 \Leftrightarrow k < 0\). Сегодняшний
радиус кривизны \(R_0 = d_H/\sqrt{|\Omega_{k}|}\), \(d_H = 1/H_0\).

Используя \(\eqref{eq:rho-of-a}\), запишем уравнение Фридмана через сегодняшние параметры
(индекс 0 у \(\Omega\) далее опускаем):

\begin{equation}
H^2(a) = H_0^2\,E^2(a), \qquad
E^2(a) = \frac{\Omega_r}{a^4} + \frac{\Omega_m}{a^3} + \frac{\Omega_k}{a^2} + \Omega_\Lambda .
\label{eq:E-of-a}
\end{equation}

Это центральная формула фоновой космологии. Значения Planck 2018 (+BAO):

| Параметр | Значение |
|---|---|
| \(h\) | \(0{,}6766 \pm 0{,}0042\) |
| \(\Omega_m = \Omega_c + \Omega_b\) | \(0{,}3111 \pm 0{,}0056\) |
| \(\Omega_b h^2\) | \(0{,}02242\) |
| \(\Omega_\Lambda\) | \(0{,}6889\) |
| \(\Omega_k\) | \(0{,}0007 \pm 0{,}0019\) |
| \(\Omega_r = \Omega_\gamma(1 + 0{,}2271\,N_{\rm eff})\) | \(\approx 9{,}0\times10^{-5}\) |

С помощью \(a(t)\) из \(\eqref{eq:E-of-a}\) возраст Вселенной и время, соответствующее
красному смещению \(z\), выражаются интегралами:

\begin{equation}
t(a) = \int_0^a\frac{\d a'}{a' H(a')} = \frac{1}{H_0}\int_0^a\frac{\d a'}{a'E(a')},
\qquad t_0 = t(1).
\label{eq:age}
\end{equation}

Параметр замедления:
\(q_0 = -\ddot a/(aH^2)|_0 = \Omega_r + \tfrac12\Omega_m - \Omega_\Lambda\)
(из \(\eqref{eq:friedmann2}\), задача 11.3).

## 11.4. Однокомпонентные модели

Если доминирует одна компонента с \(w > -1\) и \(k = 0\), то \(\dot a \propto a^{-(1+3w)/2}\), откуда

\begin{equation}
a(t) = \left(\frac{t}{t_0}\right)^{\frac{2}{3(1+w)}}, \qquad
H = \frac{2}{3(1+w)\,t}, \qquad
t_0 = \frac{2}{3(1+w)}\,\frac{1}{H_0}.
\label{eq:power-law}
\end{equation}

!!! example "Три классические модели"
    - **Пыль, \(w=0\)** (модель Эйнштейна–де Ситтера): \(a\propto t^{2/3}\), \(t_0 = \tfrac23 H_0^{-1} \approx 9{,}6\) млрд лет
      при \(h=0{,}677\) — меньше возраста старейших звёзд (\(\gtrsim 12\) млрд лет). Это была
      одна из «проблем возраста», указывавших на Λ.
    - **Излучение, \(w=1/3\)**: \(a\propto t^{1/2}\), \(t_0 = \tfrac12H_0^{-1}\). Так расширялась ранняя Вселенная.
    - **Вакуум, \(w=-1\)** (де Ситтер): \(H = \sqrt{\Lambda/3} = \mathrm{const}\), \(a \propto e^{Ht}\).
      Начала нет: \(a\to0\) только при \(t\to-\infty\).
    - **Пустая Вселенная** (Милн): \(\Omega_k = 1\), \(a = t/t_0\), \(t_0 = H_0^{-1}\).

Во всех моделях с \(\rho + 3p > 0\) график \(a(t)\) выпуклый вверх, поэтому
\(t_0 < H_0^{-1}\), а в прошлом неизбежно \(a = 0\) — **Большой взрыв** (сингулярность,
в которой \(\rho\to\infty\)). Это следствие только знака \(\rho + 3p\), а не точной симметрии
(теоремы о сингулярностях Хокинга–Пенроуза).

### Пыль с кривизной

При \(\Omega_m \ne 1\), \(\Omega_\Lambda = 0\) решение параметрическое. Для \(\Omega_m > 1\) (замкнутая):

\begin{equation}
a = \frac{\Omega_m}{2(\Omega_m - 1)}\left(1 - \cos\theta\right), \qquad
H_0 t = \frac{\Omega_m}{2(\Omega_m - 1)^{3/2}}\left(\theta - \sin\theta\right),
\label{eq:closed-dust}
\end{equation}

— циклоида: расширение до \(a_{\max} = \Omega_m/(\Omega_m-1)\) при \(\theta=\pi\) и Большое
сжатие при \(\theta = 2\pi\), \(t_{\rm crunch} = \pi\Omega_m/[H_0(\Omega_m-1)^{3/2}]\). Для \(\Omega_m<1\)
\(\cos\to\cosh\), \(\sin\to\sinh\), и расширение вечно. Без Λ **геометрия определяет судьбу**:
замкнутая Вселенная коллапсирует, открытая и плоская расширяются вечно. С \(\Lambda>0\) эта связь
нарушается — даже замкнутая Вселенная может расширяться вечно.

## 11.5. Модель ΛCDM

Реальная Вселенная содержит все компоненты, и они доминируют поочерёдно, поскольку
по-разному масштабируются с \(a\). Характерные моменты:

\begin{equation}
a_{\rm eq} = \frac{\Omega_r}{\Omega_m} \approx 2{,}9\times10^{-4}\ (z_{\rm eq}\approx 3400),
\qquad
a_{m\Lambda} = \left(\frac{\Omega_m}{\Omega_\Lambda}\right)^{1/3} \approx 0{,}77\ (z\approx 0{,}30).
\label{eq:equalities}
\end{equation}

Ускорение началось чуть раньше равенства вещества и Λ: \(\ddot a = 0\) при
\(\Omega_m/(2a^3) = \Omega_\Lambda\), т. е. \(z_{\rm acc} = (2\Omega_\Lambda/\Omega_m)^{1/3} - 1 \approx 0{,}64\).

Пренебрегая излучением (ошибка в возрасте \(\sim 0{,}05\%\): излучение доминировало лишь первые \(\sim 5\times10^4\) лет), плоскую модель «пыль + Λ»
можно решить точно (задача 11.4):

\begin{equation}
a(t) = \left(\frac{\Omega_m}{\Omega_\Lambda}\right)^{1/3}
\sinh^{2/3}\!\left(\frac32\sqrt{\Omega_\Lambda}\,H_0 t\right),
\qquad
t_0 = \frac{2}{3H_0\sqrt{\Omega_\Lambda}}\,\mathrm{arsinh}\sqrt{\frac{\Omega_\Lambda}{\Omega_m}} .
\label{eq:lcdm-exact}
\end{equation}

При \(\Omega_m = 0{,}311\), \(h = 0{,}6766\) это даёт \(t_0 = 13{,}79\) млрд лет; учёт
излучения уменьшает возраст лишь на \(\approx 5\) млн лет. Обратите внимание, что \(H_0t_0 \approx 0{,}95\) близко к
единице — «совпадение», отражающее, что мы живём вблизи перехода от замедления к ускорению.

!!! definition "Определение: тип будущего"
    В модели с \(\Omega_m, \Omega_\Lambda, \Omega_r \ge 0\) судьба определяется тем, обращается ли
    \(E^2(a)\) в нуль при \(a > 1\). Если да — расширение остановится и сменится
    сжатием (**Большое сжатие**). Если нет и \(\Omega_\Lambda > 0\) — асимптотически
    де ситтеровское **вечное ускоренное расширение**; если \(\Omega_\Lambda = 0\), \(k\le0\) —
    вечное замедляющееся. Аналогично, если \(E^2(a)\) обращается в нуль при \(a<1\)
    (большое \(\Omega_\Lambda\)), в прошлом был **отскок** и Большого взрыва не было.

### Интерактив: масштабный фактор

Меняйте сегодняшние параметры плотности; \(\Omega_k = 1 - \Omega_m - \Omega_\Lambda - \Omega_r\)
подстраивается автоматически, \(h = 0{,}6766\). Программа интегрирует уравнение
\(\ddot a = H_0^2\left(-\Omega_r a^{-3} - \tfrac12\Omega_m a^{-2} + \Omega_\Lambda a\right)\)
(следствие \(\eqref{eq:friedmann2}\)) методом Рунге–Кутты из точки \(a=1\), \(\dot a = H_0\) назад и
вперёд во времени. Широкая бледная кривая — модель Planck 2018, жёлтая точка — «сейчас».

<div class="interactive" id="friedmann-demo">
  <canvas id="friedmann-canvas" width="560" height="380"></canvas>
  <div class="controls">
    <label for="friedmann-om"><span class="arithmatex">\(\Omega_m\)</span> = <span id="friedmann-om-val">0.31</span></label>
    <input type="range" id="friedmann-om" min="0" max="3" step="0.01" value="0.31">
    <label for="friedmann-ol"><span class="arithmatex">\(\Omega_\Lambda\)</span> = <span id="friedmann-ol-val">0.69</span></label>
    <input type="range" id="friedmann-ol" min="-1" max="2" step="0.01" value="0.69">
    <label for="friedmann-or"><span class="arithmatex">\(\Omega_r\)</span> = <span id="friedmann-or-val">0.000</span></label>
    <input type="range" id="friedmann-or" min="0" max="0.3" step="0.001" value="0">
  </div>
  <div class="controls">
    <span><span class="arithmatex">\(\Omega_k\)</span> = <span id="friedmann-ok">0</span></span>
    <span><span class="arithmatex">\(q_0\)</span> = <span id="friedmann-q0">0</span></span>
    <span>Возраст: <span id="friedmann-age">—</span></span>
    <span>Будущее: <span id="friedmann-fate">—</span></span>
  </div>
</div>

Попробуйте: (1) \(\Omega_m = 1\), \(\Omega_\Lambda = 0\) — возраст \(\tfrac23H_0^{-1}\);
(2) \(\Omega_m = 2\), \(\Omega_\Lambda=0\) — Большое сжатие; (3) \(\Omega_m = 2\), \(\Omega_\Lambda = 1{,}5\) —
замкнутая, но вечно расширяющаяся Вселенная; (4) \(\Omega_m = 0{,}1\), \(\Omega_\Lambda = 1{,}5\) — отскок без
Большого взрыва; (5) \(\Omega_\Lambda < 0\) — коллапс при любой кривизне.

## 11.6. Численный пример

Вычислим возраст Вселенной в ΛCDM, сравним с `astropy` и найдём характерные красные смещения.

```python
import numpy as np
from scipy.integrate import quad
from astropy.cosmology import Planck18

H0 = 67.66; h = H0/100
Om, Or = 0.3111, 9.0e-5   # Or: фотоны+нейтрино
OL = 1 - Om - Or
E = lambda a: np.sqrt(Om/a**3 + Or/a**4 + OL)
tH = 977.8/H0   # 1/H0 в млрд лет
t0 = tH*quad(lambda a: 1/(a*E(a)), 0, 1)[0]
print(f"t0 = {t0:.2f} Gyr")                    # t0 = 13.79 Gyr
print(f"astropy: {Planck18.age(0):.2f}")       # astropy: 13.79 Gyr
a_eq = Or/Om; a_L = (Om/OL)**(1/3)
print(f"z_eq = {1/a_eq-1:.0f}, z_mL = {1/a_L-1:.3f}")  # z_eq = 3456, z_mL = 0.303
q0 = Om/2 + Or - OL
print(f"q0 = {q0:.3f}")                        # q0 = -0.533
```

Числа \(977{,}8\) — это \(1/H_0\) в млрд лет при \(H_0 = 1\) км/с/Мпк. Модель `Planck18` в
`astropy` учитывает массивные нейтрино (\(\sum m_\nu = 0{,}06\) эВ), поэтому её \(\Omega_m\)
немного отличается, но возраст совпадает с точностью до \(0{,}01\) млрд лет.

## Задачи

??? question "11.1. Тензор Риччи FLRW"
    Используя \(\eqref{eq:christoffel}\), вычислите \(R_{00}\) для метрики FLRW и проверьте
    \(\eqref{eq:ricci}\).

    ??? success "Решение"
        \(R_{00} = \pd_\lambda\Gamma^\lambda_{00} - \pd_0\Gamma^\lambda_{\lambda0}
        + \Gamma^\lambda_{\lambda\sigma}\Gamma^\sigma_{00} - \Gamma^\lambda_{0\sigma}\Gamma^\sigma_{\lambda0}\).
        \(\Gamma^\lambda_{00}=0\), \(\Gamma^\lambda_{\lambda0} = 3\dot a/a\), \(\Gamma^\lambda_{0\sigma}\Gamma^\sigma_{\lambda0}
        = \Gamma^i_{0j}\Gamma^j_{i0} = 3\dot a^2/a^2\). Итого
        \(R_{00} = -3\,\frac{\d}{\d t}\frac{\dot a}{a} - 3\frac{\dot a^2}{a^2} = -3\frac{\ddot a}{a}\).

??? question "11.2. Уравнение непрерывности"
    Выведите \(\eqref{eq:friedmann2}\) из \(\eqref{eq:friedmann1}\) и \(\eqref{eq:continuity}\).

    ??? success "Решение"
        Умножим \(\eqref{eq:friedmann1}\) на \(a^2\): \(\dot a^2 = \tfrac{8\pi G}{3}\rho a^2 - k + \tfrac\Lambda3a^2\).
        Дифференцируем: \(2\dot a\ddot a = \tfrac{8\pi G}{3}(\dot\rho a^2 + 2\rho a\dot a) + \tfrac{2\Lambda}{3}a\dot a\).
        Подставим \(\dot\rho = -3(\dot a/a)(\rho+p)\): скобка равна \(a\dot a(-\rho - 3p)\).
        Деля на \(2a\dot a\), получаем \(\ddot a/a = -\tfrac{4\pi G}{3}(\rho+3p) + \tfrac\Lambda3\).

??? question "11.3. Параметр замедления"
    Покажите, что \(q_0 = \sum_i \tfrac{1+3w_i}{2}\Omega_i\) и, в частности,
    \(q_0 = \Omega_r + \tfrac12\Omega_m - \Omega_\Lambda\). Каков знак \(q_0\) для Planck 2018?

    ??? success "Решение"
        Делим \(\eqref{eq:friedmann2}\) на \(H^2\) и учитываем \(8\pi G\rho_i/(3H^2) = \Omega_i\):
        \(-q = -\tfrac12\sum_i\Omega_i(1+3w_i)\). Для \(w = 1/3, 0, -1\) коэффициенты \(1, \tfrac12, -1\).
        Planck: \(q_0 \approx 0{,}156 - 0{,}689 = -0{,}53 < 0\) — ускорение.

??? question "11.4. Точное решение ΛCDM"
    Решите \(\dot a^2 = H_0^2(\Omega_m/a + \Omega_\Lambda a^2)\) подстановкой \(a^{3/2} = A\sinh u\)
    и получите \(\eqref{eq:lcdm-exact}\).

    ??? success "Решение"
        Перепишем: \(a^{1/2}\dot a = H_0\sqrt{\Omega_m + \Omega_\Lambda a^3}\), т. е.
        \(\tfrac23\,\d(a^{3/2})/\d t = H_0\sqrt{\Omega_m+\Omega_\Lambda a^3}\). С \(A = \sqrt{\Omega_m/\Omega_\Lambda}\)
        правая часть \(H_0\sqrt{\Omega_m}\cosh u\), левая \(\tfrac23A\cosh u\,\dot u\). Получаем
        \(\dot u = \tfrac32\sqrt{\Omega_\Lambda}H_0\), \(u = \tfrac32\sqrt{\Omega_\Lambda}H_0t\). Условие \(a(t_0)=1\) даёт
        \(\sinh u_0 = \sqrt{\Omega_\Lambda/\Omega_m}\).

??? question "11.5. Статическая Вселенная Эйнштейна"
    Найдите статическое решение (\(\dot a = \ddot a = 0\)) с пылью и Λ. Каков знак \(k\)?
    Покажите, что оно неустойчиво.

    ??? success "Решение"
        Из \(\eqref{eq:friedmann2}\): \(\Lambda = 4\pi G\rho\). Из \(\eqref{eq:friedmann1}\):
        \(k/a^2 = \tfrac{8\pi G}{3}\rho + \tfrac\Lambda3 = 4\pi G\rho = \Lambda > 0\), т. е. \(k=+1\), \(a = 1/\sqrt\Lambda\).
        Если \(a\) чуть увеличить, \(\rho\propto a^{-3}\) падает, член \(-\tfrac{4\pi G}{3}\rho\) в \(\ddot a/a\)
        уменьшается по модулю и \(\ddot a > 0\) — расширение ускоряется; при уменьшении — коллапс.

??? question "11.6. Эпоха равенства"
    Найдите \(z_{\rm eq}\) и возраст Вселенной в этот момент, используя точное решение для
    смеси вещества и излучения при \(k = 0\):
    \(H_0 t = \frac{2}{3\sqrt{\Omega_m}}\left[(a - 2a_{\rm eq})\sqrt{a+a_{\rm eq}} + 2a_{\rm eq}^{3/2}\right]\).

    ??? success "Решение"
        \(a_{\rm eq} = \Omega_r/\Omega_m \approx 2{,}9\times10^{-4}\), \(z_{\rm eq}\approx3450\). При \(a = a_{\rm eq}\):
        \(H_0t = \tfrac{2}{3\sqrt{\Omega_m}}a_{\rm eq}^{3/2}(2 - \sqrt2)\approx 3{,}5\times10^{-6}\), т. е.
        \(t_{\rm eq}\approx 3{,}5\times10^{-6}\times14{,}45\) млрд лет \(\approx 5\times10^4\) лет. Λ в эту эпоху пренебрежимо мала.

## Что дальше

Мы умеем вычислять \(a(t)\) для любого набора \(\Omega_i\). Но как измерить эти параметры?
Наблюдаем мы не \(a(t)\), а потоки, угловые размеры и красные смещения. В
[главе 12](12-distances.md) мы определим космологические расстояния и покажем, как
сверхновые Ia и стандартные линейки превращают \(\eqref{eq:E-of-a}\) в наблюдаемые величины.
