import Link from "next/link";


export default function Sidebar({ latest }) {
<section aria-label="Latest articles">
  <h2>Latest</h2>
  <ul>
    {latest.map((a) => (
      <li key={a.slug}>
        <Link href={`/news/${a.slug}`}>{a.title}</Link>
        {/* optionally date */}
      </li>
    ))}
  </ul>
</section>}