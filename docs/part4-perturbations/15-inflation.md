# 15. Инфляция

Горячая модель Большого взрыва ([главы 10–14](../part3-cosmology/index.md)) прекрасно
описывает Вселенную начиная с долей секунды, но молчаливо предполагает очень специальные
начальные условия: Вселенная должна была стартовать почти идеально однородной на
масштабах, которые никогда не были причинно связаны, и почти идеально плоской. Кроме
того, ей нужны малые затравочные неоднородности с почти масштабно-инвариантным спектром.
**Инфляция** — короткая эпоха ускоренного расширения в самом начале — объясняет все три
факта одним механизмом. В этой главе мы сформулируем проблемы горизонта и плоскостности,
построим инфляцию на скалярном поле в приближении медленного скатывания, вычислим спектр
квантовых флуктуаций и сравним предсказания простейших моделей с данными Planck.

!!! warning "Единицы в этой главе"
    Здесь мы полагаем \(\hbar = c = 1\) и используем **приведённую массу Планка**
    \begin{equation}
    M_{\rm Pl} \equiv \frac{1}{\sqrt{8\pi G}} = 2.435\times 10^{18}\ \text{ГэВ},
    \label{eq:mpl}
    \end{equation}
    так что уравнения Эйнштейна имеют вид \(G_{\mu\nu} = M_{\rm Pl}^{-2} T_{\mu\nu}\).
    Это отличается от соглашения остальной книги (\(G\) и \(\hbar\) явно), но так записана
    почти вся литература по инфляции. Масса Планка без приставки
    \(m_{\rm Pl} = G^{-1/2} = \sqrt{8\pi}\,M_{\rm Pl} \approx 1.22\times10^{19}\) ГэВ.

## 15.1. Проблема горизонта

Свет, испущенный в момент \(t = 0\), к моменту \(t\) проходит сопутствующее расстояние
(см. [главу 12](../part3-cosmology/12-distances.md))

