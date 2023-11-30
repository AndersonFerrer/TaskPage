import '../App.css'

export const Loader = () => {
    return (
        <div className='flex-col containerLoader'>
            <h1 className='mb-20 text-3xl font-bold text-white'>Cargando...</h1>
            <div className="Box">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

    )
}
