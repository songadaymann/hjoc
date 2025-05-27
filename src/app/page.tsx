import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        {/* These Link tags should ideally be in layout.tsx or handled via Next/font for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" integrity="sha512-O8C7wu8vFmRgojs/6W2cuwbO2FprcI4TyzrJ/rzhRZAx1CxJXh65D+uoUVu9AfmTh1cg9k6P7icohz8+6PSBbw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <div className="hero-container">
        <img src="/logo.png" alt="HJOC Logo" id="logo" />

        <h1 className="tagline-header eb-garamond">
          a ragtag group of greater hartford&nbsp;jews<br />
          committed&nbsp; to&nbsp;the&nbsp;liberation&nbsp; of&nbsp;all&nbsp;people
        </h1>

        <div id="right-panel">
          <p className="join-line"><span className="join-us">join us:</span></p>
          <p className="email-line"><a href="mailto:hartjoc@gmail.com" id="email-link">hartjoc@gmail.com</a></p>
          <nav id="nav-links">
            <a href="#" className="nav-link">calendar</a>
            <a href="https://www.instagram.com/hartfordjewish/" className="nav-link" target="_blank" rel="noopener noreferrer">instagram</a>
            {/* Updated link for Next.js routing */}
            <a href="/hineini" className="nav-link">hineini</a>
          </nav>
        </div>
      </div>
      {/* Script tag content from index.html - if any JS was here, it needs to be handled in React components */}
      {/* 
        <script>
         /* copy-to-clipboard button removed in new layout * / 
        </script> 
      */}
    </>
  );
}
