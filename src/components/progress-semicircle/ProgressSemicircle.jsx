import './ProgressSemicircle.css'
function ProgressSemicircle ({indice, indiceTexto, color, limite}) {
    
    return(
        <div className='w-full h-full relative flex items-end justify-center'>
            <svg 
            className='w-full h-full absolute'
            viewBox="0 0 150 100"
            >
            <path d="M 0 100 A 60 60 0 0 1 150 100 Z" stroke={color} pathLength={limite} strokeDasharray={indice + ' 200'}/>
            </svg>
            <p className='text-3xl'>{indiceTexto}</p>
        </div>
        




    )
}

export default ProgressSemicircle