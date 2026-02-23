export default function UselessWidget() {
  const now = new Date().toISOString();
  const items = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    label: `Item ${i + 1}`,
    score: Math.floor(Math.random() * 100),
  }));

  const total = items.reduce((acc, x) => acc + x.score, 0);

  return (
    <section style={{ padding: 16, border: "1px solid #ddd", borderRadius: 12 }}>
      <h2 style={{ margin: 0 }}>Useless Widget</h2>
      <p style={{ marginTop: 8, opacity: 0.75 }}>
        This component does nothing useful. Build time: <code>{now}</code>
      </p>

      <ul>
        {items.map((x) => (
          <li key={x.id}>
            {x.label} — <strong>{x.score}</strong>
          </li>
        ))}
      </ul>

      <p>
        Total score: <strong>{total}</strong>
      </p>
    </section>
  );
}
