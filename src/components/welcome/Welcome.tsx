import Text from './text_es.json';

export default function Welcome () {
    return (
        <div className="fs-4">
            <span>
                {Text._1}     
            </span>
            <br className='mb-3'/>
            <span>
                {Text._2}
            </span>
            <br className='mb-3'/>
            <span>
                {Text._3}
            </span>
            <br className='mb-3'/>
        </div>
    )
}
