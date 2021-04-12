import Card from '../components/Card'
import '../styles/style.css'
import HeadSection from './HeadSection'

function SectionCard({data, title}) {
  return (
    <>
      <HeadSection title={title} />
      <div className="row">
        {
          data.map(item => {
            return (
              <Card key={item.id} data={item} />
            )
          })
        }
      </div>
      <div className="m-5">
        <hr/>
        <hr/>
      </div>
    </>
  )
}

export default SectionCard