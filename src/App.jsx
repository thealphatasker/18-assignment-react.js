import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
        <nav>
        <a href="#about">About - </a> 
        <a href="#characters">Characters - </a> 
        <a href="#families">Families - </a>
        <a href="#themes">Themes</a>
      </nav>
      <br />

      <header>
        <h1><u>DARK</u></h1>
        <p><i>The question is not how, the question is when.</i></p>
      </header>

    <br />

      <main>
        <h2 id="about">About the Series</h2>
        <p>
          <strong>DARK</strong> is a German science fiction thriller series set in
          the town of Winden. The story begins with the disappearance
          of a child and slowly reveals a complex <i>time-travel conspiracy</i>.
        </p>
        <p>
          The series explores causality, destiny, and how four
          families are connected across different timelines.
        </p>
    <br />
        <h2 id="characters">Main Characters</h2>
 
        <h3>Jonas Kahnwald</h3>
        <p>
          Jonas is a troubled teenager who discovers time travel and slowly
          realizes his role in the fate of Winden.
        </p>

        <h3>Martha Nielsen</h3>
        <p>
          Martha represents love, hope, and tragedy. Her existence is deeply tied
          to the knot of time.
        </p>

        <h3>Adam</h3>
        <p>
          Adam believes that free will fate controls all human actions and seeks to destroy the
          endless cycle of time.
        </p>
        <br />

        <h2 id="families">The Four Families</h2>
        <ul>
          <li>Kahnwald Family</li>
          <li>Nielsen Family</li>
          <li>Doppler Family</li>
          <li>Tiedemann Family</li>
        </ul>

        <br />

        <h2 id="themes">Core Themes</h2>
        <ol>
          <li>Time Travel</li>
          <li>Determinism vs Free Will</li>
          <li>Family & Inheritance</li>
          <li>Life, Death, and Rebirth</li>
        </ol>
        <br />

        <h2>Important Years</h2>
        <table border="1px" align='center'>
          <caption><i>Key Years in DARK</i></caption>
          <thead>
            <tr>
              <th>Year</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1953</td>
              <td>Discovery of the time portal</td>
            </tr>
            <tr>
              <td>1986</td>
              <td>Nuclear power plant incident</td>
            </tr>
            <tr>
              <td>2019</td>
              <td>Children start disappearing</td>
            </tr>
            <tr>
              <td>2053</td>
              <td>Post-apocalyptic Winden</td>
            </tr>
          </tbody>
        </table>
        <br />

        <h2>Symbolism</h2>
        <p>The triquetra represents the three timelines. <br />
          Past, Present, and Future
        </p>
        <br />
        <h2>User Opinion</h2>
        <form>
          <label htmlFor="name">Your Name:</label>
          <br />
          <input type="text" id="name" placeholder='e.g. Alpha' required/>
          <br />
          <br />

          <label htmlFor="email">Your Email:</label>
          <br />
          <input type="email" id="email" placeholder='e.g xyz@protonmail.com' required/>
          <br />
          <br />

          <label htmlFor="review">Your Thoughts on DARK:</label>
          <br />
          <textarea id="review" placeholder='Your Review' required></textarea>
          <br />
          <br />

          <input type="submit" value="Submit Review" />
        </form>

          <br />
          <br />
          <h3>Google Map:</h3>
          <iframe
          title="ARFA Tower Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.7605317111725!2d74.33999707506752!3d31.475772949345114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919042715f767ad%3A0xb0251034ce47145e!2sARFA%20Tower%2C%20Lahore%20%E2%80%93%20Kasur%20Rd%2C%20Nishtar%20Town%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1770963662926!5m2!1sen!2s"
          width="450"
          height="250"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          ></iframe>

      <br />
      <br />
      <h3>YouTube:</h3>
        <iframe
          title="DARK Trailer"
          width="450"
          height="250"
          src="https://www.youtube.com/embed/5o7HfWDWIuo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>


          <br />
        <h3>Did You Know?</h3>
        <p>
          DARK was the first German-language original series produced by Netflix.
        </p>
      </main>

      <footer>
        <p>
          <small>© 2026 DARK Fan Page | <i>Sic Mundus Creatus.</i></small>
        </p>
      </footer>
    </>
  );
}

export default App;
