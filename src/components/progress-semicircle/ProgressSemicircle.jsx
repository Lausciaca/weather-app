import './ProgressSemicircle.css'
function ProgressSemicircle ({indice, color}) {
    
    return(
        <div className='w-full h-full relative flex items-end justify-center'>
            <svg 
            className='w-full h-full absolute'
            viewBox="0 0 150 100"
            >
            <path d="M 0 100 A 60 60 0 0 1 150 100 Z" stroke={color} pathLength={'18'} strokeDasharray={indice + ' 200'}/>
            </svg>
            <p className='text-3xl'>{indice}</p>
        </div>
        




    )
}

export default ProgressSemicircle