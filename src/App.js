import './index.css';
import Card from './Card';

function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Card />
      </section>
    </main>
  );
}

export default App;
