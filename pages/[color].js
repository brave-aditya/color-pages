import colors from '../data/colors.json'
import '../styles/global.css';

export async function getStaticPaths() {
  const paths = colors.map(color => ({
    params: { color: color.name }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    // find the info for just one color
    const color = colors.find(color => color.name === params.color)
    // return it in the necessary format.
    return { props: { color } }
  }

  export default function Color({ color }) {
    return <div className='color-page' style={{ backgroundColor: color.hex }}>
      <h1>{color.name}</h1>
    </div>
  }