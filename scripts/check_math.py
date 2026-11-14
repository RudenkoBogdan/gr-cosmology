"""Ищет в собранном сайте TeX, который не попал в блоки arithmatex (не отрендерится MathJax)."""
import pathlib, re, sys

PATTERN = re.compile(r".{0,40}(?:\\eqref|\\\(|\\\[|\\begin\{|\\[A-Za-z]+_\{).{0,30}")
bad = 0
for page in pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "site").rglob("*.html"):
    s = page.read_text()
    for tag in (r'<(span|div) class="arithmatex">.*?</\1>', r"<pre.*?</pre>", r"<script.*?</script>"):
        s = re.sub(tag, "", s, flags=re.S)
    hits = PATTERN.findall(s)
    if hits:
        bad += 1
        print(f"{page}: {len(hits)} — {hits[0]!r}")
sys.exit(1 if bad else 0)
