export default function Home() {
  return (
    <div style={{
      minHeight:"100vh",
      background:"linear-gradient(135deg,#b30000,#0f8a3c)",
      color:"white",
      padding:40
    }}>
      <h1>FMTSANY</h1>
      <p>İnsan Kaynakları Sistemi</p>

      <a href="/login" style={{color:"yellow"}}>
        Giriş Yap
      </a>
    </div>
  )
}
