export default function FeatureCard({title, children}){
  return (
    <div className="card">
      <h3 className="font-semibold text-lg text-deep">{title}</h3>
      <div className="mt-3 text-sm text-slate-700">{children}</div>
    </div>
  )
}