\begin{equation}
\chi_{\rm p}(t) = \int_0^t \frac{\d t'}{a(t')} = \int_0^{a} \frac{\d \ln a'}{a' H(a')}
= \int_0^a \d\ln a'\,\left(a'H\right)^{-1}.
\label{eq:particle-horizon}
\end{equation}

Это **горизонт частиц**: области, разделённые сопутствующим расстоянием больше
\(\chi_{\rm p}\), никогда не обменивались сигналами. Ключевая величина в подынтегральном
выражении — **сопутствующий хаббловский радиус** \((aH)^{-1}\). Для жидкости с
\(p = w\rho\) имеем \(a \propto t^{2/(3(1+w))}\) и

\begin{equation}
(aH)^{-1} \propto a^{(1+3w)/2}.
\label{eq:comoving-hubble}
\end{equation}

При \(w > -1/3\) (излучение, вещество) хаббловский радиус **растёт**, интеграл
\eqref{eq:particle-horizon} набирается на поздних временах, и \(\chi_{\rm p} \sim (aH)^{-1}\).

Применим это к реликтовому излучению. Сопутствующий горизонт в момент рекомбинации
(\(z_* \approx 1090\)) составляет \(\chi_{\rm p}(t_*) \approx 280\) Мпк, а расстояние до
поверхности последнего рассеяния \(\chi_* \approx 13\,900\) Мпк. Значит, причинно
связанные области видны на небе под углом

\begin{equation}
\theta_{\rm hor} \approx \frac{\chi_{\rm p}(t_*)}{\chi_*} \approx 0.02\ \text{рад} \approx 1^\circ\!\!-\!2^\circ.
\label{eq:theta-horizon}
\end{equation}

На небе помещается \(\sim 4\pi/\theta^2_{\rm hor} \sim 10^4\) причинно не связанных областей,
и тем не менее их температуры совпадают с точностью \(10^{-5}\). Это и есть
**проблема горизонта**.

## 15.2. Проблема плоскостности

Уравнение Фридмана с кривизной можно переписать как

\begin{equation}
\Omega(a) - 1 = \frac{k}{(aH)^2}.
\label{eq:flatness}
\end{equation}

Опять появился \((aH)^{-1}\): пока он растёт, \(|\Omega - 1|\) растёт как \(a\) в эпоху
вещества и как \(a^2\) в эпоху излучения. Сегодня \(|\Omega_k| \lesssim 2\times10^{-3}\);
экстраполируя назад, получаем \(|\Omega - 1| \lesssim 10^{-18}\) в эпоху нуклеосинтеза и
\(\lesssim 10^{-60}\) на планковском масштабе. Плоская Вселенная — неустойчивая
неподвижная точка, и её нужно было «настроить» с фантастической точностью.

## 15.3. Решение: уменьшающийся хаббловский радиус

Обе проблемы исчезают, если на раннем этапе сопутствующий хаббловский радиус
**уменьшался**. Тогда \eqref{eq:flatness} динамически притягивается к нулю, а интеграл
\eqref{eq:particle-horizon} набирает основной вклад на ранних временах: области, которые
сегодня кажутся причинно несвязанными, на самом деле были внутри общего горизонта до
инфляции.

!!! definition "Определение: инфляция"
    **Инфляция** — эпоха, в течение которой сопутствующий хаббловский радиус убывает:
    \begin{equation}
    \frac{\d}{\d t}\left(\frac{1}{aH}\right) < 0
    \quad\Longleftrightarrow\quad \ddot a > 0
    \quad\Longleftrightarrow\quad \varepsilon \equiv -\frac{\dot H}{H^2} < 1
    \quad\Longleftrightarrow\quad w < -\frac13.
    \label{eq:inflation-def}
    \end{equation}

Длительность инфляции измеряют числом **е-фолдов** \(N = \ln(a_{\rm end}/a)\). Чтобы
сегодняшний хаббловский масштаб \(H_0^{-1}\) был внутри горизонта в начале инфляции,
нужно

\begin{equation}
N_{\rm tot} \gtrsim 50\text{–}60,
\label{eq:Nmin}
\end{equation}

точное число зависит от масштаба энергии инфляции и деталей разогрева (задача 15.2).
Почти постоянный \(H\) означает почти де-ситтеровское расширение \(a \propto e^{Ht}\).

## 15.4. Скалярное поле и медленное скатывание

Простейшая реализация — однородное скалярное поле \(\phi(t)\) (**инфлатон**) с действием

\begin{equation}
S = \int \d^4x\,\sqrt{-g}\left[\frac{M_{\rm Pl}^2}{2}R - \frac12 g^{\mu\nu}\pd_\mu\phi\,\pd_\nu\phi - V(\phi)\right].
\label{eq:inflaton-action}
\end{equation}

Его тензор энергии-импульса в FRW имеет вид идеальной жидкости с

\begin{equation}
\rho_\phi = \frac12\dot\phi^2 + V(\phi), \qquad p_\phi = \frac12\dot\phi^2 - V(\phi).
\label{eq:rho-p-phi}
\end{equation}

Если потенциальная энергия доминирует, \(p_\phi \approx -\rho_\phi\), т. е. \(w \approx -1\).
Уравнения движения — уравнение Фридмана и уравнение Клейна–Гордона:

\begin{equation}
H^2 = \frac{1}{3M_{\rm Pl}^2}\left[\frac12\dot\phi^2 + V\right], \qquad
\ddot\phi + 3H\dot\phi + V'(\phi) = 0.
\label{eq:inflaton-eom}
\end{equation}

Член \(3H\dot\phi\) играет роль трения («хаббловское трение»). Из них следует
\(\dot H = -\dot\phi^2/(2M_{\rm Pl}^2)\), поэтому \(\varepsilon = \dot\phi^2/(2M_{\rm Pl}^2H^2)\):
инфляция идёт, пока кинетическая энергия мала.

!!! definition "Определение: параметры медленного скатывания"
    Для потенциала \(V(\phi)\) определим
    \begin{equation}
    \epsilon_V = \frac{M_{\rm Pl}^2}{2}\left(\frac{V'}{V}\right)^2, \qquad
    \eta_V = M_{\rm Pl}^2\,\frac{V''}{V}.
    \label{eq:slow-roll-params}
    \end{equation}
    Режим **медленного скатывания**: \(\epsilon_V \ll 1\), \(|\eta_V| \ll 1\). Первое условие
    обеспечивает \(\dot\phi^2 \ll V\), второе — малость \(\ddot\phi\) (ускорение не
    разрушает режим).

При \(\epsilon_V, |\eta_V| \ll 1\) можно отбросить \(\dot\phi^2\) в уравнении Фридмана и
\(\ddot\phi\) в уравнении поля:

\begin{equation}
H^2 \approx \frac{V}{3M_{\rm Pl}^2}, \qquad 3H\dot\phi \approx -V', \qquad
\varepsilon \approx \epsilon_V.
\label{eq:slow-roll-eqs}
\end{equation}

Инфляция заканчивается при \(\epsilon_V(\phi_{\rm end}) \simeq 1\). Число е-фолдов между
моментом, когда поле равно \(\phi\), и концом инфляции:

\begin{equation}
N(\phi) = \int_t^{t_{\rm end}} H\,\d t = \int_{\phi_{\rm end}}^{\phi}\frac{H}{|\dot\phi|}\,\d\phi
\approx \frac{1}{M_{\rm Pl}^2}\int_{\phi_{\rm end}}^{\phi}\frac{V}{V'}\,\d\phi.
\label{eq:efolds}
\end{equation}

!!! example "Пример: хаотическая инфляция \(V = \tfrac12 m^2\phi^2\)"
    \(\epsilon_V = \eta_V = 2M_{\rm Pl}^2/\phi^2\). Инфляция кончается при
    \(\phi_{\rm end} = \sqrt2\,M_{\rm Pl}\), а
    \(N(\phi) = (\phi^2 - \phi_{\rm end}^2)/(4M_{\rm Pl}^2)\). Для \(N = 60\) нужно
    \(\phi_* \approx 15.6\,M_{\rm Pl}\): поле проходит **сверхпланковское** расстояние.
    Это характерно для всех моделей с заметной амплитудой гравитационных волн
    (граница Лайта, задача 15.5).

После окончания инфляции поле осциллирует около минимума и распадается на частицы
Стандартной модели — это **разогрев** (reheating), с которого начинается горячий
Большой взрыв части III.

## 15.5. Квантовые флуктуации

Инфляция не только сглаживает Вселенную, но и создаёт неоднородности. Разложим поле
\(\phi(t,\vb x) = \bar\phi(t) + \delta\phi(t,\vb x)\). Флуктуации \(\delta\phi\) связаны с
возмущениями метрики, и правильная калибровочно-инвариантная переменная —
**кривизна сопутствующих гиперповерхностей** \(\mathcal R\) (подробно в
[главе 16](16-perturbations.md)). В пространственно плоской калибровке
\(\mathcal R = H\,\delta\phi/\dot{\bar\phi}\).

Введём конформное время \(\tau\) (\(\d t = a\,\d\tau\)) и переменную Муханова–Сасаки
\(v = z\mathcal R\), \(z = a\dot{\bar\phi}/H = a\sqrt{2\varepsilon}\,M_{\rm Pl}\). Квадратичное
действие для возмущений сводится к действию набора осцилляторов с зависящей от
времени частотой, и каждая фурье-мода подчиняется **уравнению Муханова–Сасаки**

\begin{equation}
v_k'' + \left(k^2 - \frac{z''}{z}\right)v_k = 0.
\label{eq:mukhanov-sasaki}
\end{equation}

В почти де-ситтеровском пространстве \(a = -1/(H\tau)\), \(\tau \in (-\infty, 0)\) и
\(z''/z \approx 2/\tau^2\). Внутри горизонта (\(|k\tau| \gg 1\)) мода — обычный
осциллятор в плоском пространстве; естественно выбрать в качестве начального состояния
вакуум Минковского (**вакуум Банча–Дэвиса**). Решение:

\begin{equation}
v_k(\tau) = \frac{e^{-ik\tau}}{\sqrt{2k}}\left(1 - \frac{i}{k\tau}\right).
\label{eq:bunch-davies}
\end{equation}

После выхода за горизонт (\(|k\tau| \ll 1\)) \(|v_k| \to 1/(\sqrt{2k}\,k|\tau|)\), а
\(\mathcal R_k = v_k/z\) **замораживается**. Определим безразмерный спектр мощности через
\(\langle \mathcal R_{\vb k}\mathcal R_{\vb k'}^*\rangle = (2\pi)^3\delta^3(\vb k - \vb k')\,P_{\mathcal R}(k)\),
\(\Delta^2_{\mathcal R} = k^3 P_{\mathcal R}/(2\pi^2)\). Подстановка даёт

!!! theorem "Теорема: спектры инфляционных возмущений (первый порядок медленного скатывания)"
    \begin{equation}
    \Delta^2_{\mathcal R}(k) = \frac{1}{8\pi^2\varepsilon}\frac{H^2}{M_{\rm Pl}^2}\bigg|_{k = aH}
    = \frac{V}{24\pi^2 M_{\rm Pl}^4\,\epsilon_V}\bigg|_{k=aH},
    \label{eq:scalar-spectrum}
    \end{equation}
    \begin{equation}
    \Delta^2_{t}(k) = \frac{2}{\pi^2}\frac{H^2}{M_{\rm Pl}^2}\bigg|_{k=aH}.
    \label{eq:tensor-spectrum}
    \end{equation}
    Каждая величина вычисляется в момент **пересечения горизонта** \(k = aH\) данной модой.

Тензорные возмущения \(h_{ij}\) (гравитационные волны, [глава 9](../part2-gr/09-gravitational-waves.md))
ведут себя как два безмассовых скалярных поля с нормировкой \(M_{\rm Pl}h/2\); отсюда
множитель в \eqref{eq:tensor-spectrum}. Физический смысл прост: флуктуации безмассового
поля в де Ситтере \(\delta\phi \sim H/(2\pi)\) на каждый е-фолд, а
\(\mathcal R = H\delta\phi/\dot\phi\).

Параметризуют спектры степенными законами около опорного масштаба
\(k_* = 0.05\) Мпк\(^{-1}\):

\begin{equation}
\Delta^2_{\mathcal R} = A_s\left(\frac{k}{k_*}\right)^{n_s - 1}, \qquad
\Delta^2_t = A_t\left(\frac{k}{k_*}\right)^{n_t}, \qquad r \equiv \frac{A_t}{A_s}.
\label{eq:power-law}
\end{equation}

Поскольку \(\d\ln k = \d\ln(aH) \approx H\d t\), а \(H\) и \(\varepsilon\) медленно меняются,
дифференцирование \eqref{eq:scalar-spectrum}–\eqref{eq:tensor-spectrum} даёт

\begin{equation}
n_s - 1 = 2\eta_V - 6\epsilon_V, \qquad n_t = -2\epsilon_V, \qquad r = 16\epsilon_V = -8n_t.
\label{eq:ns-r}
\end{equation}

Последнее равенство — **условие согласованности** однополевой инфляции. Масштабно-инвариантный
спектр Харрисона–Зельдовича \(n_s = 1\) соответствует точному де Ситтеру; малое
отклонение \(n_s < 1\) — «подпись» конца инфляции.

## 15.6. Модели и наблюдения

Planck 2018 (TT,TE,EE+lowE+lensing) и BICEP/Keck 2021 дают

\begin{equation}
A_s = (2.10 \pm 0.03)\times10^{-9}, \qquad n_s = 0.9649 \pm 0.0042, \qquad r_{0.05} < 0.036\ (95\%).
\label{eq:planck-inflation}
\end{equation}

Для мономиальных потенциалов \(V \propto \phi^p\) из \eqref{eq:efolds} \(\phi_*^2 \approx 2pN M_{\rm Pl}^2\), и

\begin{equation}
n_s - 1 \approx -\frac{p+2}{2N}, \qquad r \approx \frac{4p}{N}.
\label{eq:monomial}
\end{equation}

Модель **Старобинского** (\(R + R^2/(6M^2)\)-гравитация, в эйнштейновской системе отсчёта
эквивалентная скалярному полю) имеет плато:

\begin{equation}
V(\phi) = V_0\left(1 - e^{-\sqrt{2/3}\,\phi/M_{\rm Pl}}\right)^2, \qquad
n_s \approx 1 - \frac{2}{N}, \qquad r \approx \frac{12}{N^2}.
\label{eq:starobinsky}
\end{equation}

Тот же результат даёт инфляция на поле Хиггса с неминимальной связью с кривизной.

### Интерактив: медленное скатывание

Выберите модель и число е-фолдов \(N_*\) между выходом за горизонт масштаба \(k_*\) и
концом инфляции. Слева — потенциал (единицы \(M_{\rm Pl} = 1\), нормировка \(V_0\)
произвольна: она фиксируется амплитудой \(A_s\) и не влияет на \(n_s\), \(r\)); жирным
выделен участок последних \(N_*\) е-фолдов. Справа — плоскость \((n_s, r)\) с
логарифмической шкалой \(r\): отрезки соответствуют \(N_* = 50\text{–}60\), закрашенная
полоса — \(1\sigma\) и \(2\sigma\) по \(n_s\) от Planck при \(r < 0.036\).

<div class="interactive" id="inflation-demo">
  <canvas id="inflation-V" width="520" height="300"></canvas>
  <canvas id="inflation-nsr" width="520" height="320"></canvas>
  <div class="controls">
    <label for="inflation-model">Модель:</label>
    <select id="inflation-model">
      <option value="phi2">m²φ²/2</option>
      <option value="phi4">λφ⁴/4</option>
      <option value="staro" selected>Старобинский</option>
    </select>
    <label for="inflation-N">\(N_*\) = <span id="inflation-N-val">55</span></label>
    <input type="range" id="inflation-N" min="40" max="70" step="1" value="55">
  </div>
  <div class="controls">
    <span>\(\phi_*/M_{\rm Pl}\) = <span id="inflation-phi">–</span></span>
    <span>\(n_s\) = <span id="inflation-ns">–</span></span>
    <span>\(r\) = <span id="inflation-r">–</span></span>
  </div>
</div>

Хорошо видно, что \(\phi^4\) исключена (слишком малое \(n_s\) и большое \(r\)), \(\phi^2\)
попадает в полосу по \(n_s\), но даёт \(r \approx 0.13\text{–}0.16\), что исключено
BICEP/Keck. Модели с плато (Старобинский, хиггсовская инфляция) предсказывают
\(r \sim 3\text{–}4\times10^{-3}\) — цель экспериментов следующего поколения
(Simons Observatory, LiteBIRD, CMB-S4).

### Численный пример

Код ниже решает уравнения \eqref{eq:slow-roll-params}, \eqref{eq:efolds} численно и
воспроизводит точки интерактива.

```python
import numpy as np
from scipy.integrate import quad
from scipy.optimize import brentq

# Потенциалы в единицах M_Pl = 1 (приведённая масса Планка); V0 сокращается в n_s, r
models = {
    "phi^2":      (lambda f: f**2,                     lambda f: 2*f,           lambda f: 2.0),
    "phi^4":      (lambda f: f**4,                     lambda f: 4*f**3,        lambda f: 12*f**2),
    "Starobinsky":(lambda f: (1-np.exp(-np.sqrt(2/3)*f))**2,
                   lambda f: 2*np.sqrt(2/3)*np.exp(-np.sqrt(2/3)*f)*(1-np.exp(-np.sqrt(2/3)*f)),
                   lambda f: (4/3)*np.exp(-np.sqrt(2/3)*f)*(2*np.exp(-np.sqrt(2/3)*f)-1)),
}

def slow_roll(V, dV, d2V, N):
    eps = lambda f: 0.5*(dV(f)/V(f))**2
    eta = lambda f: d2V(f)/V(f)
    f_end = brentq(lambda f: eps(f)-1, 0.1, 10)          # конец инфляции: eps = 1
    efolds = lambda f: quad(lambda x: V(x)/dV(x), f_end, f)[0]
    f_star = brentq(lambda f: efolds(f)-N, f_end+1e-6, 40)  # N е-фолдов до конца
    e, h = eps(f_star), eta(f_star)
    return f_star, 1-6*e+2*h, 16*e

for name, (V, dV, d2V) in models.items():
    for N in (50, 60):
        f, ns, r = slow_roll(V, dV, d2V, N)
        print(f"{name:12s} N={N}: phi*={f:5.2f}  n_s={ns:.4f}  r={r:.4f}")

# phi^2        N=50: phi*=14.21  n_s=0.9604  r=0.1584
# phi^2        N=60: phi*=15.56  n_s=0.9669  r=0.1322
# phi^4        N=50: phi*=20.20  n_s=0.9412  r=0.3137
# phi^4        N=60: phi*=22.09  n_s=0.9508  r=0.2623
# Starobinsky  N=50: phi*= 5.24  n_s=0.9616  r=0.0042
# Starobinsky  N=60: phi*= 5.45  n_s=0.9678  r=0.0030
```

## 15.7. Масштаб энергии инфляции

Из \eqref{eq:scalar-spectrum} и \(r = 16\epsilon_V\) получаем \(V = \tfrac{3\pi^2}{2}A_s r\,M_{\rm Pl}^4\), т. е.

\begin{equation}
V_*^{1/4} \approx 1.0\times10^{16}\ \text{ГэВ}\left(\frac{r}{0.01}\right)^{1/4},
\qquad H_* \approx 2.4\times10^{13}\ \text{ГэВ}\left(\frac{r}{0.01}\right)^{1/2}.
\label{eq:energy-scale}
\end{equation}

Обнаружение первичных B-мод поляризации CMB ([глава 17](17-cmb.md)) измерило бы масштаб
инфляции напрямую — близкий к масштабу великого объединения. Сегодняшнее ограничение
\(r < 0.036\) означает \(V_*^{1/4} < 1.4\times10^{16}\) ГэВ.

## Задачи

??? question "15.1. Ускорение и хаббловский радиус"
    Докажите эквивалентность условий \eqref{eq:inflation-def}.

    ??? success "Решение"
        \(\frac{\d}{\d t}(aH)^{-1} = \frac{\d}{\d t}\dot a^{-1} = -\ddot a/\dot a^2\), поэтому убывание
        \((aH)^{-1}\) эквивалентно \(\ddot a > 0\). Далее \(\ddot a/a = \dot H + H^2 = H^2(1-\varepsilon)\).
        Из второго уравнения Фридмана \(\ddot a/a = -\tfrac{4\pi G}{3}(\rho + 3p)\), так что
        \(\ddot a > 0 \Leftrightarrow w < -1/3\).

??? question "15.2. Сколько нужно е-фолдов?"
    Пусть инфляция идёт при \(H_{\rm inf} \approx\) const, а сразу после неё мгновенно
    устанавливается радиационная эпоха с температурой \(T_{\rm rh} \sim 10^{15}\) ГэВ.
    Оцените, во сколько раз должен уменьшиться \((aH)^{-1}\), чтобы сегодняшний горизонт
    \((a_0H_0)^{-1}\) был меньше \((aH)^{-1}\) в начале инфляции.

    ??? success "Решение"
        Требуется \((a_iH_{\rm inf})^{-1} > (a_0H_0)^{-1}\). Так как \(H\) при инфляции постоянен,
        \(a_{\rm end}/a_i = e^{N}\), и условие принимает вид
        \(e^N > \dfrac{a_{\rm end}H_{\rm inf}}{a_0H_0}\). После разогрева
        \(a_{\rm end}/a_0 \approx T_0/T_{\rm rh} \approx 2.3\times10^{-13}\,\text{ГэВ}/10^{15}\,\text{ГэВ} \sim 2\times10^{-28}\),
        а \(H_{\rm inf} \sim T_{\rm rh}^2/M_{\rm Pl} \sim 4\times10^{11}\) ГэВ, \(H_0 \approx 1.4\times10^{-42}\) ГэВ.
        Итого \(e^N \gtrsim 2\times10^{-28}\cdot 3\times10^{53} \sim 6\times10^{25}\), т. е.
        \(N \gtrsim 60\). (Мы пренебрегли эпохой вещества, которая уменьшает оценку на несколько единиц.)

??? question "15.3. Мономиальные потенциалы"
    Выведите формулы \eqref{eq:monomial} для \(V = \lambda\phi^p\), пренебрегая
    \(\phi_{\rm end}\) по сравнению с \(\phi_*\).

    ??? success "Решение"
        \(\epsilon_V = p^2M_{\rm Pl}^2/(2\phi^2)\), \(\eta_V = p(p-1)M_{\rm Pl}^2/\phi^2\).
        \(N = \int V/V'\,\d\phi/M_{\rm Pl}^2 = \phi^2/(2pM_{\rm Pl}^2)\) ⇒ \(\phi_*^2 = 2pNM_{\rm Pl}^2\).
        Тогда \(\epsilon_V = p/(4N)\), \(\eta_V = (p-1)/(2N)\),
        \(n_s - 1 = (p-1)/N - 3p/(2N) = -(p+2)/(2N)\), \(r = 4p/N\).

??? question "15.4. Масса инфлатона"
    Используя \(A_s = 2.1\times10^{-9}\) и \(N_* = 60\), найдите \(m\) в модели
    \(V = \tfrac12 m^2\phi^2\).

    ??? success "Решение"
        Из \eqref{eq:scalar-spectrum}: \(\Delta^2_{\mathcal R} = \dfrac{m^2\phi^2/2}{24\pi^2M_{\rm Pl}^4}\cdot\dfrac{\phi^2}{2M_{\rm Pl}^2}
        = \dfrac{m^2\phi_*^4}{96\pi^2M_{\rm Pl}^6}\). При \(\phi_*^2 = 4NM_{\rm Pl}^2\):
        \(\Delta^2_{\mathcal R} = m^2N^2/(6\pi^2M_{\rm Pl}^2)\), откуда
        \(m = \pi\sqrt{6A_s}\,M_{\rm Pl}/N \approx 5.9\times10^{-6}M_{\rm Pl} \approx 1.4\times10^{13}\) ГэВ.

??? question "15.5. Граница Лайта"
    Покажите, что \(\Delta\phi/M_{\rm Pl} \approx \int\sqrt{r/8}\,\d N\), и оцените
    пробег поля за \(\Delta N \approx 50\) при постоянном \(r = 0.01\).

    ??? success "Решение"
        \(\d\phi/\d N = \dot\phi/H = \sqrt{2\varepsilon}M_{\rm Pl}\) по модулю, а \(r = 16\varepsilon\) ⇒
        \(\d\phi/\d N = \sqrt{r/8}\,M_{\rm Pl}\). При \(r = 0.01\): \(\Delta\phi \approx 50\cdot0.035\,M_{\rm Pl} \approx 1.8\,M_{\rm Pl}\).
        Наблюдаемый уровень \(r \gtrsim 10^{-2}\) требует сверхпланковского пробега поля.

??? question "15.6. Модель Старобинского"
    Для потенциала \eqref{eq:starobinsky} найдите \(N(\phi)\) точно и выведите
    \(n_s \approx 1 - 2/N\), \(r \approx 12/N^2\) при \(N \gg 1\).

    ??? success "Решение"
        Пусть \(x = \sqrt{2/3}\,\phi/M_{\rm Pl}\). Тогда \(V/V' = M_{\rm Pl}\sqrt{3/2}\,(e^x-1)/2\) и
        \(N = \tfrac34\left[e^x - x\right]_{x_{\rm end}}^{x} \approx \tfrac34 e^x\).
        \(\epsilon_V = \tfrac43\dfrac{e^{-2x}}{(1-e^{-x})^2} \approx \tfrac43 e^{-2x} = \dfrac{3}{4N^2}\),
        \(\eta_V = \tfrac43\dfrac{2e^{-2x}-e^{-x}}{(1-e^{-x})^2} \approx -\tfrac43e^{-x} = -\dfrac1N\).
        Значит \(n_s - 1 \approx -2/N\), \(r = 16\epsilon_V = 12/N^2\).

## Что дальше

Мы получили почти масштабно-инвариантный спектр \(\Delta^2_{\mathcal R}(k)\) — начальные
условия для всей последующей эволюции. В [главе 16](16-perturbations.md) мы построим
линейную теорию возмущений на фоне FRW и проследим, как \(\mathcal R\) превращается в
гравитационные потенциалы и контрасты плотности тёмной материи, барионов и фотонов.
